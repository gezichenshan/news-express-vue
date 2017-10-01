// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import $ from 'jquery'
import request from './api/request'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App :newsList=newsList :loading=loading v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"/>',
  components: { App },
  data: {
    newsList: [],
    page:0,
    offset:0,
    limit:10,
    loading:true
  },
  directives: { infiniteScroll },
  methods: {
    loadMore: async function() {
      this.loading = true
      let data = await request(this.offset, this.limit)
      this.newsList = [...this.newsList,...data.results]
      this.page++
      this.offset = this.limit*this.page
      this.loading = false
    }
  },
  created: async function() {
  	this.loadMore(this.offset, this.limit)
  }
})
