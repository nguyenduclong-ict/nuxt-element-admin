<template>
  <el-container
    :class="{
      collapsed,
      'fixed-header': navbar.fixed,
      'is-mobile': app.device === 'mobile',
    }"
    :style="{
      '--sidebar-open': variables.sideBarWidth,
      '--sidebar-collapsed': variables.sidebarCollapsed,
    }"
    class="layout-container"
    style="opacity: 0"
  >
    <Sidebar style="height: 100vh" />
    <el-scrollbar class="main-container">
      <el-container direction="vertical" :style="{ 'padding-top': paddingTop }">
        <Navbar ref="navbar" :has-tag-view="hasTagView" />
        <nuxt />
        <RightPanel />
        <slot name="main-container" />
      </el-container>
    </el-scrollbar>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import variables from '~/lib/utils/variables'
export default {
  props: {
    hasTagView: Boolean,
  },
  data() {
    return {
      navbarHeight: 0,
      variables,
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
  mounted() {
    this.navbarHeight = this.$refs.navbar.$el.clientHeight
    setTimeout(() => {
      this.$el.style.opacity = 1
    }, 500) // sidebar animation
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
}
</script>

<style lang="scss">
.main-container {
  margin-left: $sideBarWidth;
  width: 100%;
}

.collapsed {
  .main-container {
    margin-left: $sidebarCollapsed;
  }
}

.is-mobile .main-container {
  margin-left: 0px;
}
</style>
