<template>
  <el-tooltip v-if="tooltip" :content="tooltip">
    <lib-button class="button-table" v-bind="$props" v-on="$listeners">
      <slot />
    </lib-button>
  </el-tooltip>
  <lib-button v-else class="button-table" v-bind="$props" v-on="$listeners">
    <slot />
  </lib-button>
</template>

<script>
import { buttonProps } from './button'
export default {
  props: {
    ...buttonProps,
    tooltip: String,
    size: {
      type: String,
      default: 'mini',
    },
    name: String,
    type: {
      type: String,
      default() {
        const props = this.$options.propsData
        const map = {
          edit: 'primary',
          delete: 'danger',
          add: 'primary',
          view: 'primary',
          save: 'success',
        }
        return map[props.name] || 'primary'
      },
    },
    icon: {
      type: String,
      default() {
        const props = this.$options.propsData
        const map = {
          edit: 'el-icon-edit',
          delete: 'el-icon-delete',
          add: 'el-icon-plus',
          view: 'el-icon-view',
          save: 'el-icon-document-checked',
        }
        return map[props.name] || ''
      },
    },
  },
}
</script>

<style lang="scss">
.button-table.el-button--mini {
  padding: 7px;
}

.button-table.el-button--small {
  padding: 9px;
}

.button-table.el-button--medium {
  padding: 10px;
}
</style>
