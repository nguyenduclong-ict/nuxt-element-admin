<template>
  <el-scrollbar :vertical="false" class="scroll-container">
    <el-tag
      v-for="(route, index) in tagViews"
      :key="route.path"
      :closable="!route.pined"
      size="small"
      :effect="current.path === route.path ? 'dark' : 'plain'"
      :type="current.path === route.path ? 'primary' : 'info'"
      :class="{ active: current.path === route.path }"
      class="tags-view-item"
      @click="handleClick(route)"
      @close="handleClose(route, index)"
    >
      {{ route.title || route.name }}
    </el-tag>
  </el-scrollbar>
</template>

<script>
import { mapState } from 'vuex'
import { REMOVE_ROUTE } from '@/store/router'
import { routes } from '~/settings/router'
export default {
  computed: {
    ...mapState('router', ['history', 'current']),
    tagViews() {
      const result = routes.filter((item) => item.pined)
      this.history.forEach((h) => {
        if (!result.find((item) => item.path === h.path)) {
          if (h.pined) {
            result.unshift(h)
          } else {
            result.push(h)
          }
        }
      })
      return result
    },
  },
  methods: {
    handleClick(route) {
      this.$router.push(route)
    },
    handleClose(route, index) {
      if (this.history.length === 1) {
        return
      }
      this.$store.commit(`router/${REMOVE_ROUTE}`, route)
      console.log(route)
      if (route.path === this.current.path) {
        if (this.history.findIndex((r) => r.path === route.pre.path) >= 0) {
          this.$router.back()
        } else {
          this.$router.push(this.history[index - 1])
        }
      }
    },
  },
}
</script>

<style lang="scss">
.scroll-container {
  box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wiew {
      height: 32px;
    }
  }

  .el-tag {
    margin: 4px 0;
    cursor: pointer;
    user-select: none;
    border-radius: 0px;
  }

  .tags-view-item:not(.active) {
    border: 1px solid #d8dce5;
    color: #495060;
  }

  .tags-view-item.el-tag.active {
    &::before {
      content: '';
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
    }
  }

  .el-tag:first-child {
    margin-left: 15px;
  }

  .el-tag + .el-tag {
    margin-left: 4px;
  }
}
</style>
