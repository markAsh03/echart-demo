/**
 * Created by Mark on 2017/3/4.
 */

var myChartScatter = echarts.init(document.getElementById("echart-scatter"));


var data1 = [],data2=[],data3=[];

function random(max) {
   //保留三位有效数字
   return (Math.random()*max).toFixed(3);
}

for(var i = 0;i<100;i++){
   data1.push([random(15),random(10),random(1)]);
   data2.push([random(10),random(10),random(1)]);
   data3.push([random(15),random(10),random(1)]);
}

myChartScatter.setOption({
    title:{
        text:"Echart 点图实例"
    },
    animation:false,
    legend:{
        data:['scatter','scatter2','scatter3']
    },
    tooltip:{},
    xAxis:{
        type:"value",
        min:'dataMin',
        max:'dataMax',
        splitLine:{
            show:true
        }
    },
    yAxis:{
        type:'value',
        min:'dataMin',
        max:'dataMax',
        splitLine:{
            show:true
        }
    },
    dataZoom:[
        {
            type:'slider',
            show:true,
            xAxisIndex:[0],
            start:1,
            end:35
        },
        {
            type:'slider',
            show:true,
            yAxisIndex:[0],
            left:'93%',
            start:29,
            end:36
        },
        {
            type:'inside',
            xAxisIndex:[0],
            start:1,
            end:35
        },
        {
            type:'inside',
            yAxisIndex:[0],
            start:29,
            end:36
        }
    ],
    series:[
        {
            name:"scatter",
            type:"scatter",
            itemStyle:{
                normal:{
                    opacity:0.8
                }
            },
            symbolSize:function (val) {
                return val[2]*40;
            },
            data: data1
        },
        {
            name:"scatter2",
            type:"scatter",
            itemStyle:{
                normal:{
                    opacity:0.8
                }
            },
            symbolSize:function (val) {
                return val[2]*40;
            },
            data: data2
        },
        {
            name:"scatter3",
            type:"scatter",
            itemStyle:{
                normal:{
                    opacity:0.8
                }
            },
            symbolSize:function (val) {
                return val[2]*40;
            },
            data: data3
        }
    ]
});


