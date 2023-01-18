import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

import Default from "@/layouts/Default.vue";
import Aside from "@/layouts/Aside.vue";
// import { GlobalCmComponent } from "codemirror-editor-vue3";

const app = createApp(App)

app.component("default-layout", Default);
app.component("aside-layout", Aside);

app.use(router)
// app.use(GlobalCmComponent);

app.mount('#app')
