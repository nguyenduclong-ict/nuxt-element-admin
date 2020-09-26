<template>
  <i v-if="cIcon.type === 'el-icon'" :class="cIcon.icon"></i>
  <svg-icon
    v-else-if="cIcon.type === 'svg-icon'"
    :name="cIcon.icon"
    :class="cIcon.className"
  ></svg-icon>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    cIcon() {
      const icon = this.icon?.name || this.icon
      const className = this.icon?.className || ''
      const type = this.icon?.match(/el-/) ? 'el-icon' : 'svg-icon'
      return { icon, className, type }
    },
  },
}
</script>

<style lang="scss" scoped></style>
