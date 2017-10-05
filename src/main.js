window.jQuery = window.$ = require('jquery')

require('bootstrap')

import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

const http = axios.create({
    baseURL: 'http://localhost/api/'
})

Vue.prototype.$http = http

new Vue({
  el: '#app',
  render: h => h(App)
})
