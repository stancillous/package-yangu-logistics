import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const app = createApp(App)

app.use(router)

app.mount('#app')
