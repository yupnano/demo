var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32914",
        "ok": "32873",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60063",
        "ok": "59424",
        "ko": "60063"
    },
    "meanResponseTime": {
        "total": "3550",
        "ok": "3479",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "4378",
        "ok": "3901",
        "ko": "11"
    },
    "percentiles1": {
        "total": "2301",
        "ok": "2294",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "4697",
        "ok": "4689",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "8831",
        "ok": "8765",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "19611",
        "ok": "18135",
        "ko": "60060"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2996,
        "percentage": 9
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5598,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24279,
        "percentage": 74
    },
    "group4": {
        "name": "failed",
        "count": 41,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "267.593",
        "ok": "267.26",
        "ko": "0.333"
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
        "total": "32914",
        "ok": "32873",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60063",
        "ok": "59424",
        "ko": "60063"
    },
    "meanResponseTime": {
        "total": "3550",
        "ok": "3479",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "4378",
        "ok": "3901",
        "ko": "11"
    },
    "percentiles1": {
        "total": "2301",
        "ok": "2294",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "4697",
        "ok": "4689",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "8831",
        "ok": "8765",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "19611",
        "ok": "18135",
        "ko": "60060"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2996,
        "percentage": 9
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5598,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24279,
        "percentage": 74
    },
    "group4": {
        "name": "failed",
        "count": 41,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "267.593",
        "ok": "267.26",
        "ko": "0.333"
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
