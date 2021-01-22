<template>
  <div class="d-contact d-public">
    <div class="container">

      <!-- <el-row :gutter="24">
        <el-col :xs="24" :sm="12" :lg="8">
          <el-card shadow="never">
            <div slot="header" class="clearfix">
              <span><img src="/img/site/i-dang.png" class="d-icon-dang">支部主题党日活动计划</span>
            </div>
            <el-image src="/admin/sys-file/cloud/thumb_74d8232fd9ee46f89fbb33248e6bbe87.jpg" fit="scale-down">
             <img slot="error" src="/img/logo.png" style="width:200px;">
           </el-image>
          </el-card>
        </el-col>
      </el-row> -->
      <!--党务公开栏-->
      <JTitle :title="'支部主题党日活动计划'">
        <template v-slot:content>
          <div class="content">
            <div class="photo-list">
              <el-image v-for="item,index in party.board.ztzp" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.board.ztzp)" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span v-if="party.board.ztzp.length === 0">暂无数据</span>
            </div>
          </div>
        </template>
      </JTitle>

      <JTitle :title="'“两学一做”学习教育常态化制度学习计划'">
        <template v-slot:content>
          <div class="content">
            <div class="photo-list">
              <el-image v-for="item,index in party.board.hdjh" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.board.hdjh)" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span v-if="party.board.hdjh.length === 0">暂无数据</span>
            </div>
          </div>
        </template>
      </JTitle>

      <JTitle :title="'先锋指数考核'">
        <template v-slot:content>
          <div class="content">
            <div class="photo-list">
              <el-image v-for="item,index in party.board.xxjh" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.board.xxjh)" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span v-if="party.board.xxjh.length === 0">暂无数据</span>
            </div>
          </div>
        </template>
      </JTitle>
      <JTitle :title="'党组织书记党建责任清单十五条'">
        <template v-slot:content>
          <div class="content">
            <div class="photo-list">
              <el-image v-for="item,index in party.board.zrqd" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.board.zrqd)" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span v-if="party.board.zrqd.length === 0">暂无数据</span>
            </div>
          </div>
        </template>
      </JTitle>

      <!-- <JTitle :title="'党费缴纳'">
        <template v-slot:content>
          <div class="content">
            <a href="/#/nfnet/budget/index" target="_blank">党员日常量化考核</a>
          </div>
        </template>
      </JTitle>
      <JTitle :title="'党员日常量化考核'">
        <template v-slot:content>
          <div class="content">
            <a href="/#/nfnet/assess/index" target="_blank">党员日常量化考核</a>
          </div>
        </template>
      </JTitle> -->
      <JTitle :title="'其他党务（党员发展情况、党内关爱基金使用情况、不合格党员处置情况、其他）'">
        <template v-slot:content>
          <div class="content">
            <div class="photo-list">
              <el-image v-for="item,index in party.board.qt" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.board.qt)" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <span v-if="party.board.qt.length === 0">暂无数据</span>
            </div>
          </div>
        </template>
      </JTitle>
      <div class="d-row">
        <el-row><el-col :span="4">党费缴纳</el-col><el-col :span="20"><a href="/#/nfnet/budget/index" target="_blank">党费缴纳</a></el-col></el-row>
        <el-row><el-col :span="4">党员日常量化考核</el-col><el-col :span="20"><a href="/#/nfnet/assess/index" target="_blank">党员日常量化考核</a></el-col></el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import JTitle from '@/views/blog/components/group/j-title'

export default {
  components: {
    JTitle
  },
  computed: {
    ...mapState(['party'])
  },
  data: () => ({
    checkList: ['党总支']
  }),
  methods: {
    getPrivewImages(index, list) {
      let start = []
      let end = []
      list.forEach((item, i) => {
        if (i >= index) {
          start.push(item.photo)
        } else {
          end.push(item.photo)
        }
      })
      return start.concat(end)
    },
  }
}
</script>

<style lang="scss">
.d-public{
  .photo-list{
    //justify-content: center;
  }
  .el-image{
    width: 260px !important;
    height: 260px !important;
  }
}
</style>
