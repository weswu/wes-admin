<template>
  <el-upload :headers="$store.state.headers" :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :on-error="uploadError"
    class="dj-form-img"
    action="/admin/sys-file/upload">
    <img v-if="img" :src="img">
    <i v-else class="el-icon-plus"/>
  </el-upload>
</template>

<script>
export default {
  props: ['img'],
  data () {
    return {}
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.$emit('on-change', res)
    }
  }
}
</script>

<style lang="less">
</style>
