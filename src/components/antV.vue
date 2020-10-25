<template>
  <div id="antv">
    <div id="c1">
      ffdd
      </div> 
  </div>
</template>
<script>
// import { Chart } from '@antv/g2';
  export default {
    name:'antv',
    data() {
      return {
        c1Data: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ],
      }
    },
    mounted () {
      this.createChart();
    },
    methods: {
      createChart() {
        const chart = new this.$G2.Chart({
        container: 'c1', // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300, // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(this.c1Data);

      // Step 3：创建图形语法，绘制柱状图
      chart.interval().position('genre*sold');

      // Step 4: 渲染图表
      chart.render();
        
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>
