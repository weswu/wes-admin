<template>
  <li>
    <a :href="'./site.html#/news/'+item.id+'?type='+type">
      <div class="pic" :style="'background-image: url('+(item.thumb || item.photo || '/img/logo.png')+')'"></div>
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
