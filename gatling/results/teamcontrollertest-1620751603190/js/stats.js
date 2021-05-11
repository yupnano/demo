var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2527",
        "ok": "2527",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "942",
        "ok": "942",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "53562",
        "ok": "53562",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4822",
        "ok": "4822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2571",
        "ok": "2571",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4402",
        "ok": "4402",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5695",
        "ok": "5695",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8537",
        "ok": "8537",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13146",
        "ok": "13146",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2524,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.379",
        "ok": "20.379",
        "ko": "-"
    }
},
contents: {
"req_---------------df01e": {
        type: "REQUEST",
        name: "课程数据及回访，课程累计数据",
path: "课程数据及回访，课程累计数据",
pathFormatted: "req_---------------df01e",
stats: {
    "name": "课程数据及回访，课程累计数据",
    "numberOfRequests": {
        "total": "2527",
        "ok": "2527",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "942",
        "ok": "942",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "53562",
        "ok": "53562",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4822",
        "ok": "4822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2571",
        "ok": "2571",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4402",
        "ok": "4402",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5695",
        "ok": "5695",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8537",
        "ok": "8537",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13146",
        "ok": "13146",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2524,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.379",
        "ok": "20.379",
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
