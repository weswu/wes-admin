<template>
  <avue-input-tree
    v-model="id"
    :node-click="getData"
    :dic="treeData"
    :props="props"
    type="tree"
    placeholder="请选择籍贯"/>
</template>

<script>
import { fetchTree } from '@/api/nfnet/region'
export default {
  props: ['id'],
  data () {
    return {
      treeData: [],
      props: {
        label: 'name',
        value: 'id'
      }
    }
  },
  created () {
    this.get()
  },
  methods: {
    get(){
      fetchTree().then(res => {
        this.treeData = res.data
      })
    },
    getData(node) {
      this.$emit('on-change', node)
    }
  }
}
</script>

<style lang="less">
</style>
