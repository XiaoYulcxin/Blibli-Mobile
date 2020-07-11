import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import card from '@/components/common/card.vue';
Vue.component('card',card)

import toast from '@/components/common/toast.vue';
Vue.component('toast',toast)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
