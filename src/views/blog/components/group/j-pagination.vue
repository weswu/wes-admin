<template>
  <div class="j-pagination">
    <span class="total">当前显示第<span>{{searchData.current}}</span>页共<span>{{total}}</span>条记录</span>
    <el-pagination
      layout="prev, pager, next, jumper"
      :current-page="searchData.current"
      :page-size="searchData.size"
      :total="total || 0"
      @size-change="sizeChange"
      @current-change="currentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['total', 'searchData'],
  methods: {
    sizeChange(val) {
      this.searchData.size = val
      this.$emit('on-change')
    },
    currentChange(val) {
      this.searchData.current = val
      this.$emit('on-change')
    }
  }
}
</script>

<style lang="scss">
</style>
