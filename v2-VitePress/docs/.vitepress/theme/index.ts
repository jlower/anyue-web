// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// import AnimateTitle from "./components/AnimateTitle.vue";
import './rainbow.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // "home-hero-info": () => h(AnimateTitle),
      
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

