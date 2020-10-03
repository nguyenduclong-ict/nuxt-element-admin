<template>
  <div class="tinymce-container">
    <editor
      :value="value"
      :api-key="apiKey"
      :init="init"
      @input="$emit('input', $event)"
    ></editor>
    <el-dialog title="Upload Image" :visible.sync="showUpload" append-to-body>
      <el-row :gutter="12">
        <el-col :md="12">
          <Dropzone v-model="tmpImage" type="object" />
        </el-col>
        <el-col :md="12">
          <app-image
            v-for="img in tmpImage"
            :key="img.uid"
            :data="img"
            style="width: 128px; height: 128px; object-fit: contain"
          ></app-image>
        </el-col>
      </el-row>

      <span slot="footer">
        <el-button @click="handleCancelImageUpload">Hủy</el-button>
        <el-button type="primary" :limit="1" @click="handleInsertImage">
          Thêm
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { plugins, toolbar } from './config'
import { createUniqueString } from '~/lib/utils'
export default {
  props: {
    id: {
      type: String,
      default() {
        return 'vue-tinymce-' + createUniqueString()
      },
    },
    value: String,
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    menubar: {
      type: String,
      default: 'file edit insert view format table basicitem',
    },
    height: {
      type: [Number, String],
      required: false,
      default: 360,
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto',
    },
  },
  data() {
    return {
      editor: null,
      showUpload: false,
      apiKey:
        process.env.TINYMCE_KEY ||
        '3yt64d5qdxbws6vnlpysi905awwqebibbw6x2j3j0burkfe2',
      tinymceId: this.id,
      tmpImage: [],
      init: {
        selector: `#${this.tinymceId}`,
        language: 'en',
        height: this.height,
        body_class: 'panel-body',
        content_css: '/css/tinymce.css',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true,
        convert_urls: false,
        setup: (editor) => {
          editor.ui.registry.addButton('uploadimage', {
            text: 'Upload Image',
            icon: 'upload',
            onAction: () => {
              this.showUpload = true
            },
          })
          this.editor = editor
        },
      },
    }
  },
  methods: {
    handleCancelImageUpload() {
      this.showUpload = false
    },
    handleInsertImage() {
      const arr = this.tmpImage
      arr.forEach((v) =>
        this.editor.insertContent(
          `<img src="${v.url}" alt="${v.alt}" title="${v.title}" />`
        )
      )
      this.$nextTick(() => {
        this.tmpImage = []
        this.showUpload = false
      })
    },
  },
}
</script>
