export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"How It Works\",\"slug\":\"how-it-works\",\"link\":\"#how-it-works\",\"children\":[]},{\"level\":2,\"title\":\"Why Not ...?\",\"slug\":\"why-not\",\"link\":\"#why-not\",\"children\":[{\"level\":3,\"title\":\"Nuxt\",\"slug\":\"nuxt\",\"link\":\"#nuxt\",\"children\":[]},{\"level\":3,\"title\":\"VitePress\",\"slug\":\"vitepress\",\"link\":\"#vitepress\",\"children\":[]},{\"level\":3,\"title\":\"Docsify / Docute\",\"slug\":\"docsify-docute\",\"link\":\"#docsify-docute\",\"children\":[]},{\"level\":3,\"title\":\"Hexo\",\"slug\":\"hexo\",\"link\":\"#hexo\",\"children\":[]},{\"level\":3,\"title\":\"GitBook\",\"slug\":\"gitbook\",\"link\":\"#gitbook\",\"children\":[]}]}],\"filePathRelative\":\"guide/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
