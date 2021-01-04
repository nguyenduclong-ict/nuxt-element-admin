<script>
import { Pie, mixins } from 'vue-chartjs'
import _ from '~/lib/utils/external/lodash'
const { reactiveProp } = mixins

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['options'],
  computed: {
    _options() {
      return _.defaultsDeep(this.options, {
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
