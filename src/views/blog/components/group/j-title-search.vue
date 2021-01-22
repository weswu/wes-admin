<template>
  <div class="j-title-search">
    <el-row :gutter="24">
      <el-col :span="12">
        <h2>{{title}}</h2>
      </el-col>
      <el-col :span="null" style="float:right" v-if="isSearch">
        <el-input size="mini" placeholder="请输入标题" v-model="name" clearable @clear="search" class="input-with-select">
          <el-button size="mini" slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    title: {
      type: String,
      default: ''
    },
    isSearch: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      name: this.value
    }
  },
  methods: {
    search () {
      this.$emit('on-change', this.name)
    }
  }
}
</script>

<style lang="scss">
</style>
