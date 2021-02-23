<template>
  <div>
    <HeroAlt/>
    <Article/>
  </div>
</template>

<script>
  import HeroAlt from '@/views/blog/sections/HeroAlt'
  import Article from '@/views/blog/sections/Article'
  export default {
    components: {
      HeroAlt, Article
    },
    data: () => ({
      detail: {

      },
    }),
    created() {
      //this.get()
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
</style>
