<template>
  <div id="app">
    <aside>
      <h1>XDesign</h1>
      <ul>
        <li v-for="(item, index) in menus" :key="index">
          <router-link :to="item.path">{{ item.component && item.component.alias }}</router-link>
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
      this.menus = routes
    },
  },
}
</script>
