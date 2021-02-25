<template>
  <div>
    <Hero/>
    <NewsAlt/>
  </div>
</template>

<script>
  import Hero from '@/views/blog/sections/Hero'
  import NewsAlt from '@/views/blog/sections/NewsAlt'

  export default {
    components: {
      Hero, NewsAlt
    },
    metaInfo: { title: 'News' },
  }
</script>

<style lang="scss">
</style>
