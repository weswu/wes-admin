<template>
  <div class="d-contact">
    <div class="container">

      <!--党组织概况-->
      <JTitle :title="'基本信息'"/>

      <div class="d-row">
        <el-row><el-col :span="4">党组织名称</el-col><el-col :span="20">{{party.survey.dzzmc || party.partyName}}</el-col></el-row>
        <el-row><el-col :span="4">企业名称</el-col><el-col :span="20">{{party.survey.qymc}}</el-col></el-row>
        <el-row><el-col :span="4">企业地址</el-col><el-col :span="20">{{party.survey.qydz}}</el-col></el-row>
        <el-row><el-col :span="4">党组织建制</el-col><el-col :span="20">{{party.survey.dzzjz}}</el-col></el-row>
        <el-row>
          <el-col :span="4">党组织书记</el-col>
          <el-col :span="4" class="content">{{dzzsj}}</el-col>
          <el-col :span="4">联系方式</el-col>
          <el-col :span="4" class="content">{{sjlxfs}}</el-col>
          <el-col :span="4">在册正式党员数</el-col>
          <el-col :span="4" class="content">{{party.numParty}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">主要出资人</el-col>
          <el-col :span="4" class="content">{{party.survey.zyczr}}</el-col>
          <el-col :span="4">联系方式</el-col>
          <el-col :span="4" class="content">{{party.survey.lxfs}}</el-col>
          <el-col :span="4" style="font-size: 13px;">组织关系不在企业的党员数</el-col>
          <el-col :span="4" class="content">{{party.survey.zzgxbzqydys}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">党组织班子人数</el-col>
          <el-col :span="4" class="content">{{dzzbzrs}}</el-col>
          <el-col :span="4">党组织班子分工</el-col>
          <el-col :span="4" class="content">{{party.survey.dzzbzfg}}</el-col>
          <el-col :span="4">预备党员数</el-col>
          <el-col :span="4" class="content">{{party.numPrepare}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">积极分子</el-col>
          <el-col :span="4" class="content">{{party.numActive}}</el-col>
          <el-col :span="4">入党申请人数</el-col>
          <el-col :span="4" class="content">{{party.numApply}}</el-col>
          <el-col :span="4"><span v-if="party.partyType === '2'">海内外高层次</span>人才数</el-col>
          <el-col :span="4" class="content">{{party.numPersonnel}}</el-col>
        </el-row>
        <el-row>
          <el-col :span="4">党员活动室</el-col>
          <el-col :span="20">
            <div class="photo-list">
              <el-image v-for="item,index in party.survey.dyhds" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.dyhds)" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </el-col>
        </el-row>
        <el-row><el-col :span="4">宣传标语</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <el-image v-for="item,index in party.survey.xcby" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.xcby)" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col></el-row>
        <el-row><el-col :span="4">组织名称牌</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <el-image v-for="item,index in party.survey.zzmcp" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.zzmcp)" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col></el-row>
        <el-row><el-col :span="4">党员照片墙</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <el-image v-for="item,index in party.survey.dyzpq" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.dyzpq)" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col></el-row>
        <el-row><el-col :span="4">上墙制度</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <el-image v-for="item,index in party.survey.sqzd" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.sqzd)" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col></el-row>
        <el-row><el-col :span="4">党报党刊</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <el-image v-for="item,index in party.survey.dbdk" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.dbdk)" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col></el-row>
        <el-row><el-col :span="4">电教播放设备</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <el-image v-for="item,index in party.survey.djbfsb" :key="index" :src="item.thumb" :preview-src-list="getPrivewImages(index, party.survey.djbfsb)" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col></el-row>
        <el-row><el-col :span="4">党组织荣誉</el-col>
        <el-col :span="20">
          <div class="photo-list">
            <div v-for="item,index in party.survey.dzzry" :key="index">
              <el-image :src="item.thumb" :preview-src-list="[item.photo]" lazy>
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
          </div>
        </el-col></el-row>
      </div>
      <JTitle :title="'企业情况'"/>
      <div class="d-row">
        <el-row><el-col :span="4">主营业务</el-col><el-col :span="20">{{party.survey.zyyw}}</el-col></el-row>
        <el-row><el-col :span="4">主营产品</el-col><el-col :span="20">{{party.survey.zycp}}</el-col></el-row>
        <el-row><el-col :span="4">缴纳社保职工数量</el-col><el-col :span="20">{{party.survey.jnsbzgsl}}</el-col></el-row>
        <el-row><el-col :span="4">职工数量</el-col><el-col :span="20">{{party.survey.zgsl}}</el-col></el-row>
      </div>
      <JTitle :title="'工作亮点及特色'">
        <template v-slot:content>
          <div class="content" style="white-space: pre-line;">
            {{party.survey.gzldjtd}}
          </div>
        </template>
      </JTitle>
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
    checkList: ['党总支'],
    dzzsj: '',
    sjlxfs: '',
    dzzbzrs: ''
  }),
  created() {
    this.get()
  },
  methods: {
    get() {
      var params = {
        partyId: this.$route.query.partyId || this.party.id
      }
      this.$http.get('/nfnet/partymember/page', {params}).then(res => {
        res.data.records.forEach((item, i) => {
          if (item.partyPosition === '2') {
            this.dzzsj = item.name
            this.sjlxfs = item.mobileNo
          }
          this.dzzbzrs = res.data.total
        })
      })
    },
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

</style>
