function piechart(seriesName, divId, data, chartHeight) {
    Highcharts.chart(divId, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: chartHeight,
        },
        title: {
            text: ''
        },
        series: [{
            name: seriesName,
            colorByPoint: true,
            data: data,
        }]
    });
}

function linechart(seriesName, divId, data, chartHeight) {
    Highcharts.chart(divId, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: chartHeight,
        },
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'stories per week',
            },
        },
        title: {
            text: ''
        },
        series: [{
            type: 'spline',
            name: seriesName,
            data: data,
            color: '#300D28',
        }]
    });
}



function wordcloud(divId, data) {
    Highcharts.chart(divId, {
        series: [{
            colors: ['#70615C'],
            rotation: {
                from: 0,
                to: 0,
                orientations: 1
            },
            type: 'wordcloud',
            data: data
        }],
        plotOptions: {
            wordcloud: {
                maxFontSize: 26,
                minFontSize: 5,
            }
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
    });
}