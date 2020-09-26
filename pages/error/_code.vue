<template>
  <div></div>
</template>

<script>
export default {
  asyncData({ params, error }) {
    if (Number(params.code) === 404) {
      return error({ statusCode: 404, message: 'Trang tìm thấy trang yêu cầu' })
    }

    if (Number(params.code) === 401) {
      return error({
        statusCode: 401,
        message: 'Bạn không có quyền truy cập nội dung này',
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
