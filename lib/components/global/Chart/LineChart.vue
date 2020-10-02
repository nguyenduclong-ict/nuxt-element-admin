<script>
import { Line, mixins } from 'vue-chartjs'
import { defaultsDeep } from '~/lib/utils/external/lodash'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  computed: {
    _options() {
      return defaultsDeep(this.options, {
        responsive: true,
        maintainAspectRatio: false,
      })
    },
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this._options)
  },
}
</script>
