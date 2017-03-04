/**
 * Created by Mark on 2017/3/1.
 */
// 基于准备好的dom，初始化echarts实例
var myChartBar = echarts.init(document.getElementById('echart-bar'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 柱状图实例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChartBar.setOption(option);

//展示动画
myChartBar.showLoading();

//数据异步加载
$.get('http://localhost:8080/webprojectdemo/doecharts').done(function (data) {

    debugger;
    myChartBar.hideLoading();
    if(typeof data == "string"){
        data = JSON.parse(data);
    }
    // 填充数据
    myChartBar.setOption({
        xAxis:{
            data:data.categories
        },
        // yAxis: {},
        //ECharts 中在更新数据的时候需要通过name属性对应到相应的系列
        series:[{
            name:'销量',
            data:data.data
        }]
    });
});

myChartBar.on('click',function (params) {
    console.log(params);
});

//loading 动画


