<template>
  <div class="d-position">
    <div class="container">
      <main class="site__content">
        <div class="post-content">
          <ul>
            <li v-for="item,index in list" :key="index">
              <div class="name">{{item.name}}</div>
              <div class="desc">
                <span class="week">开放星期：{{item.openWeek}}</span>
                <span class="time">开放时间：{{item.openHour}}</span>
              </div>
              <article v-html="item.content"></article>
            </li>
            <li v-if="total === 0" style="font-size: 14px;">暂无阵地数据</li>
          </ul>
        </div>
      </main>
      <JTitleSearch :title="'共享访问'" :isSearch="false"/>
      <el-form :model="model" :rules="rules" ref="model" label-width="150px">
        <el-form-item label="选择党建阵地：" prop="positionId">
          <el-select v-model="model.positionId" placeholder="请选择">
           <el-option
             v-for="item in list"
             :key="item.id"
             :label="item.name"
             :value="item.id">
           </el-option>
         </el-select>
        </el-form-item>
        <el-form-item label="访问党组织：" prop="fromParty">
          <el-input v-model="model.fromParty" placeholder="访问党组织"></el-input>
        </el-form-item>
        <el-form-item label="访问人数：" prop="visitNumber">
          <el-input v-model="model.visitNumber" placeholder="访问人数"></el-input>
        </el-form-item>
        <el-form-item label="联系人：" prop="contactPerson">
          <el-input v-model="model.contactPerson" placeholder="联系人"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" prop="contactPhone">
          <el-input v-model="model.contactPhone" placeholder="联系电话"></el-input>
        </el-form-item>
        <el-form-item label="申请时间：" prop="applyTime">
          <el-date-picker v-model="model.applyTime" type="date" value-format="yyyy-MM-dd hh:mm:ss" placeholder="选择申请时间"/>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" size="small" @click="submit" style="width: 110px;">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import JTitleSearch from '@/views/blog/components/group/j-title-search'

  export default {
    components: {
      JTitleSearch
    },
    data: () => ({
      total: '',
      searchData: {
        current: 1,
        size: 10
      },
      list: [],
      model: {
        positionId: '',
        fromParty: '',
        visitNumber: '',
        contactPerson: '',
        contactPhone: '',
        applyTime: '',
        status: '1'
      },
      rules: {
        positionId: [{ required: true, message: '党建阵地不能为空', trigger: 'change' }],
        fromParty: [{ required: true, message: '党组织名称不能为空', trigger: 'change' }],
        visitNumber: [{ required: true, message: '访问人数不能为空', trigger: 'change' }],
        contactPerson: [{ required: true, message: '联系人不能为空', trigger: 'change' }],
        contactPhone: [{ required: true, message: '联系电话不能为空', trigger: 'change' }],
        applyTime: [{ required: true, message: '申请时间不能为空', trigger: 'change' }],
      },
    }),
    computed: {
      ...mapState(['party'])
    },
    created() {
      this.get()
    },
    methods: {
      get() {
        this.searchData.partyId = this.$route.query.partyId || this.party.id
        this.$http.get('/nfnet/positions/page', {params: this.searchData}).then(res => {
          this.list = res.data.records
          this.total = res.data.total
          this.list.forEach((item, i) => {
            var openWeek = ''
            item.openWeek && item.openWeek.split(',').forEach((row, i) => {
              if(i ===0) {openWeek = '周' + row}
              else {openWeek += '，' + '周' + row}
            })
            item.openWeek = openWeek
          })
        })
      },
      submit() {
        this.$refs['model'].validate((valid) => {
          if (valid) {
            this.$http.put('/nfnet/positionsvisit', this.model).then(res => {
              this.$message.success('发送成功！')
            })
          } else {
            return false;
          }
        })
      }
    }
  }
</script>

<style lang="scss">
.d-position{
  ul li{
    margin-bottom: 50px;
  }
  .name{
    font-size: 1.3em;
    text-align: center;
    line-height: 3rem;
  }
  .desc{
    font-size: 14px;
    color:#000;
    text-align: center;
    line-height: 2rem;
  }
  .time{
    margin-left: 3em;
  }
  .post-content{
    padding-bottom: 30px;
  }
  .container{
    max-width: 960px;
    margin: 20px auto 70px auto;
  }
}
</style>
