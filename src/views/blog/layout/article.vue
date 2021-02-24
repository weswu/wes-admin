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
    metaInfo: { title: 'News Single' }
  }
</script>

<style lang="scss">
</style>
