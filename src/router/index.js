import Vue from 'vue'
import Router from 'vue-router'
import AlreadyChecked from '../components/DataOperation/already-checked.vue'
import ExpectChecked from '../components/DataOperation/expect-checked.vue'
import ExpectRevised from '../components/DataOperation/expect-revised.vue'
import ExpectInput from '../components/DataOperation/expect-input.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/AlreadyChecked',
      component: AlreadyChecked
    },
    {
      path: '/ExpectInput',
      component: ExpectInput
    },
    {
      path: '/ExpectRevised',
      component: ExpectRevised
    },
    {
      path: '/ExpectChecked',
      component: ExpectChecked
    }

  ]
})
