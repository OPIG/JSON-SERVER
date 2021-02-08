<template>
<div class="product-container">
  <input type="text" class="form-control" placeholder="input search name" v-model="filterInput" />

  <Split />
  <div class="products">
    <!--left-->
    <div class="menu-wrapper" ref="menuScroll">
      <ul>
        <li class="menu-item" v-for="(product, index) in productsList" :key="index" :class="{active: currentItemIndex == index}" @click="selectMenu(index)">
          <p class="text">{{ product.name }}</p>
          <p>({{product.totalAmount}})</p>
        </li>
      </ul>
    </div>

    <div class="product-wrapper" ref="productScroll">
      <ul>
        <li class="container-list" v-for="(item, index) in productsList" :key="index">
          <h3 class="title">{{ item.name }}</h3>
          <ul>
            <li>
              <div class="content" v-for="(product, index) in item.product" :key="index">
                <div class="name-wrapper">
                  <h3 class="name" @click="toToDetail(item.name, product.id)">{{ product.name }}</h3>
                  <div class="desc" v-if="product.desc">
                    {{ product.desc }}
                  </div>
                </div>
                <div class="amount-wrapper">
                  {{ product.amount }}
                </div>
                <div class="operator-wrapper">
                  <app-operator :product="product"></app-operator>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- <table class="table table-striped">
    <thead>
      <tr>
        <th>产品名称</th>
        <th>产品数量</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, key) in filterBy(productsList, filterInput)" :key="key">
        <td>{{ item.name }}</td>
        <td>{{ item.amount }}</td>
        <td>
          <router-link class="btn btn-default" v-bind:to="'/product/' + item.id">详情</router-link>
        </td>
      </tr>
    </tbody>
  </table> -->
</div>
</template>

<script>
/* eslint-disable */
import {
  GetProductsList
} from "@/api";
import Operator from '@/components/operator/Operator.vue'
import BScroll from 'better-scroll'
import Split from '@/components/split/Split'
export default {
  data() {
    return {
      productsList: [],
      filterInput: "",
      listHeight: [],
      scrollY: 0,
      menuScroll: {}
    };
  },
  components: {
    'app-operator': Operator,
    Split
  },
  computed: {
    currentItemIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if ((height1 <= this.scrollY && this.scrollY < height2) || !height2) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    initScroll() {
      let menuScroll = new BScroll(this.$refs.menuScroll, {
        click: true
      })
      this.productScroll = new BScroll(this.$refs.productScroll, {
        click: true,
        probeType: 3
      })

      this.productScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(this.scrollY);
      })
    },
    calculateHeight() {
      let productList = this.$refs.productScroll.getElementsByClassName('container-list')

      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < productList.length; i++) {
        let item = productList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
      // console.table(this.listHeight)

    },
    selectMenu(index) {
      let productList = this.$refs.productScroll.getElementsByClassName('container-list')
      let element = productList[index]
      this.productScroll.scrollToElement(element, 500, 'ease')
    },
    getProductsList() {
      GetProductsList().then(res => {
        this.productsList = res.data;
        // console.table(this.productsList);
        this.getTotalAmount()

        this.$nextTick(() => {
          this.initScroll()
          this.calculateHeight()
        })
      });
    },
    getTotalAmount() {
      let products = this.productsList
      let amount = 0
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].product.length; j++) {
          amount += Number(products[i].product[j].amount)
        }
        this.$set(products[i], 'totalAmount', amount)
      }
    },
    toToDetail(category,id) {
      console.log(id);
      let query = {
        id,
        name: category
      }
      this.$router.push({
        'name': 'ProductDetail',
        'params': query
      })
    },
    filterBy(arr, value) {
      return arr.filter(item => {
        return item.name.match(value);
      });
    }
  },
  created() {
    this.getProductsList();
  }
};
</script>

<style lang="scss" scoped>
ul,
li,
a {
  padding: 0px;
  margin: 0px;
  outline: none;
  text-decoration: none;
  list-style: none;
}

.product-container {
  .form-control {
    width: 80%;
    min-width: 120px;
    margin: 100px auto 50px;
    display: block;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    border: 3px solid #c93820;
    padding: 4px 4px 4px 10px;
    outline: none;
    font-size: 16px;

    &:focus {
      box-shadow: 0 0 0 4px rgba(201, 56, 32, 0.4);
    }
  }

  .products {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 390px;
    bottom: 30px;

    .menu-wrapper {
      flex: 0 0 85px;
      background: #f4f4f4;
      overflow: hidden;

      .menu-item {
        padding: 16px;
        border-bottom: 1px solid #e4e4e4;

        &.active {
          color: #900;
        }

        .text {
          font-size: 14px;
          color: #333;
          line-height: 22px;
        }
      }
    }

    .product-wrapper {
      flex: 1;

      .container-list {
        padding: 11px;
        border-bottom: 1px solid #e4e4e4;

        .title {
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          padding-left: 7px;
          margin-bottom: 12px;
          font-weight: bold;
          border-left: 3px solid #900;
        }

        .content-header {
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          margin-bottom: 10px;

          .name {
            width: 80%;
          }
        }

        .content {
          flex: 1;
          margin-bottom: 10px;
          position: relative;
          display: flex;
          justify-content: space-between;

          .name-wrapper {
            width: 80%;

            .name {
              font-size: 14px;
              line-height: 22px;
              color: #333;
              margin-bottom: 2px;
              font-weight: normal;
            }

            .desc {
              font-size: 10px;
              line-height: 19px;
              color: #999;
              margin-bottom: 8px;
              /*超出部分省略号*/
              -webkit-line-clamp: 1;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }

          .amount-wrapper {
            display: flex;
            align-items: center;
          }

          .operator-wrapper {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
