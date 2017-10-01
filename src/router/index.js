import Vue from 'vue'
import Router from 'vue-router'
import NewsItem from '@/components/NewsItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: NewsItem
    },
    {
    	path: '/browse',
    	name: 'browse',
    }
  ]
})
