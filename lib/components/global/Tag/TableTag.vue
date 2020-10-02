<template>
  <el-tag class="table-tag" v-bind="$props" v-on="$listeners">
    <slot />
  </el-tag>
</template>

<script>
import { tagProps } from './tag'
export default {
  props: {
    ...tagProps,
    size: {
      type: String,
      default: 'medium',
    },
  },
}
</script>

<style lang="scss" scoped></style>
