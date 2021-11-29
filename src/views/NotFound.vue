<template>
  <main>
    <section>
      <img src="~@/assets/images/404.png" alt="" />
      <p>
        <router-link to="/">{{ second }}s后返回首页</router-link>
      </p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      second: 3,
    }
  },
  created() {
    this.countDown()
  },
  methods: {
    countDown() {
      this.timer = setInterval(() => {
        if (this.second === 1) {
          clearInterval(this.timer)
          this.$router.replace('/')
        }
        this.second--
      }, 1000)
    },
  },
}
</script>

<style lang="less" scoped>
section {
  text-align: center;
  > img {
    width: 70%;
    max-width: 600px;
  }
  a {
    font-weight: 700;
    color: var(--theme-default-color);
    &:hover {
      color: var(--theme-hover-color);
    }
  }
}
</style>