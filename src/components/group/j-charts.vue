<template>
  <div style="width:100%;height:100%">
    <div class="j-echarts" ref="chart"></div>
    <el-dialog
      custom-class="j-echarts-dialog"
      :title="title"
      :visible.sync="visible"
      :modal="false"
      width="50%"
      :before-close="close"
      @opened="open">
      <div class="j-echarts" ref="chart2" style="height:500px;"></div>
    </el-dialog>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import tools from '@/util/echarts-auto-tooltip'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/toolbox'
  import 'echarts/lib/component/markPoint'
  import 'echarts/lib/component/markLine'
  export default {
    props: {
      title: {
        type:String,
        default:'放大'
      },
      option: {},
      tooltip: false,
      click: false
    },
    data () {
      return {
        chart: null,
        visible: false,
        chart2: null
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        var ctx = this
        this.chart = echarts.init(this.$refs.chart)

        // 动态显示
        if (this.tooltip) {
          this.chart.setOption(ctx.option, true)
          tools.loopShowTooltip(this.chart, this.option, {loopSeries: true})
        } else {
          this.chart.setOption(ctx.option, true)
        }
        // 自适应窗口
        window.addEventListener("resize", this.resizeHandle)
        // 点击放大
        this.click && this.chart.on('click', function (params) {
          ctx.visible = true
        });
      },
      resizeHandle(){
        this.chart && echarts.init(this.$refs.chart).resize()
      },
      close(){
        this.visible = false
      },
      open(){
        this.chart2 = echarts.init(this.$refs.chart2)
        let option = this.option
        let serie = option.series[0]
        if (serie.type === 'pie') {
          option.series[0].outsideLabel.style.fontSize = 36
        }
        if (serie.type === 'bar') {
          option.xAxis[0].axisLine.lineStyle.fontSize = 36
          option.yAxis[0].axisLine.lineStyle.fontSize = 36
        }
        this.chart2.setOption(option)
      },
      setOption(option){
        this.chart.setOption(option)
      }
    }
  }
</script>

<style lang="scss">
.j-echarts{
  height:100%;
  width:100%;
}
.j-echarts-dialog{
  .el-dialog__header{
    background-color: #030409;
    .el-dialog__title{
      color:#fff;
    }
  }
  .el-dialog__body{
    background-color: #030409;padding: 20px 20px 30px 20px;
    .dv-border-box-10{
      margin-bottom: 0 !important
    }
  }
}
</style>
