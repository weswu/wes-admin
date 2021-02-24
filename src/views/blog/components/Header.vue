<template>
  <div id="header">
    <div class="header-bar"></div>
    <v-app-bar
      id="home-app-bar"
      app style="top:2px"
      color="white"
      elevation="1"
      height="60"
    >

      <base-img
        :src="require('@/assets/svg/wes-logo-light.svg')"
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
      { path: '/blog/index', name: 'Home' },
      // { path: '/blog/about', name: '关于' },
    ]
  }),
}
</script>

<style lang="scss">
  .header-bar{
    background: linear-gradient( 90deg ,var(--primary-color),#8ed6fb 50%,#d32e9d);
    height: 2px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  #home-app-bar{
    .v-tabs-slider{
      max-width: 24px;
      margin: 0 auto;
    }
    .v-tab{
      &::before{
        display: none;
      }
    }
  }
</style>
