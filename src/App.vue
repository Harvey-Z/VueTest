<template>
  <div id="app">
    <router-view/>
  </div>
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
</style>
