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
  >
    <Sidebar style="height: 100vh" />
    <div class="main-container">
      <el-container direction="vertical" :style="{ 'padding-top': paddingTop }">
        <Navbar ref="navbar" :has-tags-view="hasTagsView" />
        <nuxt />
        <RightPanel />
        <slot name="main-container" />
      </el-container>
    </div>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import variables from '~/lib/utils/variables'
export default {
  props: {
    hasTagsView: {
      type: Boolean,
      default: undefined,
    },
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
      if (process.server) {
        const hasTagsView =
          this.hasTagsView !== undefined ? this.hasTagsView : this.app.tagsView
        if (hasTagsView) {
          return '82px'
        }
        return '50px'
      }
      return this.navbarHeight + 'px'
    },
    collapsed() {
      return !this.$store.state.sidebar.opened
    },
  },
  mounted() {
    this.navbarHeight = this.$refs.navbar.$el.clientHeight
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
  height: 100vh;
  overflow-x: auto;
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
