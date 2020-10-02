<template>
  <div class="right-menu">
    <el-dropdown
      class="avatar-container right-menu-item hover-effect"
      trigger="click"
    >
      <div class="avatar-wrapper">
        <img :src="avatar" class="user-avatar" />
        <i class="el-icon-caret-bottom" />
      </div>

      <el-dropdown-menu v-if="items" slot="dropdown">
        <template v-for="item in items">
          <router-link
            v-if="item.to && item.target"
            :key="item.name"
            v-slot
            :to="item.to"
          >
            <a :href="item.to" :target="item.target">
              <el-dropdown-item
                :divided="item.divided"
                @click.native="itemClick(item.click)"
              >
                {{ item.text }}
              </el-dropdown-item>
            </a>
          </router-link>
          <router-link v-else-if="item.to" :key="item.name" :to="item.to">
            <el-dropdown-item
              :divided="item.divided"
              @click.native="itemClick(item.click)"
            >
              {{ item.text }}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item
            v-else
            :key="item.name"
            :divided="item.divided"
            @click.native="itemClick(item.click)"
          >
            {{ item.text }}
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  props: {
    items: { type: Array },
  },
  computed: {
    ...mapState(['navbar']),
    avatar() {
      return this.$auth.user.avatar || '/images/default-avatar.gif'
    },
  },
  methods: {
    itemClick(handle) {
      if (handle) handle()
    },
  },
}
</script>

<style lang="scss" scoped></style>
