/**
 * Created by Mark on 2017/3/1.
 */
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart-pie'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 饼图实例'
    },
    //背景颜色
    backgroundColor:'#888',
    //字体颜色
    textStyle:{
        color:'rgba(255,0,255,0.3)'
    },
    //引导线的颜色
    labelLine:{
        normal:{
            lineStyle:{
                color:'rgba(255,255,255,0.3)'
            }
        }
    },
    legend: {
        data:['搜索引擎','直接访问','邮件直销','联盟广告','视频广告'],
        x:50,
        y:30
    },
    tooltip: {},
    itemStyle:{
        //正常时显示的样式
        normal:{
            //设置扇形的颜色
            color:'#c23531',
            shadowBlur:200,
            shadowColor:'rgba(0,0,0,0.5)',
            //阴影的大小
            shadowBlur:200,
            //阴影水平向上的偏移
            shadowOffsetX:0,
            shadowOffsetY:0,
            //阴影颜色
            shadowColor:'rgba(0,0,0,5)'
        },
        //鼠标blur显示的样式
        emphasis:{
            shadowBlur:200,
            shadowColor:'rgba(255,0,0,0.5)'
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius:'55%',
        //显示成南丁格尔图
        roseType:'angle',
        data: [
            {value:400,name:'搜索引擎'},
            {value:335,name:'直接访问'},
            {value:310,name:'邮件直销'},
            {value:274,name:'联盟广告'},
            {value:235,name:'视频广告'}]
    }],

    /*data:[{
        value:400,
        name:'搜索引擎',
        itemStyle:{
            normal:{
                color:'c23531'
            }
        }
    },...]*/

    visualMap:{
        //不显示visualMap组件，只用于敏感度的映射
        show:false,
        min:80,
        //映射的最大值为600
        max:600,
        inRange:{
            //明暗度的范围0-1
            colorLightness:[0,1]
        }
    }
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);