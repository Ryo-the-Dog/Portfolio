import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
// SmoothScroll
import vueSmoothScroll from 'vue-smooth-scroll'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font Awesome のメインファイルを import

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'

// 使用するカテゴリーのファイルを import

import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

// SmoothScroll
Vue.use(vueSmoothScroll);

// fontawesome
library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// SCSS
require('@/assets/sass/main.scss')

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
