<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
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
     this.aaa()
  },
  methods:{
    ...mapActions(['ActionsAAA']),
    aaa(){
      // this.ActionsAAA('',1)
      this.$store.dispatch('ActionsAAA',1111)
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
