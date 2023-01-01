import Vue from 'vue'
import VueRouter from 'vue-router'
import RepositorySearch from '../components/views/RepositorySearch.vue'
import RepositoryDetail from '../components/views/RepositoryDetail.vue'

const routes = [
  { path: '/', component: RepositorySearch },
  { path: '/repo/:owner/:repo', component: RepositoryDetail }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
