
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification';

// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)

app.use(ToastPlugin);
app.use(ToastPlugin, {
    position: 'top-right', // Set default position
    duration: 5000, // Optional: Set default duration
    dismissible: true // Optional: Allow dismissing the toast
  });
app.use(router)

app.mount('#app')
