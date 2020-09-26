<template>
  <img
    :src="cData.url"
    :alt="cData.alt"
    :title="cData.title"
    @error="handleError"
  />
</template>

<script>
export default {
  props: {
    data: [String, Object],
    errorImage: String,
  },
  computed: {
    cData() {
      if (typeof this.data === 'string') {
        return {
          url: this.data,
          alt: '',
          title: '',
        }
      }
      return this.data
    },
  },
  methods: {
    handleError(event) {
      console.log(event)
    },
  },
}
</script>

<style lang="scss" scoped></style>
