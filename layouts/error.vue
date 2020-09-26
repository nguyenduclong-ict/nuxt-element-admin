<template>
  <el-main>
    <Page404 v-if="error.statusCode === 404" :message="error.message"></Page404>
    <Page401
      v-else-if="error.statusCode === 401"
      :message="error.message"
    ></Page401>
  </el-main>
</template>

<script>
import Page404 from '~/lib/components/ErrorPage/404'
import Page401 from '~/lib/components/ErrorPage/401'
export default {
  components: { Page404, Page401 },
  props: ['error'],
}
</script>

<style lang="scss" scoped></style>
