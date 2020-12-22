<template>
<div class="product-container">
  <router-link to><button @click="goBack">Go Back</button></router-link>
  <form class="product-form" @submit.prevent="updateProduct">
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
import { GetProductDetail, UpdateProduct } from '@/api'
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
    updateProduct () {
      // const form = document.querySelector('.product-form')
      // console.log(form, 'form->')
      // const formdata = new FormData(form)
      // this.formDataToJson(formdata)
      let formData = {
        name: this.product.name,
        amount: Number(this.product.amount)
      }
      UpdateProduct(this.$route.params.id, formData).then(res => {
        console.log(res)
        Toast('修改成功')
      })
    },
    formDataToJson (formData) {
      debugger
      let objData = {}
      formData.forEach((val, key) => {
        objData[key] = val
      })

      return JSON.stringify(objData)
    }
  },
  created() {
    this.getProductDetail(this.$route.params.id)
  }
}
</script>

<style  scoped>

</style>
