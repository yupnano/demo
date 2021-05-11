var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2691",
        "ok": "2691",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "35720",
        "ok": "35720",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4518",
        "ok": "4518",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2834",
        "ok": "2834",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3907",
        "ok": "3907",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5751",
        "ok": "5757",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9738",
        "ok": "9738",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13977",
        "ok": "13977",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 80,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2572,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21.528",
        "ok": "21.528",
        "ko": "-"
    }
},
contents: {
"req_-----------10d87": {
        type: "REQUEST",
        name: "获取开班沟通列表数据",
path: "获取开班沟通列表数据",
pathFormatted: "req_-----------10d87",
stats: {
    "name": "获取开班沟通列表数据",
    "numberOfRequests": {
        "total": "2691",
        "ok": "2691",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "35720",
        "ok": "35720",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4518",
        "ok": "4518",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2834",
        "ok": "2834",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3907",
        "ok": "3907",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5757",
        "ok": "5751",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9738",
        "ok": "9738",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13977",
        "ok": "13977",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 80,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2572,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21.528",
        "ok": "21.528",
        "ko": "-"
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
