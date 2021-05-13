var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32694",
        "ok": "32693",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "21",
        "ko": "60007"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "45345",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "1394",
        "ok": "1392",
        "ko": "60007"
    },
    "standardDeviation": {
        "total": "1559",
        "ok": "1525",
        "ko": "0"
    },
    "percentiles1": {
        "total": "825",
        "ok": "825",
        "ko": "60007"
    },
    "percentiles2": {
        "total": "2120",
        "ok": "2120",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "3734",
        "ok": "3733",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "6159",
        "ok": "6152",
        "ko": "60007"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15486,
        "percentage": 47
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6516,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10691,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "265.805",
        "ok": "265.797",
        "ko": "0.008"
    }
},
contents: {
"req_----lesson------55fe2": {
        type: "REQUEST",
        name: "获取指定lesson下的老师带班的学生续报数据",
path: "获取指定lesson下的老师带班的学生续报数据",
pathFormatted: "req_----lesson------55fe2",
stats: {
    "name": "获取指定lesson下的老师带班的学生续报数据",
    "numberOfRequests": {
        "total": "32694",
        "ok": "32693",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "21",
        "ko": "60007"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "45345",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "1394",
        "ok": "1392",
        "ko": "60007"
    },
    "standardDeviation": {
        "total": "1559",
        "ok": "1525",
        "ko": "0"
    },
    "percentiles1": {
        "total": "825",
        "ok": "825",
        "ko": "60007"
    },
    "percentiles2": {
        "total": "2120",
        "ok": "2120",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "3734",
        "ok": "3733",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "6159",
        "ok": "6152",
        "ko": "60007"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15486,
        "percentage": 47
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6516,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10691,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "265.805",
        "ok": "265.797",
        "ko": "0.008"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
