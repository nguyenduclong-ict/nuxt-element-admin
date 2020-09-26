<template>
  <router-link v-if="!item.children" :to="item.path" class="menu-item">
    <el-menu-item :index="item.path">
      <sidebar-icon v-if="item.icon" :icon="item.icon" />
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </router-link>
  <el-submenu v-else ref="subMenu" :index="item.key">
    <template slot="title">
      <sidebar-icon v-if="item.icon" :icon="item.icon" />
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
export default {
  name: 'SidebarItem',
  mixins: [fixiOSBug],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
