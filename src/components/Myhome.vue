<template>
  <div>
    <el-row>
      <el-col :lg='6' :md="8" :xs="12" :sm="8" v-for="item in value" :key="item.index">
        <div style="padding:10px;">
          <div style="background:red;height:200px;">
              222
             {{item.aaa}}
             {{gettersGlobalData}}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "../api/api"
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      value: [
        {
          aaa:1
        },
        {
          aaa:2
        },
        {
          aaa:3
        },
        {
          aaa:1
        },
        {
          aaa:2
        },
        {
          aaa:3
        },
        {
          aaa:1
        },
        {
          aaa:2
        },
        {
          aaa:3
        }
      ]
    }
  },
  computed:{
    ...mapGetters(['gettersGlobalData'])
  },
  created(){
    axios.get('/getJoke?page=1&count=2&type=video').then(res=>{
      console.info(res)
    })
  }
}
</script>

<style scoped>

</style>
