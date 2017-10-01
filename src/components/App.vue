<template>
  <div id="logo-container">
    <!-- <img src="./assets/logo.png"> -->
    <news-item v-for="item in newsList" track-by="$index" :item='item' :client-width='clientWidth' />
  </div>
</template>

<script>
let clientWidth = document.documentElement.clientWidth
import NewsItem from './NewsItem'
export default {
  name: 'app',
  props: [
　　'newsList',
　],
  data:function(){
    return {
      clientWidth
    }
  },
  components: {
　  'news-item': NewsItem
　}
}
</script>

<style>
#logo-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>