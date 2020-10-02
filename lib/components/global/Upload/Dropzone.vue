<template>
  <div class="dropzone-container">
    <el-upload
      ref="upload"
      class="dropzone"
      drag
      :action="action"
      :data="data"
      :headers="headers"
      :file-list="fileList"
      :limit="limit"
      :multiple="multiple"
      :style="{ '--width': width }"
      :on-success="handleOnSuccess"
      :on-preview="handleOnPreview"
      :on-remove="handleOnRemove"
      :on-error="handleOnError"
      :before-upload="handleOnBeforeUpload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or
        <em>click to upload</em>
      </div>
      <div v-if="maxSize !== Infinity" slot="tip" class="el-upload__tip">
        jpg/png files with a size less than {{ maxSize | number('0 ib') }}
      </div>
    </el-upload>
  </div>
</template>

<script>
import { createUniqueString, removeItem } from '~/lib/utils'
export default {
  name: 'Dropzone',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'object',
    },
    width: {
      type: String,
      default: '146px',
    },
    maxSize: {
      type: Number,
      default: Infinity,
    },
    limit: {
      type: Number,
      default: Infinity,
    },
    data: Object,
  },
  data() {
    return {
      isShowPreview: false,
      previewItem: null,
      uids: {},
      queue: [],
    }
  },
  computed: {
    multiple() {
      return this.limit > 1
    },
    action() {
      return process.env.API_URL + '/upload'
    },
    headers() {
      return {
        authorization: this.$auth.getToken('local'),
      }
    },
    fileList() {
      return this.value.map((item, index) => {
        if (this.type === 'string') {
          item = {
            url: item,
          }
        }
        item.uid = item.uid || this.uids[item.url] || createUniqueString()
        this.uids[item.url] = item.uid
        return {
          url: item.url,
          response: item,
          uid: item.uid,
          percentage: 100,
          status: 'success',
          name: item.url,
        }
      })
    },
  },
  methods: {
    handleOnBeforeUpload(file) {
      if (file.size > this.maxSize) {
        this.$message.error({ message: 'Dung lượng file quá lớn' })
        return false
      }
    },
    handleOnRemove(file) {
      if (this.type === 'string') {
        removeItem(this.value, null, (item) => item === file.url)
      } else {
        removeItem(this.value, null, (item) => item.uid === file.uid)
      }
      this.$emit('remove', file)
    },
    handleOnPreview(file) {
      this.previewItem = file
      this.isShowPreview = true
    },
    handleOnSuccess(r, f, fileList) {
      this.queue.push(f)
      if (fileList.some((file) => file.status === 'uploading')) {
        return
      }
      this.queue.forEach((file) => {
        if (this.type === 'object') {
          const { response } = file
          file.url = this.value.push({
            ...response,
            url: response.url,
            alt: response.alt,
            title: response.title,
            uid: file.uid,
          })
        } else {
          const { response } = file
          file.url = response.url
          this.uids[file.url] = file.uid
          this.value.push(response.url)
        }
        this.$emit('add', file)
      })
      this.queue = []
    },
    handleOnError(error, file, fileList) {
      console.log('uploadError', { error, file, fileList })
    },
  },
}
</script>

<style lang="scss" scoped></style>
