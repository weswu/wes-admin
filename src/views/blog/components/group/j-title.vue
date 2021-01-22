<template>
  <div class="j-title">
    <div class="j-title-header">
      <div class="item title">
        <img src="/img/site/i-dang.png" class="d-icon-dang"/>{{title}}
      </div>
      <div class="item enTitle">
        {{enTitle}}
      </div>
    </div>
    <slot name='content'/>
  </div>
</template>

<script>
export default {
  props: ['title', 'enTitle']
}
</script>

<style lang="scss">

</style>
