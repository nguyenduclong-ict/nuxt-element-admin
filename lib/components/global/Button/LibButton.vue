<template>
  <el-button class="lib-button" v-bind="props" v-on="$listeners">
    <icon v-if="icon" :name="icon"></icon>
    <slot />
  </el-button>
</template>

<script>
import { buttonProps } from './button'
export default {
  props: {
    ...buttonProps,
  },
  computed: {
    props() {
      const { icon, ...props } = this.$props
      return props
    },
  },
}
</script>

<style lang="scss"></style>
