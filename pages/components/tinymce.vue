<template>
  <el-main>
    <tinymce v-model="text" />
  </el-main>
</template>

<script>
export default {
  meta: {},
  data() {
    return {
      text: 'text',
    }
  },
}
</script>

<style lang="scss" scoped></style>
