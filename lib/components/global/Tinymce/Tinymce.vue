<template>
  <div :id="id" class="tinymce-container">
    <editor :api-key="apiKey" :init="init"></editor>
    <el-button
      v-if="editor"
      class="upload-button"
      size="mini"
      type="primary"
      icon="el-icon-upload"
    ></el-button>

    <el-dialog title="Upload Image" :visible.sync="showUpload"></el-dialog>
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
      init: {
        language: 'en',
        height: this.height,
        body_class: 'panel-body',
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
        },
      },
    }
  },
}
</script>

<style lang="scss">
.tinymce-container {
  position: relative;

  .upload-button {
    z-index: 2000;
    position: absolute;
    top: 6px;
    right: 6px;
  }
}
</style>
