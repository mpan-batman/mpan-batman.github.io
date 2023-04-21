import MelodyUI from 'melody-vue-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'melody-vue-ui/dist/css/index.css'

export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(MelodyUI)
  }
}
