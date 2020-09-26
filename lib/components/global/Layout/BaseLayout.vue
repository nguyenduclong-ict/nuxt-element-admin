<template>
  <el-container :class="{ collapsed, 'fixed-header': navbar.fixed }">
    <Sidebar style="height: 100vh" />
    <el-container
      class="main-container"
      direction="vertical"
      :style="{ 'padding-top': paddingTop }"
    >
      <Navbar ref="navbar" :has-tag-view="hasTagView" />
      <nuxt />
      <!-- <RightPanel /> -->
      <RightPanel />
      <slot name="main-container" />
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    hasTagView: Boolean,
  },
  data() {
    return {
      navbarHeight: 0,
    }
  },
  computed: {
    ...mapState(['sidebar', 'navbar', 'app']),
    paddingTop() {
      if (!this.navbar.fixed) {
        return '0px'
      }
      return this.navbarHeight + 'px'
    },
    collapsed() {
      return !this.$store.state.sidebar.opened
    },
  },
  created() {
    this.$watch(
      () => {
        return [this.navbar.fixed, this.app.tagsView]
      },
      (v) => {
        if (!process.server) {
          this.$nextTick(() => {
            this.navbarHeight = this.$refs.navbar?.$el.clientHeight
          })
        }
      },
      { immediate: true }
    )
  },
  mounted() {
    this.navbarHeight = this.$refs.navbar.$el.clientHeight
  },
}
</script>

<style lang="scss">
.main-container {
  margin-left: $sideBarWidth;
}

.collapsed {
  .main-container {
    margin-left: $sidebarCollapsed;
  }
}
</style>
