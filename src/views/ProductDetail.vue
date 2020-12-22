<template>
<div class="product-container">
  <router-link to><button @click="goBack">Go Back</button></router-link>
  <h1>
    {{ product.name }}
    <span class="pull-right">
      <router-link class="btn btn-primary" :to="'/editProduct/'+product.id">
        编辑
      </router-link>
      <button class="btn btn-danger" @click="deleteProduct(product.id)">删除</button>
    </span>
  </h1>
</div>
</template>

<script>
/* eslint-disable */
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { GetProductDetail, DeleteProduct } from '@/api'
import Toast from '@/components/Toast/toast'
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProductDetail (id) {
      let $this = this
      GetProductDetail(id).then(res => {
        console.log(res)
        $this.product = res.data
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    deleteProduct (id) {
      DeleteProduct(id).then(res => {
        console.log(res)
        Toast('delete success')
        this.$router("/products")
      })
    }
  },
  created() {
    this.getProductDetail(this.$route.params.id)
  }
}
</script>

<style  scoped>

</style>
