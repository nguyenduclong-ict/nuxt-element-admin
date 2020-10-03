<template>
  <div class="upload" :class="{ 'is-full': value.length >= limit }">
    <el-upload
      ref="upload"
      :action="action"
      :data="data"
      :headers="headers"
      list-type="picture-card"
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
      <i slot="default" class="el-icon-plus"></i>
    </el-upload>

    <el-dialog
      :visible.sync="isShowPreview"
      custom-class="upload-preview-dialog"
      append-to-body
    >
      <app-image :data="previewItem"></app-image>
      <el-form
        v-if="type === 'object'"
        label-position="left"
        label-width="48px"
      >
        <el-form-item label="Alt">
          <el-input
            v-model="value.alt"
            placeholder="Description here..."
          ></el-input>
        </el-form-item>
        <el-form-item label="Title">
          <el-input
            v-model="value.title"
            placeholder="Description here..."
          ></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { createUniqueString, removeItem } from '@/lib/utils'
export default {
  name: 'Upload',
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
          file.url = response.url
          this.value.push({
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

<style lang="scss">
.el-form-item__content .upload {
  display: inline-block;
  width: 100%;
}

.upload {
  .el-upload-list__item,
  .el-upload--picture-card {
    width: var(--width);
    height: var(--width);
    line-height: var(--width);

    .el-upload-list__item-status-label {
      line-height: 1.8 !important;
    }
  }

  &.is-full div.el-upload.el-upload--picture-card {
    display: none;
  }
}

.upload-preview-dialog {
  overflow: hidden;
  max-width: 60vh;

  img {
    object-fit: contain;
    width: 100%;
    max-height: 60vh;
    border-radius: $radius;
  }

  .el-dialog__header,
  .el-dialog__body {
    padding: 0px;
  }

  .el-form {
    padding: 12px;
  }
}
</style>
