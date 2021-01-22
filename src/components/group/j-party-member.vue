<template>
  <div class="j-party-member">
    <ul>
      <li v-for="item,index in list" :key="index">
        <JParty :id.sync="item.partyId" @on-change="changeParty($event, item)"/>
        <el-select v-model="item.partyPosition" placeholder="请选择党务" @change="save(item)" class="j-party-member-select">
          <el-option v-for="item,index in partyPosition" :key="index" :label="item.label" :value="item.value"/>
        </el-select>
        <el-tooltip effect="dark" content="删除" placement="top">
          <el-button type="danger" icon="el-icon-delete" circle @click="del(item.id, index)"></el-button>
        </el-tooltip>
      </li>
      <li>
        <el-button icon="el-icon-edit" @click="add">添加</el-button> <span style="margin-left:30px;font-size:12px;color:#999">注：党务选择完自动保存，不用确定提交</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { delObj, addObj, putObj } from '@/api/nfnet/partymember'
import JParty from '@/components/group/j-party'

export default {
  props: ['list', 'memberId'],
  components: {
    JParty
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      partyPosition: state => state.common.partyPosition
    })
  },
  created() {
    this.$store.dispatch('getDict', 'party_position')
  },
  methods: {
    // 党组织
    changeParty(node, item) {
      item.partyId = node.id
      item.partyName = node.name
      this.save(item)
    },
    add () {
      this.list.push({
        memberId: this.memberId,
        partyId: '',
        partyName: "",
        partyPosition: ""
      })
    },
    // 新增，修改
    save(item) {
      if(item.partyId || item.partyPosition){
        if (item.id) {
          putObj(item).then(data => {
            this.$emit('on-change')
            //this.$message.success('修改成功')
          });
        } else {
          addObj(item).then(data => {
            this.$emit('on-change')
            //this.$message.success('添加成功')
          })
        }
      }
    },
    // 删除
    del(id,index) {
      this.$confirm('是否确认删除该党务信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(function() {
          if (id) return delObj(id)
        })
        .then(data => {
          this.$message.success('删除成功')
          this.list.splice(index, 1)
        })
    }
  }
}
</script>

<style lang="less">
.j-party-member{
  li{
    .el-select{
      margin: 0 20px 5px 0;
    }
  }
}
</style>
