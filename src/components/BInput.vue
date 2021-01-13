<template>
<div>
  <input @input='handleInput' :value='value' />
</div>

</template>

<script>
export default {
  name: 'BInput',
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
      this.$emit('inputBT', value) // 把value传给父组件
    }
  },
  beforeCreate () {
    console.group('%c%s', 'color: green', 'B - beforeCreate')
  },
  created () {
    console.group('%c%s', 'color: green', 'B - create')
  },
  beforeMount () {
    console.group('%c%s', 'color: green', 'B - beforeMount')
  },
  mounted () {
    console.group('%c%s', 'color: green', 'B - mounted')
  },
  beforeUpdate () {
    console.group('%c%s', 'color: green', 'B - beforeUpdate')
  },
  updated () {
    console.group('%c%s', 'color: green', 'B - updated')
  },
  beforeUnmount () {
    console.group('%c%s', 'color: green', 'B - beforeUnmount')
  },
  unmounted () {
    console.group('%c%s', 'color: green', 'B - unmounted')
  },
  activated () {
    console.group('%c%s', 'color: green', 'B - activated')
  }
}
</script>
