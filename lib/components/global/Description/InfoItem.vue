<template>
  <p class="info-item">
    <slot name="label">
      <span
        class="label"
        :style="{ width: cssValue(labelWidth || lget(info, 'labelWidth')) }"
      >
        {{ label }}
      </span>
    </slot>
    <slot></slot>
  </p>
</template>

<script>
import { cssValue } from '~/lib/utils'
export default {
  inject: ['info'],
  props: {
    label: String,
    labelWidth: [Number, String],
  },
  methods: {
    cssValue,
  },
}
</script>

<style lang="scss" scoped>
.info-item {
  word-break: keep-all;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0px;
  }

  .label {
    vertical-align: top;
    word-break: keep-all;
    display: inline-block;
  }

  > * {
    display: inline-block;
  }
}
</style>
