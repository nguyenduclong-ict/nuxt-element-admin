<template>
  <el-main class="bg-gray">
    <panel-group :items="panelItems" @item-click="fillData" />

    <el-row :gutter="40">
      <el-col class="mt-2" :lg="12">
        <el-card>
          <line-chart
            v-if="linesData"
            :height="300"
            :chart-data="linesData"
          ></line-chart>
        </el-card>
      </el-col>

      <el-col class="mt-2" :lg="12">
        <el-card>
          <line-chart
            v-if="areaData"
            :height="300"
            :chart-data="areaData"
          ></line-chart>
        </el-card>
      </el-col>

      <el-col class="mt-2" :lg="12">
        <el-card>
          <bar-chart
            v-if="barData"
            :height="300"
            :chart-data="barData"
          ></bar-chart>
        </el-card>
      </el-col>

      <el-col class="mt-2" :lg="12">
        <el-card>
          <pie-chart
            v-if="pieData"
            :height="300"
            :chart-data="pieData"
          ></pie-chart>
        </el-card>
      </el-col>

      <el-col class="mt-2" :lg="8">
        <box-card></box-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import dayjs from '~/lib/utils/external/dayjs'
import BoxCard from '~/components/Dashboard/BoxCard'
import { createGradient } from '~/lib/utils'
export default {
  components: { BoxCard },
  data() {
    return {
      linesData: null,
      barData: undefined,
      pieData: undefined,
      areaData: undefined,
      gradient: null,
      gradient2: null,
      panelItems: [
        { name: 'New Visits', value: 102400, icon: 'peoples' },
        { name: 'Messages', value: 81212, icon: 'message' },
        { name: 'Purchases', value: 9280, icon: 'money' },
        { name: 'Shoppings', value: 13600, icon: 'shopping' },
      ],
    }
  },
  mounted() {
    this.gradient = createGradient()
    this.gradient2 = createGradient('#f56c6c')
    this.fillData()
  },
  methods: {
    fillLinesData() {
      const randData = () => [
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
        this.getRandomInt(),
      ]
      this.linesData = {
        labels: randData(),
        datasets: [
          {
            label: 'Data One',
            borderColor: '#409eff',
            backgroundColor: 'transparent',
            data: randData(),
          },
          {
            label: 'Data Two',
            borderColor: '#f87979',
            backgroundColor: 'transparent',
            data: randData(),
          },
          {
            label: 'Data Three',
            borderColor: '#67c23a',
            backgroundColor: 'transparent',
            data: randData(),
          },
          {
            label: 'Data Four',
            borderColor: '#e6a23c',
            backgroundColor: 'transparent',
            data: randData(),
          },
        ],
      }
    },
    fillBarData() {
      this.barData = {
        labels: new Array(12)
          .fill('')
          .map((item, index) => dayjs().month(index).format('MMMM')),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#409eff',
            data: new Array(12).fill('').map(this.getRandomInt),
          },
          {
            label: 'Data Two',
            backgroundColor: '#f56c6c',
            data: new Array(12).fill('').map(this.getRandomInt),
          },
        ],
      }
    },
    fillPieData() {
      this.pieData = {
        labels: ['Red', 'Yellow', 'Blue'],
        datasets: [
          {
            backgroundColor: ['#409eff', '#67c23a', '#e6a23c', '#f56c6c'],
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      }
    },
    fillAreaData() {
      this.areaData = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Data One',
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: new Array(7).fill().map(this.getRandomInt),
          },
          {
            label: 'Data Two',
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: new Array(7).fill().map(this.getRandomInt),
          },
        ],
      }
    },
    fillData() {
      this.fillLinesData()
      this.fillBarData()
      this.fillPieData()
      this.fillAreaData()
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
  },
}
</script>

<style lang="scss" scoped></style>
