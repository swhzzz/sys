import Vue from 'vue'
import Router from 'vue-router'
import AlreadyChecked from '../components/PatientManagement/already-checked.vue'
import ExpectChecked from '../components/PatientManagement/expect-checked.vue'
import ExpectRevised from '../components/PatientManagement/expect-revised.vue'
import ExpectInput from '../components/PatientManagement/expect-input.vue'
import BaseInfo from '../components/PatientManagement/base-info.vue'
import FamilyEatHabit from '../components/PatientManagement/family-eat-habit.vue'
import SportSituation from '../components/PatientManagement/sport-situation.vue'
import DailyEatHabit from '../components/PatientManagement/daily-eat-habit.vue'
import SmokeInvestigation from '../components/PatientManagement/smoke-investigation.vue'
import SleepInvestigation from '../components/PatientManagement/sleep-investigation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/ExpectInput/FamilyEatHabit'
    },
    {
      path: '/AlreadyChecked',
      component: AlreadyChecked
    },
    {
      path: '/ExpectInput',
      component: ExpectInput,
      children: [
        {
          path: 'BaseInfo',
          component: BaseInfo
        },
        {
          path: 'FamilyEatHabit',
          component: FamilyEatHabit
        },
        {
          path: 'SportSituation',
          component: SportSituation
        },
        {
          path: 'DailyEatHabit',
          component: DailyEatHabit
        },
        {
          path: 'SmokeInvestigation',
          component: SmokeInvestigation
        },
        {
          path: 'SleepInvestigation',
          component: SleepInvestigation
        }
      ]
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
