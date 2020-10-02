<template>
  <div class="pd-2 lib-empty">
    <svg-icon
      name="empty"
      style="font-size: 64px"
      class="color-text-placeholder"
    ></svg-icon>
    <span class="color-text-placeholder">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Không có dữ liệu',
    },
  },
}
</script>

<style lang="scss">
.lib-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
