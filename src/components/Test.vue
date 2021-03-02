<template>
  <el-table
    :data="tableData"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    row-key="id"
    border
    style="width: 100%"
    >
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  import Sortable from 'sortablejs';
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-0144',
              name: '王小虎',
              address: '上海市普陀区金沙江路 15191 弄'
            }, {
              id: 32,
              date: '2016-05-05551',
              name: '王小虎',
              address: '上海市普陀区金沙江路 15192 弄'
          }]
        }, {
          id: 48,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          
        }],
      }
    },
    mounted() {
      this.rowDrop();
    },
    methods: {
     async getTableList() {
        const { data } = await getTableList();
        this.tableData = data || [];
    },
    async sortTable(address, num) {
        await sortTable({ address, num});
    },
    // 拖拽排序
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody');
      const that = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex}) {
          if (newIndex === oldIndex) return;
          
          console.info(oldIndex)
          console.info(newIndex)
          // const currRow = that.tableData.splice(oldIndex, 1)[0];
          // console.info(currRow)
          // that.tableData.splice(newIndex, 0, currRow);
          console.info(that.tableData)
          // 这后面的是实时保存拖拽结果，并且获取最新的列表顺序，需要和后端配合
          // that.sortTable(that.tableData[oldIndex].address, oldIndex).then(() => {
          //   that.getTableList();
          // });
        },
      });
    },
    }
  }
</script>