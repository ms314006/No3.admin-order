

!(function () {
    var tab = document.getElementsByClassName('tab');
    for (let i = 0; i <= tab.length - 1; i++) {
        tab[i].onclick = function (_this) {
            for (let i = 0; i <= tab.length - 1; i++) {
                tab[i].className = tab[i].className.replace('default');
            }
            _this.currentTarget.className += ' default';
            loadData(_this.currentTarget.id);
        }
    }

    printChart();

}());

function printChart() {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '     Activity'

        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['6 JUN', '7 JUL', '8 AUG', '9 SEP', '10 OCT', '11 NOV', '12 DEC'],
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Revenue',
                color: '#7ED321',
                type: 'line',
                data: [7200, 7000, 5500, 7200, 5800, 6100, 7500]
            },
            {
                name: 'Income',
                color: '#4A90E2',
                type: 'line',
                data: [6100, 5400, 1900, 4000, 3800, 5300, 6500]
            },
            {
                name: 'Cost',
                color: '#D0021B',
                type: 'line',
                data: [700, 700, 2800, 3000, 2400, 700, 900]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

function loadData(tabId) {
    switch (tabId) {
        case "tabHOME": {
            console.log('tabHOME');
            break;
        };
        case "tabORDERS": {
            console.log('tabORDERS');
            break;
        };
        case "tabPRODUCTS": {
            console.log('tabPRODUCTS');
            break;
        };
    };

};
