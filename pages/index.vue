<template>
  <el-main>
    <h1>Index Page</h1>
  </el-main>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('/dashboard')
  },
}
</script>

<style lang="sass" scoped></style>
