<template>
  <router-link v-if="!item.children" :to="item.path" class="menu-item">
    <el-menu-item :index="item.path" @click="handleClick">
      <icon v-if="item.icon" :name="item.icon" />
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </router-link>
  <el-submenu v-else ref="subMenu" :index="item.key">
    <template slot="title">
      <icon v-if="item.icon" :name="item.icon" />
      <span class="text">{{ item.title }}</span>
    </template>

    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    ></sidebar-item>
  </el-submenu>
</template>

<script>
import fixiOSBug from './fixiOSBug'
import { TOGGLE_SIDEBAR } from '~/store/sidebar'
export default {
  name: 'SidebarItem',
  mixins: [fixiOSBug],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      if (this.$store.state.app.device === 'mobile') {
        this.$store.commit(`sidebar/${TOGGLE_SIDEBAR}`, false)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
