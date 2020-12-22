<template>
<div class="product-container">
  <input type="text" class="form-control" placeholder="input search name" v-model="filterInput" />
  <table class="table table-striped">
      <thead>
        <tr>
          <th>产品名称</th>
          <th>产品数量</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, key) in filterBy(productsList, filterInput)"
          :key="key"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <router-link
              class="btn btn-default"
              v-bind:to="'/product/' + item.id"
              >详情</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
/* eslint-disable */
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import {
  GetProductsList
} from '@/api'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      productsList: [],
      filterInput: ''
    }
  },
  computed: {
    // 监听属性 类似于data概念
  },
  watch: {
    // 监控data中的数据变化
  },

  methods: {
    // 方法集合
    getProductsList () {
      GetProductsList().then(res => {
        this.productsList = res.data
      })
    },
    filterBy (arr, value) {
     return arr.filter(item => {
        return item.name.match(value)
      })
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    this.getProductsList()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style  scoped>

</style>
