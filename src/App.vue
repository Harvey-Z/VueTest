<template>
  <el-container>
    <div id="app">
      <router-view/>
    </div>
    <el-footer>
      <router-link to="/myhome">
          <div class="footerCss">1</div>
      </router-link>
      <router-link to="/">
          <div class="footerCss">2</div>
      </router-link>
     <router-link to="/test">
          <div class="footerCss">3</div>
      </router-link>
       <router-link to="/dragg">
          <div class="footerCss">4</div>
      </router-link>
      <div class="footerCss">5</div>
    </el-footer> 
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  computed:{
    //更新state
   
  },
  mounted(){
     this.Assignment()
  },
  methods:{
    ...mapActions(['ActionsGlobaldata']),
    Assignment(){
      this.ActionsGlobaldata(12)

      //两种写法
      // this.$store.dispatch('ActionsGlobaldata', 12)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footerCss{
  width:18%;
  float:left;
  height:60px;
  background:rgb(223, 220, 220);
  margin-right:2%
}
</style>
