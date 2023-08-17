import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("NpmBadge", defineAsyncComponent(() => import("/Users/klsm-2023/flyhero.github.io/docs/.vuepress/components/NpmBadge.vue")))
  },
}
