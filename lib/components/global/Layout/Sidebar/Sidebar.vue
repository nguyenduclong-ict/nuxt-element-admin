<template>
  <div class="sidebar-container" :class="{ collapsed: isCollapse }">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="item in items"
          :key="item.key"
          :item="item"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
    <div class="mask" @click="closeSidebar"></div>
  </div>
</template>

<script>
import variables from '@/lib/utils/variables'
import { mapState, mapGetters } from 'vuex'
import { TOGGLE_SIDEBAR } from '~/store/sidebar'
export default {
  props: {},
  computed: {
    ...mapState(['sidebar']),
    ...mapGetters('sidebar', ['items']),
    activeMenu() {
      return this.$route.path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  mounted() {},
  methods: {
    closeSidebar() {
      this.$store.commit(`sidebar/${TOGGLE_SIDEBAR}`, false)
    },
  },
}
</script>
