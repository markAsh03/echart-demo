/**
 * Created by Mark on 2017/3/4.
 */

var myChartLine = echarts.init(document.getElementById("echart-line"));

var date = [];
var base = +new Date(2014,9,3);
var oneDay = 24*3600*1000;
var now = new Date(base);

var data = [Math.random()*150];

function addData(shift) {
    now = [now.getFullYear(),now.getMonth()+1,now.getDate()].join('/');
    date.push(now);
    data.push((Math.random()-0.4)*10 + data[data.length - 1]);

    if(shift){
        date.shift();
        data.shift();
    }
    now = new Date(+new Date(now) + oneDay);
}

for(var i = 0;i<100;i++){
    addData();
}

myChartLine.setOption({
    title:{
        text:"Echart 折线图实例"
    },
    xAxis:{
        type:"category",
        boundaryGap:false,
        data:date
    },
    yAxis:{
        boundaryGap:[0,'50%'],
        type:'value'
    },
    series:[
        {
            name:"成交",
            type:"line",
            smooth:true,
            symbol:'none',
            stack:'a',
            areaStyle:{
                normal:{}
            },
            data: data
        }
    ]
});

setInterval(function () {
   addData();
   myChartLine.setOption({
       xAxis:{
           data:date
       },
       series:[{
           name:'成交',
           data:data
       }]
   });
},500);
