<template>
  <div id="header">
    <div class="header-bar"></div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="60"
    >

      <v-img
        src="/image/svg/wes-logo-light.svg"
        contain
        max-width="90"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs class="hidden-sm-and-down" optional>
          <v-tab
            v-for="(item, i) in list"
            :key="i"
            :to="item.path"
            :exact="item.path === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
    </v-app-bar>

    <Drawer v-model="drawer" :items="list"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    Drawer: () => import('./Drawer'),
  },
  data:() => ({
    drawer: null,
    list: [
      { path: '/index', name: 'Home' },
      { path: '/about', name: 'About' },
    ],
    fixed: false
  }),
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
.header-bar{
  background: linear-gradient( 90deg ,var(--primary-color),#8ed6fb 50%,#d32e9d);
  height: 4px;
}
</style>
