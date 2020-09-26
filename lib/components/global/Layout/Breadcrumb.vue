<template>
  <el-breadcrumb class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="route in history"
        :key="route.id || route.path || route.title"
        :to="route.path"
      >
        <span>{{ route.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { mapState } from 'vuex'
import { findHistoryRoute } from '~/lib/utils/router'
import { routes } from '~/settings/router'
export default {
  computed: {
    ...mapState(['page']),
    history() {
      const root = routes.find((item) => item.root)
      const history = findHistoryRoute(routes, {
        path: this.$route.path,
      })
      if (root && !history.find((h) => h.path === root.path)) {
        history.push(root)
      }
      return history.reverse()
    },
  },
}
</script>

<style lang="scss">
.breadcrumb.el-breadcrumb {
  line-height: 50px;
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .el-breadcrumb__item .is-link {
    font-weight: 500;
  }

  .el-breadcrumb__item:last-child .is-link {
    font-weight: inherit;
  }
}
</style>
