<template>
  <el-main>
    <h3>Upload</h3>
    <upload
      v-model="images"
      size="64px"
      type="object"
      :limit="1"
      :data="{ shopId: 1 }"
    />

    <h3>Upload single</h3>
    <upload-single v-model="image" size="64px" type="string" />

    <h3>Avatar Upload</h3>
    <avatar-upload v-model="avatar"></avatar-upload>

    <h3>Avatar Upload</h3>
    <dropzone :max-size="232424"></dropzone>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      images: [{ url: 'http://localhost:3001/about-01.jpg' }],
      image: null,
      avatar: '',
    }
  },
}
</script>

<style lang="scss" scoped></style>
