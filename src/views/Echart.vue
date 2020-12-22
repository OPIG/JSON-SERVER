<!--  -->
<template>
  <div class="echart-container" id="echart-main">
  </div>
</template>

<script>
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
      product: {},
      productNameArr: [],
      productAmountArr: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getProductsList () {
      GetProductsList().then(res => {
        this.product = res.data
        for (const i of this.product) {
          this.productNameArr.push(i.name)
          this.productAmountArr.push(i.amount)
          const { echarts } = window
          if (echarts) {
            const myChart = echarts.init(document.getElementById('echart-main'))
            var option = {
              title: {
                text: '库存量'
              },
              tooltip: {},
              legend: {
                data: ['库存']
              },
              xAxis: {
                data: this.productNameArr
              },
              yAxis: {},
              series: [{
                name: '库存',
                type: 'bar',
                data: this.productAmountArr
              }]
            }

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
          }
        }
      })
    }
  },
  created () {
    this.getProductsList()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {}
}
</script>
<style  scoped>
.echart-container {
  width: 750px;
  height: 500px;
}
</style>
