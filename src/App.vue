<template>
  <div id="app">
    <aside>
      <h1>XDesign</h1>
      <ul>
        <li v-for="(item, index) in menus" :key="index">
          <router-link :to="item.path">{{ item.alias }}</router-link>
        </li>
      </ul>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from '@/router/routes'

export default {
  data() {
    return {
      menus: [],
    }
  },
  created() {
    this.mergeMenus()
  },
  methods: {
    mergeMenus() {
      const menus = [
        {
          path: '/use',
          alias: '快速上手',
          component: () => import('@/views/Use.vue'),
        },...routes
      ]
      this.menus = menus
    },
  },
}
</script>
