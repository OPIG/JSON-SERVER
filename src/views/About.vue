<template>
<div>
  This is about Page
  open devtool to check the life cycle
  <!-- 习惯性使用这种方式 x-xxxxx -->
  <br>
  B:<b-input @inputBT='handleBT'/>
  <br>
  A:<a-input @inputAT='handleAT'/>

  <p>A input: {{ inputValueA }}</p>
  <br>
  <p>B input: {{ inputValueB }}</p>
</div>
</template>

<script>

import BInput from '@/components/BInput.vue'
import AInput from '@/components/AInput.vue'
export default {
  name: 'store',
  data () {
    return {
      inputValueA: '',
      inputValueB: ''
    }
  },
  components: {
    // AInput: AInput, // 啰嗦方式
    AInput, // 简写方式
    BInput // 简写方式
  },
  methods: {
    handleAT (val) {
      this.inputValueA = val
    },
    handleBT (val) {
      this.inputValueB = val
    }
  },
  beforeCreate () {
    console.group('%c%s', 'color: black', 'About - beforeCreate')
  },
  created () {
    console.group('%c%s', 'color: black', 'About - create')
  },
  beforeMount () {
    console.group('%c%s', 'color: black', 'About - beforeMount')
  },
  mounted () {
    console.group('%c%s', 'color: black', 'About - mounted')
  },
  beforeUpdate () {
    console.group('%c%s', 'color: black', 'About - beforeUpdate')
  },
  updated () {
    console.group('%c%s', 'color: black', 'About - updated')
  },
  beforeUnmount () {
    console.group('%c%s', 'color: black', 'About - beforeUnmount')
  },
  unmounted () {
    console.group('%c%s', 'color: black', 'About - unmounted')
  },
  activated () {
    console.group('%c%s', 'color: black', 'About - activated')
  }

}
</script>
