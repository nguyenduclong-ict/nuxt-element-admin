<template>
  <i v-if="iconPack === 'el-icon'" :class="[name]" v-on="$listeners"></i>
  <svg-icon
    v-else-if="iconPack === 'svg-icon'"
    :name="name"
    v-on="$listeners"
  ></svg-icon>
</template>

<script>
export default {
  props: {
    name: String,
    type: String,
  },
  data() {
    return {
      iconPack: '',
    }
  },
  watch: {
    name: {
      handler() {
        if (/el-icon-/.test(this.name)) {
          this.iconPack = 'el-icon'
          return
        }
        this.iconPack = 'svg-icon'
      },
      immediate: true,
    },
    type(v) {
      this.iconPack = v
    },
  },
}
</script>

<style lang="scss" scoped></style>
