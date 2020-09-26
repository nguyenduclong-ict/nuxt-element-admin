<template>
  <el-main class="bg-gray">
    <panel-group :items="panelItems" @item-click="fillData" />

    <el-card>
      <line-chart
        v-if="datacollection"
        :options="{ fill: false }"
        :height="300"
        :chart-data="datacollection"
      ></line-chart>
    </el-card>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      datacollection: null,
      panelItems: [
        { name: 'New Visits', value: 102400, icon: 'peoples' },
        { name: 'Messages', value: 81212, icon: 'message' },
        { name: 'Purchases', value: 9280, icon: 'money' },
        { name: 'Shoppings', value: 13600, icon: 'shopping' },
      ],
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
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
      this.datacollection = {
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
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
  },
}
</script>

<style lang="scss" scoped></style>
