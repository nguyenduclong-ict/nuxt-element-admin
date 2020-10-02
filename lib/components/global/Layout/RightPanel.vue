<template>
  <div class="right-drawer">
    <el-drawer
      title="Setting"
      :visible.sync="show"
      direction="rtl"
      size="300px"
      custom-class="right-panel"
    >
      <div class="drawer">
        <div class="drawer-item">
          <span>Fixed Header</span>
          <el-switch
            :value="navbar.fixed"
            @change="toggleFixedNavbar"
          ></el-switch>
        </div>

        <div class="drawer-item">
          <span>Show Tags-View</span>
          <el-switch :value="app.tagsView" @change="toggleTagsView"></el-switch>
        </div>

        <div class="drawer-item">
          <span>Size</span>
          <el-select
            :value="app.size"
            size="small"
            style="width: 96px"
            placeholder="Size"
            @change="handleChangeSize"
          >
            <el-option value="default" label="default"></el-option>
            <el-option value="mini" label="mini"></el-option>
            <el-option value="small" label="small"></el-option>
            <el-option value="medium" label="medium"></el-option>
          </el-select>
        </div>
      </div>
    </el-drawer>

    <div class="handle-button" :class="{ show: show }" @click="show = !show">
      <i :class="show ? 'el-icon-close' : 'el-icon-setting'" />
    </div>
  </div>
</template>

<script>
import { TOGGLE_FIXED } from '@/store/navbar'
import { SET_SIZE, TOGGLE_TAGS_VIEW } from '@/store/app'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      show: false,
      direction: 'rtl',
    }
  },
  computed: {
    ...mapState(['sidebar', 'navbar', 'app']),
  },
  methods: {
    toggleFixedNavbar(value) {
      this.$store.commit(`navbar/${TOGGLE_FIXED}`, value)
    },
    toggleTagsView(value) {
      this.$store.commit(`app/${TOGGLE_TAGS_VIEW}`, value)
    },
    handleChangeSize(size) {
      this.$store.commit(`app/${SET_SIZE}`, size)
      this.$router.go()
    },
  },
}
</script>

<style lang="scss">
.right-panel {
  .drawer {
    padding: 24px;
    .drawer-item {
      display: flex;
      justify-content: space-between;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      padding: 12px 0;
    }
  }
}

.right-panel,
.right-panel * {
  &:focus {
    outline: none;
  }
}

.handle-button:hover {
  right: 0px;
}

.handle-button {
  background: #1890ff;
  transition: right 0.25s ease-in-out;
  width: 48px;
  height: 48px;
  position: fixed;
  right: -24px;
  bottom: 10%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 1;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
  i {
    font-size: 24px;
    line-height: 48px;
  }
}

.handle-button.show {
  right: 300px;
  z-index: 3000;
}
</style>
