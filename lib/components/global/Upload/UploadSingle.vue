<template>
  <upload
    :value="cValue"
    v-bind="props"
    :multiple="false"
    :limit="1"
    type="object"
    @add="handleAdd"
    @remove="handleRemove"
  />
</template>

<script>
import { createUniqueString } from '~/lib/utils'
import { get } from '~/lib/utils/external/lodash'
export default {
  name: 'UploadSingle',
  props: {
    value: [String, Object],
    props: Object,
    type: {
      type: String,
      default() {
        return typeof (this.value || {})
      },
    },
  },
  data() {
    return {
      uid: createUniqueString(),
    }
  },
  computed: {
    cValue() {
      return [this.value]
        .filter((item) =>
          typeof item === 'string' ? !!item : get(item, 'url')
        )
        .map((item) => {
          item = this.type === 'object' ? item : { url: item }
          item.uid = item.uid || this.uid
          return item
        })
    },
  },
  methods: {
    handleAdd(value) {
      this.uid = value.uid
      if (this.type === 'object') {
        this.$emit('input', value)
      } else {
        this.$emit('input', value.url)
      }
    },
    handleRemove(value) {
      this.$emit('input', undefined)
    },
  },
}
</script>

<style lang="scss" scoped></style>
