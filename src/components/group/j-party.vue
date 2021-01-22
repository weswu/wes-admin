<template>
  <avue-input-tree v-model="value" default-expand-all
              :node-click="getData"
              :dic="partyTree"
              :props="props"
              type="tree"
              @change="change"
              placeholder="请选择党组织" />
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: ['id'],
    data() {
      return {
        value: this.id,
        props: {
          label: 'name',
          value: 'id'
        }
      }
    },
    computed: {
      ...mapState(['partyTree'])
    },
    watch: {
      id(){
        this.value = this.id
      }
    },
    created() {
      if(this.partyTree.length === 0) this.$store.dispatch('getPartyTree')
    },
    methods: {
      change(data,node,done){
        if (data === '') {
          this.$emit('on-change', {
            id: '', name: ''
          })
        }
      },
      getData(node) {
        this.$emit('on-change', node)
      }
    }
  }
</script>

<style lang="less">
</style>
