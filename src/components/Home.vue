<template>
  <div>
    {{value}}
  </div>
</template>

<script>
import axios from "../api/api"
export default {
  data() {
    return {
      value: new Date()
    }
  },
  mounted(){
    axios.get('/data/?id=15&key=R5RTF4G5F5H&stock=汽车之家').then(res=>{
      console.info(res)
    })
  }
}
</script>

<style scoped>

</style>
