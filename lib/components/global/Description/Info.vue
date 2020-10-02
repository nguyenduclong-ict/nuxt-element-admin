<template>
  <div class="info-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return { info: this }
  },
  props: {
    labelWidth: {
      type: [Number, String],
      default: '100px',
    },
  },
}
</script>

<style lang="scss" scoped></style>
