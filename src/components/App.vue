<template>
  <div id="logo-container">
    <!-- <img src="./assets/logo.png"> -->
    <news-item v-for="item in newsList" track-by="$index" :item='item' :client-width='clientWidth' />
    <Loading v-if="loading"/>
  </div>
</template>

<script>
let clientWidth = document.documentElement.clientWidth
import NewsItem from './NewsItem'
import Loading from './Loading'
export default {
  name: 'app',
  props: [
　　'newsList',
    'loading'
　],
  data:function(){
    return {
      clientWidth
    }
  },
  components: {
　  'news-item': NewsItem,
    'Loading': Loading
　}
}
</script>

<style>
#logo-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:6px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
