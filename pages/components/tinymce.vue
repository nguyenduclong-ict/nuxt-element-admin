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
      text: '<h1>Hello</h1>',
    }
  },
}
</script>

<style lang="scss" scoped></style>
