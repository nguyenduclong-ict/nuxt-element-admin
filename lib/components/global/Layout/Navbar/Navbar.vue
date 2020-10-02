<template>
  <div class="navbar-container" :class="{ 'has-tagview': _hasTagView }">
    <div class="navbar">
      <hamburger
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <breadcrumb />
      <right-menu :items="rightMenu" />
    </div>
    <TagsView v-if="_hasTagView" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { TOGGLE_SIDEBAR } from '@/store/sidebar'
import { get, isNil } from '~/lib/utils/external/lodash'
export default {
  props: {
    hasTagsView: Boolean,
  },
  computed: {
    ...mapState(['sidebar', 'navbar', 'app']),
    _hasTagView() {
      if (!isNil(this.hasTagsView)) {
        return this.hasTagsView
      }
      return this.app.tagsView
    },
    rightMenu() {
      return [
        {
          text:
            get(this.$auth, 'user.info.name') ||
            get(this.$auth, 'user.username'),
        },
        { text: 'Logout', click: this.logout, divided: true },
      ]
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.commit('sidebar/' + TOGGLE_SIDEBAR)
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.go()
    },
    itemClick(handle) {
      if (handle) handle()
    },
  },
}
</script>

<style lang="scss">
.fixed-header {
  &.collapsed .navbar-container {
    padding-left: $sidebarCollapsed;
  }

  .navbar-container {
    padding-left: $sideBarWidth;
  }
}

.is-mobile .navbar-container {
  padding-left: 0px !important;
}

.fixed-header .navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 100%;

  .has-tagview & {
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        &.focusing {
          outline: none;
        }

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
