<template>
  <el-input
    v-if="elType === 'input'"
    v-model="cValue"
    class="input-search"
    prefix-icon="el-icon-search"
    v-bind="$props"
    @input="handleInput"
    @change="handleChange"
    v-on="listeners"
  ></el-input>
</template>

<script>
import { inputProps } from './input'
import { debounce } from '~/lib/utils/external/lodash'
export default {
  props: {
    ...inputProps,
    placeholder: {
      type: String,
      default: 'Tìm kiếm...',
    },
    debounce: {
      type: Number,
      default: 500,
    },
    elType: {
      type: String,
      default: 'input',
    },
  },
  data() {
    let handleInput = (v) => {
      if (!this.commited) {
        this.$emit('input', v)
        this.$emit('change', v)
        this.$emit('search', v)
      }
      this.commited = false
    }

    if (this.debounce) {
      handleInput = debounce(handleInput, this.debounce)
    }

    return {
      cValue: '',
      handleInput,
      commited: false,
    }
  },
  computed: {
    listeners() {
      const { change, input, ...listeners } = this.$listeners
      return listeners
    },
  },
  watch: {
    value: {
      handler(v) {
        if (v !== this.cValue) {
          this.cValue = v
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleChange(value) {
      this.commited = true
      this.$emit('input', value)
      this.$emit('change', value)
      this.$emit('search', value)
    },
  },
}
</script>

<style lang="scss">
.input-search:not([class*='w-']) {
  width: 300px;
}
</style>
