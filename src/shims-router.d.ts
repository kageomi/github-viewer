import 'vue'
import { VueRouer, Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouer
    $route: Route
  }

  interface VueConstructor {
    $router: VueRouer
    $route: Route
  }
}
