<template>
  <div
    class="upload-avatar"
    style="cursor: pointer"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <el-avatar
      shape="circle"
      :size="size"
      :src="cValue.url"
      @click.native="show = true"
    ></el-avatar>

    <div v-show="cValue.url" class="mask">
      <span v-if="type === 'object'">
        <el-popover title="Edit Image" :width="300">
          <el-form>
            <el-form-item label="Alt: ">
              <el-input
                v-model="value.alt"
                placeholder="Enter image alt..."
              ></el-input>
            </el-form-item>

            <el-form-item label="Title: ">
              <el-input
                v-model="value.title"
                placeholder="Enter image tilte..."
              ></el-input>
            </el-form-item>
          </el-form>

          <i slot="reference" class="el-icon-edit color-white"></i>
        </el-popover>
      </span>
      <span @click="handleRemove">
        <i class="el-icon-delete color-white"></i>
      </span>
    </div>

    <image-cropper
      ref="crop"
      v-model="show"
      field="file"
      :width="300"
      :height="300"
      :url="action"
      :params="data"
      :headers="headers"
      img-format="png"
      lang-type="en"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
    ></image-cropper>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, String],
      default: () => ({ url: '', alt: '', title: '' }),
    },
    data: Object,
    size: {
      type: [String, Number],
      default: 128,
    },
    type: {
      type: String,
      default() {
        return typeof (this.value || {})
      },
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    cValue() {
      return {
        url: this.value?.url || this.value,
      }
    },
    action() {
      return process.env.API_URL + '/upload'
    },
    headers() {
      return {
        authorization: this.$auth.getToken('local'),
      }
    },
  },
  methods: {
    cropSuccess() {},
    cropUploadSuccess(jsonData) {
      if (this.type === 'object') {
        this.$emit('input', { url: jsonData.url })
      } else {
        this.$emit('input', jsonData.url)
      }
      this.$refs.crop.setStep(1)
      this.show = false
    },
    cropUploadFail() {},
    handleRemove() {
      this.$emit('input', undefined)
    },
  },
}
</script>

<style lang="scss">
.upload-avatar {
  position: relative;

  .mask {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    span + span {
      margin-left: 12px;
    }
  }

  &:hover {
    .mask {
      opacity: 1;
      background: rgba(0, 0, 0, 0.226);
    }
  }
}
</style>
