// import { createApp } from 'vue'
import Vue from 'vue'
import toast from './Toast.vue'

// const ToastConstructor = createApp(toast)
const ToastConstructor = Vue.extend(toast)

const removeDom = (event) => {
  event.target.parentNode.removeChild(event.target)
}

// ToastConstructor.mixin({
//   methods: {
//     close () {
//       this.visiable = false
//       this.$el.addEventListener('transitioned', removeDom)
//     }
//   }
// })
ToastConstructor.prototype.close = function () {
  this.visiable = false
  this.$el.addEventListener('transitioned', removeDom)
}

const Toast = (options = {}) => {
  const instance = ToastConstructor.$mount(document.createElement('div'))
  const duration = options.duration || 2500
  instance.message = typeof options === 'string' ? options : options.message
  instance.position = options.position || 'middle'
  instance.visiable = true
  console.log(ToastConstructor, 'ToastConstructor')
  document.body.appendChild(instance.$el)

  instance.$nextTick(() => {
    instance.timer = setTimeout(() => {
      instance.close()
      console.log(instance, '==')
    }, duration)
  })

  return instance
}

export default Toast
