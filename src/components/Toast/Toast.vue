<template>
  <transition name='toast'>
    <div class="toast" :class="position" v-show="visiable">
      <i>{{message}}</i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      visiable: false,
      message: '',
      position: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .toast{
    position: fixed;
    left: 50%;
    transform: translate(-50%, -500%) scale(1);
    word-wrap: break-word;
    padding: 12px;
    text-align: center;
    z-index: 10;
    font-size: 24px;
    max-width: 80%;
    color: #fff;
    background: rgba(0,0,0,.7);
    overflow: hidden;
    border-radius: 10px;
    i {
      font-style: normal;
    }
     &.middle {
      top: 50%;
    }
    &.bottom {
      top: 90%;
    }
    &.top {
      top: 10%;
    }
  }
  .toast-enter, .toast-leave-active {
    transform: translate(-50%, -50%) scale(0);
  }
  .toast-enter-active, .toast-leave-active {
    transition: transform .4s;
  }
</style>
