<template>
  <el-dialog custom-class="j_dialog" :title="title || '提示'" :visible.sync="modal" :width="width || '30%'" :modal="false">
    <slot name="content"></slot>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="ok">{{okText || '确 定'}}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['title', 'okText', 'width'],
  data () {
    return {
      modal: false
    }
  },
  methods: {
    open () {
      this.modal = true
    },
    ok () {
      this.modal = false
      this.$emit('on-ok')
    }
  }
}
</script>

<style lang="less">
</style>
