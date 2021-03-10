<template>
  <div style="width:90%;margin-left:5%;">
    <el-button @click="getSelectData"><icon type="md-search"></icon>getSelectData</el-button>
    <dragTreeTable :data="treeData" :onDrag="onTreeDataChange" border></dragTreeTable>
  </div>
</template>

<script>
 import dragTreeTable from 'zhw-drag-tree-table'
  export default {
    components:{ dragTreeTable },
    data() {
      return {
        treeData: {
          lists: [{
              "flag":1,
              "id":41,
              "parent_id":0,
              "order":0,
              "name":"测试文件夹1",
              "open":true,
              "lists":[{
                "flag":0,
                "id":40,
                "parent_id":0,
                "order":0,
                "name":"测试用例1",
                "open":true,
                "lists":[]
              }]
            },{
              "flag":1,
              "id":5,
              "parent_id":0,
              "order":1,
              "name":"测试文件夹2",
              "open":true,
              "lists":[{
                "flag":0,
                "id":12,
                "parent_id":5,
                "open":true,
                "order":0,
                "name":"测试用例3",
                "lists":[]
              }]
            },{
              "id":19,
              "flag":0,
              "parent_id":0,
              "order":2,
              "name":"测试用例2",
              "open":true,
              "lists":[]
            }],
          columns: [{
            type: 'checkbox',
            title: '选择',
            
            isContainChildren: false,
            onChange: (item)=>{
              console.log(item)
              this.selectData = item
            }
          },{
            type: 'selection',
            title: '名称2',
            field: 'name',
            width: 260, 
            align: 'left',
            onclick: this.aaa,
            formatter: (item) => {
              if(item.flag==1){
                return '<img src="/static/image/4.jpg" style="position:absolute;top:15px;width:30px">'+'<a style="margin-left: 40px;">'+item.name+'</a>'
              } else if(item.flag==0){
                return '<img src="/static/image/3.jpg" style="position:absolute;top:15px;width:30px">'+'<a style="margin-left: 40px;">'+item.name+'</a>'
              }
            }
          },{
            type: 'default',
            title: '名称1',
            field: 'name',
            width: 260, 
            align: 'left',
            formatter: (item) => {
                return '<span>'+item.name+'</span>'
            }
          },{
            type: 'default',
            title: '名称',
            field: 'name',
            width: 260, 
            align: 'left',
            formatter: (item) => {
                return '<span>'+item.name+'</span>'
            }
          },{
            type: 'default',
            title: '名称5',
            field: 'name',
            width: 260, 
            align: 'left',
            flex:1,
            formatter: (item) => {
                return '<span>'+item.name+'</span>'
            }
          },{
            title: '操作',
            type: 'action',
            width: 250,
            align: 'center',
            // flex:1,
            actions: [
              {
                text: '查看角色',
                onclick: this.onDetail,
                formatter: (item) => {
                  return '<i>查看角色</i>'
                }
              },{
                text: '编辑',
                onclick: this.onEdit,
                formatter: (item) => {
                  return '<i style="margin-left:20px">编辑</i>'
                }
              }
            ]
          }]
        },
        flag:false,
        selectData:[]
      }
    },
    methods: {
      onTreeDataChange(lists) {
        console.info(lists)
        this.flag = false
        for(var i=0;i<lists.length;i++){
          for(var j=0;j<lists[i].lists.length;j++){
            if(lists[i].lists[j].lists.length>0 || lists[i].lists[j].flag==1){
              console.info(33)
              this.flag = true
              return
            }
          }
        }

        if(this.flag == true){
          console.info(11)
        } else {
          console.info(22)
          this.treeData.lists = lists
        }
        console.info(this.treeData.lists)
      },
      onDetail(item){
        console.info(item.id)
      },
      onEdit(item){

      },
      getSelectData(){
        console.info(this.selectData)
      },
      aaa(item){
        console.info(item)
      }
    },
   }
</script>

