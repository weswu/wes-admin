<template>
  <header>
    <v-app-bar
      class="primary"
      app
      dark
      text
      fixed
      dense
      height="56"
      :clipped-left="true"
    >
      <v-app-bar-nav-icon
        :disabled="!toggleBtn"
        @click.stop="$emit('toggleSidebar')"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="hidden-sm-and-down">
        <router-link
          :to="{ name : 'Dashboard' }"
          class="toolbar-title"
        >
          <span>后台管理</span>
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- menu -->
      <navbar-menu />

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-menu
          attach
          offset-y
          bottom
          left
          nudge-bottom="13"
          origin="center center"
          :close-on-content-click="false"
          transition="scale-transition"
        >
        <template v-slot:activator="{ on }">
            <v-btn
              icon
              text
              v-on="on"
            >
              <v-badge
                v-if="badgeLen"
                color="red"
                overlap
              >
                <span slot="badge">{{ badgeLen }}</span>
                <v-icon medium>notifications</v-icon>
              </v-badge>
              <v-icon
                v-else
                medium
              >notifications</v-icon>
            </v-btn>
        </template>

          <notification-list @unreadLen="(val) => badgeLen = val" />
        </v-menu>
        <v-btn
          class="hidden-xs-only"
          icon
          large
        >
          <app-screenfull fill="#333539" />
        </v-btn>
        <v-menu
          attach
          offset-y
          bottom
          left
          nudge-bottom="14"
        >


          <template v-slot:activator="{ on }" v-if="$vuetify && $vuetify.breakpoint.smAndUp">
            <v-app-bar-title
              v-on="on" style="margin-top: 8px;"
            >
              <v-avatar size="40">
                <img
                  :src="user.avatar"
                  alt=""
                >
              </v-avatar>
              <span style="margin-left: 10px;">{{ user.name }}</span>
              <v-icon>arrow_drop_down</v-icon>
            </v-app-bar-title>
          </template>

          <template v-slot:activator="{ on }" v-else>
            <v-btn
              icon
              dark
              v-on="on"
            >
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item class="hidden-sm-and-up">
              <v-list-item-title>
                <base-langbar />
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="toGithub">
              <v-list-item-avatar>
                <svg-icon
                  style="font-size:21px;"
                  icon-class="github"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  GitHub
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon>account_circle</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('common.account') }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-avatar>
                <v-icon>lock_open</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t('common.logout') }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <base-langbar v-if="$vuetify && $vuetify.breakpoint.smAndUp" />
      </v-toolbar-items>
    </v-app-bar>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import AppScreenfull from '@/components/widgets/AppScreenfull.vue';
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';
import NotificationList from '@/components/widgets/NotificationList.vue';
import NavbarMenu from './menus/TheIndex.vue';

export default {
  name: 'AppNavbar',
  components: {
    NavbarMenu,
    AppScreenfull,
    BaseLangbar,
    NotificationList,
  },
  props: {
    toggleBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawerRight: true,
      badgeLen: 0,
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.me,
    }),
  },
  methods: {
    toGithub() {
      window.open('https://github.com/vasttian/vue-admin-vuetify');
    },
    logout() {
      console.log('logout');
      this.$router.push({ name: 'Login' });
    },
  },
  created() {},
};
</script>
