<template>
<div class="operator-wrapper">
  <!-- <transition name="reduce"> -->
  <button class="reduce-btn btn" @click="reduceAmount">-</button>
  <!-- </transition> -->
  <span class="amount">{{productItem.amount}}</span>
  <button class="add-btn btn" @click="addAmount">+</button>
</div>
</template>

<script>
export default {
  name: 'operator',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      productItem: this.product
    }
  },
  watch: {
    product () {
      this.productItem = this.product
    }
  },
  methods: {
    reduceAmount () {
      if (this.productItem.amount > 0) {
        this.productItem.amount--
      } else {
        this.$set(this.productItem, 'amount', 0)
      }
    },

    addAmount () {
      this.productItem.amount++
    }

  }
}
</script>

<style lang="scss">
.operator-wrapper {
  .btn {
    outline: none;
    line-height: 15px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    color: #900;
    border: 1px solid #aaa;
  }

  .reduce-btn {
    color: #900;
  }

  .amount {
    margin: 0 10px;
  }

  .add-btn {
    color: rgb(0, 153, 56);
  }
}
</style>
