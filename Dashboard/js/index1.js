$(function () {
    echart_1();
	echart_2();
	echart_3();
	echart_4();
	
	function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        var xAxisData = ['business', 'filesharing', 'software', 'radiomusic', 'porn', 'illegal', 'marketing', 'misc', 'parked', 'education'];
        var legendData = ['Requests', 'URLs'];
        var serieData = [];
        var metaDate = [
            [24.69, 24.44, 12.38, 6.78, 4.30, 3.66, 3.40, 2.27, 2.24, 2.07],
            [25.04, 22.34, 11.49, 8.53, 5.12, 2.99, 6.92, 1.22, 2.47, 1.80]
        ]
        for (var v = 0; v < legendData.length; v++) {
            var serie = {
                name: legendData[v],
                type: 'line',
                symbol: "circle",
                symbolSize: 10,
                data: metaDate[v]
            };
            serieData.push(serie);
        }
        var colors = ["#8AB3F8", "#F49E97", "#5EBEFC", "#2EF7F3"];
        var option = {
            legend: {
                show: true,
                left: "center",
                data: legendData,
                y: "5%",
                itemWidth: 18,
                itemHeight: 12,
                textStyle: {
                    color: "#000",
                    fontSize: 14
                },
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '20%',
                iconStyle: {
                    color: '#6173A3',
                    borderColor: '#6173A3',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        // show: true,
                        type: ['line','bar','stack']
                    }
                }
            },
            color: colors,
            grid: {
                left: '4%',
                top: "12%",
                bottom: "5%",
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    },
					rotate: 60
                },
                axisTick: {
                    show: false
                },
                data: xAxisData,
            }, ],
            yAxis: [{
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
				name: "Proportion (%)",
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            }, ],
            series: serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
	
	function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        var xAxisData = ['total', 'rivendell', 'BPI', 'Remove Your Media', 'MG Premium', 'APDIF-Mexico', 'APDIF-Brazil', 'Degban', 'Aiplex Software', 'MarkMonitor', 'Protek Media', 'Fox Group Legal', 'MUSO.com', 'Recording Industry Association of America', 'AudioLock.NET', 'Skywalker Digital', 'Link-Busters.com', 'Takedown Piracy', 'DMCA Force', 'comeso GmbH'];
        var legendData = ['URLs Removed', 'Not in Search Index','No Actions', 'Pending review'];
        var serieData = [];
        var metaDate = [
            [0.69, 0.70, 0.96, 0.63, 0.47, 0.53, 0.71, 0.94, 0.46, 0.73, 0.48, 0.60, 0.55, 0.95, 0.93, 0.92, 0.60, 0.94, 0.73, 0.78],
            [0.21, 0.22, 0.004, 0.28, 0.38, 0.14, 0.23, 0, 0.53, 0.21, 0.45, 0.28, 0.35, 0.009, 0.035, 0.03, 0.18, 0, 0.16, 0.12],
			[0.09, 0.08, 0.03, 0.09, 0.14, 0.33, 0.07, 0.025, 0.008, 0.06, 0.072, 0.11, 0.10, 0.039, 0.037, 0.05, 0.21, 0.06, 0.10, 0.10],
			[4.04E-05, 1.29E-05, 2.13E-07, 1.20E-08, 6.15E-09, 0, 0, 0, 4.47E-07, 0, 0, 0, 0, 1.98E-07, 0, 0, 7.27E-06, 0, 4.03E-06, 0]
        ]
        for (var v = 0; v < legendData.length; v++) {
            var serie = {
                name: legendData[v],
                type: 'bar',
                symbol: "circle",
                symbolSize: 10,
                data: metaDate[v]
            };
            serieData.push(serie);
        }
        var colors = ["#8AB3F8", "#EE695D", "#FBBC05", "#2EF7F3"];
        var option = {
            legend: {
                show: true,
                left: "center",
                data: legendData,
				y: "1%",
                itemWidth: 18,
                itemHeight: 12,
                textStyle: {
                    color: "#000",
                    fontSize: 10
                },
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '20%',
                iconStyle: {
                    color: '#6173A3',
                    borderColor: '#6173A3',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        // show: true,
                        type: ['line','bar','stack']
                    }
                }
            },
            color: colors,
            grid: {
                left: '4%',
                top: "12%",
                bottom: "5%",
                right: "5%",
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    },
					rotate: 60
                },
                axisTick: {
                    show: false
                },
                data: xAxisData,
            }, ],
            yAxis: [{
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
				name: "Proportion",
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            }, ],
            series: serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
	
	function echart_3() {
        var dom = document.getElementById("chart_3");
		var myChart = echarts.init(dom);
		var app = {};
		app.title = 'heat map';
 
		var types = ['business', 'filesharing', 'software', 'radiomusic', 'porn', 'illegal', 'marketing',
				'misc', 'parked', 'education'];
		var organizations = ['Skywalker Digital', 'AudioLock.NET', 'Recording Industry',
				'MUSO.com', 'Fox Group', 'Protek Media', 'MarkMonitor', 'Aiplex Software', 'Degban', 'APDIF-Brazil', 'APDIF-Mexico', 'MG Premium', 'Remove Your Media', 'BPI', 'rivendell'];
 
		var data = [[0,0,0.2],[0,1,0.1],[0,2,0.02],[0,3,0.04],[0,4,0.1],[0,5,0.12],[0,6,0.3],[0,7,0],[0,8,0],[0,9,0.1],[1,0,0.35],[1,1,0.2],[1,2,0.1],[1,3,0.1],[1,4,0],[1,5,0],[1,6,0.3],[1,7,0],[1,8,0],[1,9,0],[2,0,0.2],[2,1,0.15],[2,2,0.12],[2,3,0.35],[2,4,0.1],[2,5,0.05],[2,6,0.05],[2,7,0],[2,8,0.1],[2,9,0.1],[3,0,0.35],[3,1,0.2],[3,2,0.2],[3,3,0.05],[3,4,0.2],[3,5,0.05],[3,6,0.1],[3,7,0.05],[3,8,0.11],[3,9,0.05],[4,0,0.1],[4,1,0.1],[4,2,0.1],[4,3,0.2],[4,4,0.05],[4,5,0.05],[4,6,0.6],[4,7,0.05],[4,8,0],[4,9,0],[5,0,0.1],[5,1,0.2],[5,2,0],[5,3,0.1],[5,4,0.1],[5,5,0],[5,6,0.1],[5,7,0],[5,8,0.1],[5,9,0.1],[6,0,0.2],[6,1,0.05],[6,2,0.3],[6,3,0.1],[6,4,0.2],[6,5,0.2],[6,6,0.1],[6,7,0],[6,8,0],[6,9,0.1],[7,0,0.3],[7,1,0.1],[7,2,0.3],[7,3,0],[7,4,0.05],[7,5,0.1],[7,6,0.2],[7,7,0.05],[7,8,0.05],[7,9,0.1],[8,0,0.3],[8,1,0.05],[8,2,0.2],[8,3,0],[8,4,0],[8,5,0.1],[8,6,0.2],[8,7,0.1],[8,8,0.1],[8,9,0],[9,0,0.2],[9,1,0.2],[9,2,0.1],[9,3,0.1],[9,4,0],[9,5,0.2],[9,6,0.1],[9,7,0],[9,8,0.1],[9,9,0],[10,0,0.4],[10,1,0.1],[10,2,0.1],[10,3,0],[10,4,0.1],[10,5,0.2],[10,6,0.1],[10,7,0],[10,8,0.05],[10,9,0],[11,0,0.2],[11,1,0],[11,2,0.05],[11,3,0.1],[11,4,0.2],[11,5,0.2],[11,6,0.3],[11,7,0.1],[11,8,0.05],[11,9,0],[12,0,0.2],[12,1,0.1],[12,2,0.05],[12,3,0.1],[12,4,0.1],[12,5,0],[12,6,0.2],[12,7,0.2],[12,8,0.05],[13,9,0.2],[13,0,0.2],[13,1,0.05],[13,2,0.4],[13,3,0.1],[13,4,0.2],[13,5,0.01],[13,6,0.02],[13,7,0],[13,8,0],[13,9,0.1],[14,0,0.2],[14,1,0.1],[14,2,0.2],[14,3,0.1],[14,4,0.1],[14,5,0.05],[14,6,0.05],[14,7,0.05],[14,8,0.05],[14,9,0.1]];

		data = data.map(function (item) {
			return [item[1], item[0], item[2] || '-'];
		});

		option = {
			tooltip: {
				position: 'top'
			},
			animation: false,
			grid: {
				y2: '60',
				x: '140',
				y: '40'
			},
			toolbox: {
                orient: 'vertical',
                iconStyle: {
                    color: '#6173A3',
                    borderColor: '#6173A3',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                },
				right: '0',
				top: '30'
            },
			xAxis: {
				type: 'category',
				data: types,
				splitArea: {
					show: true
				},
				axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    },
					rotate: 60
                },
			},
			yAxis: {
				type: 'category',
				data: organizations,
				splitArea: {
					show: true
				}
			},
			visualMap: {
				min: 0,
				max: 0.6,
				calculable: true,
				orient: 'vertical',
				right: '0',
				bottom: '50',
				precision: 1
			},
			series: [{
				name: 'Proportion',
				type: 'heatmap',
				data: data,
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}]
		};
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
		
    }
	
	function echart_4() {
		var dom = document.getElementById("chart_4");
		var myChart = echarts.init(dom);
		var app = {};
		
		var base = +new Date(2019, 0, 0);
		var oneDay = 24 * 3600 * 1000;
		var date = [];

		var data = [538743, 1859053, 1804058, 1612504, 715578, 698173, 1335624, 1681748, 2398806, 1271386, 2016192, 1174259, 835250, 1690890, 2079411, 1710343, 2645984, 1519975, 1096906, 888079, 2622103, 1882310, 2156021, 2348174, 2349905, 913272, 533783, 2383535, 1112821, 1231598, 1891278, 1453122, 804373, 403934, 2004106, 1927806, 1593640, 2406782, 1331417, 709323, 518300, 1529047, 1451583, 1909781, 1625594, 1783656, 859964, 540123, 1877072, 2193011, 1678422, 1493681, 1376729, 1205083, 862902, 1548382, 2217433, 1508485, 1434084, 1479092, 1112057, 960984, 1819261, 1399523, 1909837, 2336365, 1322306, 1710559, 659178, 1845978, 1945091, 1434068, 2361042, 1897632, 994801, 1408835, 2008044, 1683840, 1679928, 1292094, 1592551, 536365, 1172381, 1660472, 1796233, 1702414, 1757278, 2381008, 1419311, 1157489, 2301849, 2091105, 1924008, 2438602, 1854378, 850163, 447812, 1449613, 2165377, 2116868, 1919739, 1598180, 581799, 470089, 2097459, 1618261, 1819294, 2058313, 827795, 1903947, 818536, 1598727, 1968808, 1914822, 1504605, 1306911, 603009, 767256, 2277663, 1429939, 1295915, 1279548, 1292603, 440129, 930474, 1238739, 1361309, 1423830, 1202319, 1172446, 692189, 914946, 2179439, 2136961, 1565909, 1485025, 1681643, 516537, 578471, 1482726, 2156990, 1363827, 1617655, 1590201, 838379, 635671, 1402758, 1781076, 1497386, 1599861, 1696901, 1112720, 830761, 1642486, 1641781, 1883833, 1422703, 1623034, 963470, 454861, 1737868, 2249448, 1296156, 1946152, 1184254, 755604, 801081, 1591164, 1742450, 1386713, 1992207, 1423536, 780967, 443562, 934886, 2288617, 2027698, 1430603, 2165435, 574845, 390418, 1280085, 1996626, 1640957, 1251625, 1285606, 485537, 381857, 964463, 1196709, 1205127, 1295757, 894301, 560140, 964564, 1675906, 1487928, 2368580, 1273919, 1297842, 634688, 881099, 1627363, 2052797, 1608701, 1512571, 1431740, 1174974, 353291, 1312194, 1160363, 1118910, 1798444, 925849, 290319, 349200, 1083590, 1585213, 1563334, 1581862, 1352785, 529023, 396253, 1315959, 1144799, 1934530, 1464674, 889452, 410456, 485767, 1378874, 1312919, 1528476, 936221, 1305628, 1089519, 747562, 1681084, 1877532, 1872207, 1956603, 1284581, 498773, 329106, 1221949, 1672084, 1549911, 1522482, 1739295, 971059, 743991, 1960989, 2235827, 2004549, 1229741, 1780118, 604475, 306693, 1835549, 1889474, 1907500, 1454874, 1718345, 1122940, 695245, 2503981, 2498046, 2259273, 3896279, 1586468, 1269935, 1105063, 2509726, 2188065, 1784223, 1031919, 1720522, 334251, 471494, 1259835, 2101769, 1715266, 1870320, 1613444, 2088438, 1935058, 1132390, 2900540, 2943717, 2380179, 1737565, 839657, 1398742, 2170606, 1600794, 2211134, 1832708, 1240391, 573544, 802478, 1247457, 2194490, 1151241, 1168936, 1708794, 648244, 829963, 1702955, 1400853, 1443736, 1641736, 1514757, 483701, 263329, 1841564, 1209917, 1161363, 2085483, 1025080, 547244, 411562, 1868964, 1939554, 2259891, 1381464, 1402025, 1051313, 807606, 1585765, 1585717, 2204876, 1441767, 1229979, 982336, 707666, 1775392, 1696073, 2044621, 1543062, 983052, 514496, 467221, 2240816, 1746530, 1934266, 1851396, 1147056, 757858, 391160, 1912714, 1603285, 1354851, 1533435, 1342309, 483990, 472811, 1610560, 827451, 945677, 1414885, 1361158];

		for (var i = 1; i < 366; i++) {
			var now = new Date(base += oneDay);
			date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
			data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
		}

		option = {
			tooltip: {
				trigger: 'axis',
				position: function (pt) {
					return [pt[0], '10%'];
				}
			},
			title: {
				left: 'center',
				text: 'Number of Requests',
			},
			toolbox: {
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: date,
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				max: 4000000,
				axisLabel: {
					rotate: 60
                },
			},
			dataZoom: [{
				type: 'inside',
				start: 0,
				end: 100
			}, {
				start: 0,
				end: 10
			}],
			series: [
				{
					name: 'Data',
					type: 'line',
					symbol: 'none',
					sampling: 'lttb',
					itemStyle: {
						color: '#5D97F6'
					},
					areaStyle: {
						color: '#99BDF9'
					},
					data: data
				}
			]
		};
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}
	}
});