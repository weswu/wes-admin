// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue';
import Vuetify from 'vuetify/lib'
import * as directives from 'vuetify/es5/directives';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import i18n from '../i18n';
import Snackbar from '../components/snackbar/index';

Vue.use(Vuetify, {
  directives,
  lang: {
    locales: { enLang, zhLang },
    current: 'enLang',
  },
});

Vue.prototype.$message = Snackbar;


export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#42a5f6',
        secondary: '#050b1f',
        accent: '#204165',
      },
      dark: {},
    },
  }
})
