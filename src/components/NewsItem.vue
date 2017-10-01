<template>
  <div class="item-container" @click="doThis(item.link,$event)" :style="{ width: clientWidth-20 + 'px',maxWidth:500+'px' }">
    <div>
      <h3 v-html="item.title" class="item-title"></h3>
    </div>
    <div>
      <span>作者：</span>
      <span v-if="!item.author">unknown</span>
      <span v-html="item.author" v-if="item.author"></span>
    </div>
    <div>
      <span v-html="item.publication_time"></span>
    </div>
    <div>
      <span>来源：</span>
      <span v-html="item.source"></span>
    </div>
    <div class="item-abstract align-left">
      <span v-html="item.abstract"></span>
    </div>
    <div class="align-left">
      <div>
        <a class="read-more-text">阅读全文</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'news-item',
  props: [
　　'item',
    'clientWidth'
　],
  methods:{
    doThis:function(link,event){
      // $.get(link,function(data,status){
      //   console.log(data)
      // })
    }
  }
  
}
</script>

<style>
  .read-more-text{color:#3399CC; text-decoration:none;font-weight:bold;}
  .read-more-text:visited{color:#3399CC; text-decoration:none;font-weight:bold;}
  .read-more-text:hover{color:#CF0000; text-decoration:underline;font-weight:bold;}
  a:hover{
    cursor: pointer;
  }
  .item-container{
    height: 320px;
    margin-top: 5px;
    float: left;
    list-style: none;
    text-align: center;
    color: #808080;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 1px 18px rgba(0, 0, 0, .06);
    box-shadow: 0 1px 18px rgba(0, 0, 0, .06);
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    /*margin:5px 10px;*/
    transition:box-shadow 0.4s;
    -moz-transition:box-shadow 0.4s; /* Firefox 4 */
    -webkit-transition:box-shadow 0.4s; /* Safari and Chrome */
    -o-transition:box-shadow 0.4s; /* Opera */
  }
  .item-container:hover{
    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    cursor: pointer;
  }
  .item-title{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space : nowrap ;
  }
  .item-title:hover{
    cursor: pointer;
  }
  .item-abstract{
    /*height: 150px;*/
  }
  .item-abstract:hover{
    cursor: pointer;
  }
  .align-left{
    text-align: left;
  }
</style>