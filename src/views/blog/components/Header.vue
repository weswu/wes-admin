<template>
  <div id="header">
    <div style="height:60px;"></div>
    <header>
      <div class="container header">
        <a class="header-logo" href="./">
          <img style="width: 38px; height: 38px" src="/img/logo.png"></img>
        </a>
        <div :class="'header-menu' + ($store.state.open ? ' --open' : '')">
          <v-tabs align-with-title>
            <v-tab v-for="item in list" :key="item.path">{{item.name}}</v-tab>
          </v-tabs>
        </div>
        <div @click="open" :class="'header-toggle' + ($store.state.open ? ' --open' : '')">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data:() => ({
    list: [
      { path: '/index', name: '文章' },
      { path: '/me', name: '我' },
    ],
    fixed: false
  }),
  computed: {
    active() {
      let defaultActive = this.$route.path
      let type = this.$route.query.type
      if (type) defaultActive = '/' + type
      return defaultActive
    }
  },
  methods: {
    open() {
      this.$store.commit('setOpen', !this.$store.state.open)
    },
    closeOpen(){
      this.$store.commit('setOpen', false)
    }
  },
}
</script>

<style lang="scss">

</style>
