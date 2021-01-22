<template>
  <ul class="j_picture">
    <li class="j_picture_item" v-for="(item, index) in list" :key="index">
      <JUpload :img.src="item.thumb" @on-change="picChange($event, item, index)"/>
      <div class="bom">
        <el-popover
          placement="bottom"
          trigger="hover">
          <img :src="item.thumb">
          <i class="el-icon-view" slot="reference"></i>
        </el-popover>
        <i class="el-icon-delete" @click="del(index)"></i>
      </div>
      {{index}}
    </li>
    <li class="j_picture_item add" v-if="list && list.length < 20">
      <JUpload @on-change="picChange($event, 'add')"/>
    </li>
  </ul>
</template>

<script>
import JUpload from '@/components/group/j-upload'

export default {
  props: {
    list: {},
  },
  components: {
    JUpload
  },
  data () {
    return {
      index: 0,
      toggle: false
    }
  },
  methods: {
    del (index) {
      let list = this.list
      list.splice(index, 1)
      //this.$emit('on-change', list)
    },
    picChange (e, item, index) {
      let pic = {}
      if (item !== 'add') pic = this.list[index]
      let list = this.list
      pic.thumb = e.data.thumbUrl
      pic.photo = e.data.url
      pic.text = e.data.original
      if (item === 'add') {
        list.push(pic)
      } else{
        list[index] = pic
      }
      //this.$emit('on-change', list)
    }
  }
}
</script>

<style lang="scss">
.j_picture{
  position: relative;
  .j_picture_item{
    width: 100px;
    height: 100px;
    line-height: 100px;
    float: left;
    cursor: pointer;
    display: table-cell;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;
    background: #f5f6fa;
    overflow: hidden;
    &:hover{
      .bom{
         opacity: 1
      }
      .update{
         opacity: 1
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
    .top{
      position: absolute;
      left: -1px;
      top: -1px;
      z-index: 10;
      background: #3e3e3e;
      width: 104px;
      color: #fff;
      height: 31px;
      line-height: 31px
    }
    .bom{
      position: absolute;
      left: 1px;
      bottom: 1px;
      z-index: 10;
      background: #f5f6fa;
      border-top: 1px solid #ddd;
      width: 98px;
      height: 30px;
      color: #999;
      line-height: 30px;
      opacity: 0;
      transition: 0.3s ease;
      i{
        line-height: 30px;
        color: #437708;
        font-size: 20px;
        float: left;
        width: 50%;
        border-right:1px solid #ddd;
      }
      .icon-x{
        color: #d0021b;
        font-size: 14px;
      }
    }
    .update{
      opacity: 0;
      background: rgba(0,0,0,0.5);
      color: #fff;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 9;
      transition: 0.3s ease;
    }
  }
  .icon-plus-add{
    font-size: 38px;
    color: #c9c9c9;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 104px;
  }
}
</style>
