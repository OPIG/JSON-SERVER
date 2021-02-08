<template>
<div class="product-container">
  <router-link to><button @click="goBack">Go Back</button></router-link>
  <form class="product-form" @submit.prevent="addProduct">
    <div class="form-group">
      <label for="">产品名称</label>
      <input name="name" type="text" v-model="product.name">
    </div>
    <div class="form-group">
      <label for="">产品数量</label>
      <input name="amount" type="text" v-model="product.amount">
    </div>
    <button type="submit" class="btn btn-primary" >确认</button>
  </form>
</div>
</template>

<script>
/* eslint-disable */
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { AddProduct } from '@/api'
import Toast from '@/components/Toast/toast'
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    addProduct () {
      let formData = {
        name: this.product.name,
        amount: Number(this.product.amount)
      }
      AddProduct(formData).then(res => {
        console.log(res)
        Toast('添加成功')
      })
    },
    goBack () {
      this.$router.go(-1)
    },
  }
}
</script>

<style  scoped>

</style>
