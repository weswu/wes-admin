<template>
  <div class="news-detail bg">
    <div class="container">
      <main class="site__content">
        <div class="content">
          <h3 class="title">
            {{detail.title}}
          </h3>
          <div class="" style="margin: 0 auto;text-align:center">
            <time>发布时间：{{detail.newsTime}}</time>
            <span class="keyword">活动名称：
              <span v-html="listFilter(detail.ngroupType, 'ngroupType')"></span>
            </span>
            <br/>
            <time v-if="detail.meetStartTime">开始时间：{{detail.meetStartTime}}</time>
            <time v-if="detail.meetEndTime">结束时间：{{detail.meetEndTime}}</time>
          </div>

          <article v-html="detail.content"></article>
          <span class="keyword" v-if="detail.keyword">关键词：{{detail.keyword}}</span>
          <span class="keyword back" @click="back">返回</span>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      detail: {},
      ngroupType: [
        {value: '1', label: '支部委员会'},
        {value: '2', label: '支部党员大会'},
        {value: '3', label: '党小组会'},
        {value: '4', label: '党课'},
        {value: '5', label: '支部主题党日'},
        {value: '6', label: '组织生活会'},
        {value: '7', label: '志愿服务'}
      ],
    }),
    created() {
      this.get()
    },
    methods: {
      get() {
        this.$http.get('/nfnet/newsbase/'+this.$route.params.id).then(res => {
          this.detail = res.data
          this.detail.newsTime = this.detail.newsTime.slice(0,16)
          this.detail.meetStartTime = this.detail.meetStartTime.slice(0,16)
          this.detail.meetEndTime = this.detail.meetEndTime.slice(0,16)
        })
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss">
.news-detail{
  overflow: hidden;
  .container{
    max-width: 850px;
  }
  .content{
    background: #fff;
    margin: 20px 0;
    border-radius: 3px;
    padding: 30px 20px;
    .title{
      text-align: center;
      padding-bottom: 10px;
    }
    time{
      font-size: 14px;
      color:#777;
      padding-right: 20px;
    }
    article{
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .keyword{
      font-size: 14px;
      color:#777;
    }
    .back{
      float: right;
      margin-right: 20px;
      color: #409EFF;
      cursor: pointer;
    }
  }
}
</style>
