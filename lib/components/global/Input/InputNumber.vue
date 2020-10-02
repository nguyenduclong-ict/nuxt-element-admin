<template>
  <el-input :value="val" v-bind="props" @input="handleInput" v-on="listeners">
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </el-input>
</template>

<script>
import { inputProps } from './input'
import numeral from '~/lib/utils/external/numeral'
export default {
  props: {
    ...inputProps,
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    format: {
      type: String,
      default: '0,0.[000000000]',
    },
  },
  data() {
    return { val: 0 }
  },
  computed: {
    props() {
      const { value, min, format, max, ...props } = this.$props
      return props
    },
    listeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    },
  },
  watch: {
    value: {
      handler(v) {
        const txt = numeral(v).format(this.format)
        if (txt !== this.val) {
          this.val = txt
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleInput(v) {
      let num = numeral(v).value()
      if (num > this.max) {
        num = this.max
      }
      if (num < this.min) {
        num = this.min
      }
      this.val = numeral(num).format(this.format)
      this.$emit('input', num)
    },
  },
}
</script>

<style lang="scss" scoped></style>
