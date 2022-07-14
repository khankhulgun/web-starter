import { reactive } from "vue";
/*
* Plugins
* */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios';
import VueSocialSharing from 'vue-social-sharing'
import VueAxios from 'vue-axios'
import VueGtag from 'vue-gtag-next'
axios.defaults.baseURL = 'https://khankhulgun.mn;'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


/*
* Local plugins
* */
import {getNumber, getMoney} from '~/utils/number'
import {getDate} from '~/utils/date'
import apolloProvider from  "./apollo"
import store from '../store';

import { defineNuxtPlugin } from "#app";

declare interface AppState {
  theme?: string;
  darkTheme?: boolean;
}

export default defineNuxtPlugin(({ vueApp: app }) => {

  app.config.globalProperties.$filters = {
    currencyMNT(value) {
      return getMoney(value)
    },
    number(value) {
      return getNumber(value)
    },
    date(value) {
      return getDate(value)
    },
  }
  app.use(VueGtag, {
    property: {
      id: 'G-NNSL6DKF5X'
    }
  });

  app.use(VueSocialSharing);
  app.use(VueAxios, axios);
  app.use(store);
  app.use(apolloProvider);
  app.use(VueAwesomeSwiper);

  app.use(Antd);

  return {
    provide: {
      appState: reactive({
      }) as AppState,
    },
  };
});

declare module "#app" {
  interface NuxtApp {
    $appState: AppState;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $appState: AppState;
  }
}

export {};
