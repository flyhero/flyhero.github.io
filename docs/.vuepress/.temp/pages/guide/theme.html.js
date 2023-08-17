export const data = JSON.parse("{\"key\":\"v-4d76029c\",\"path\":\"/guide/theme.html\",\"title\":\"Theme\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Default Theme\",\"slug\":\"default-theme\",\"link\":\"#default-theme\",\"children\":[]},{\"level\":2,\"title\":\"Community Theme\",\"slug\":\"community-theme\",\"link\":\"#community-theme\",\"children\":[]},{\"level\":2,\"title\":\"Local Theme\",\"slug\":\"local-theme\",\"link\":\"#local-theme\",\"children\":[]}],\"filePathRelative\":\"guide/theme.md\"}")

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
