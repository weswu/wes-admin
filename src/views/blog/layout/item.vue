<template>
  <li>
    <a :href="'/blog/detail/'+item.id">
      <div class="pic" :style="'background-image: url('+(item.photo || require('@/assets/home-hero.jpg'))+')'"></div>
      <div class="box">
        <div class="title">
          {{item.title}}
        </div>
        <span class="time">{{item.newsTime}}</span>
        <div class="content">
          {{item.description}}
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: ['item', 'type'],
}
</script>

<style lang="css" scoped>
</style>
