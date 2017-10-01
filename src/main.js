// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import NewsItem from './components/NewsItem'
import router from './router'
import $ from 'jquery'
import request from './api/request'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App :newsList=newsList v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"/>',
  components: { App, NewsItem },
  data: {
    newsList: [],
    page:0,
    offset:0,
    limit:10,
    busy:true
  },
  directives: { infiniteScroll },
  methods: {
    loadMore: async function() {
      this.busy = true
      let data = await request(this.offset, this.limit)
      this.newsList = [...this.newsList,...data.results]
      this.page++
      this.offset = this.limit*this.page
      this.busy = false
    }
  },
  created: async function() {
  	this.loadMore(this.offset, this.limit)
  }
})
