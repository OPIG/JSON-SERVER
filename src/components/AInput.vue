<template>
<input @input='handleInput' :value='value' />
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      // console.log(event)
      const value = event.target.value // 获取input的值
      this.$emit('inputAT', value) // 把value传给父组件
    }
  },
  beforeCreate () {
    console.group('%c%s', 'color: blue', 'A - beforeCreate')
  },
  created () {
    console.group('%c%s', 'color: blue', 'A - create')
  },
  beforeMount () {
    console.group('%c%s', 'color: blue', 'A - beforeMount')
  },
  mounted () {
    console.group('%c%s', 'color: blue', 'A - mounted')
  },
  beforeUpdate () {
    console.group('%c%s', 'color: blue', 'A - beforeUpdate')
  },
  updated () {
    console.group('%c%s', 'color: blue', 'A - updated')
  },
  beforeUnmount () {
    console.group('%c%s', 'color: blue', 'A - beforeUnmount')
  },
  unmounted () {
    console.group('%c%s', 'color: blue', 'A - unmounted')
  },
  activated () {
    console.group('%c%s', 'color: blue', 'A - activated')
  },
  deactivated () {
    console.group('%c%s', 'color: blue', 'A - activated')
  }

}
</script>
