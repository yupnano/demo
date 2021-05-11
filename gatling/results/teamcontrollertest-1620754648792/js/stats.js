var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3328",
        "ok": "3327",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "601",
        "ok": "601",
        "ko": "60011"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "50667",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "3657",
        "ok": "3640",
        "ko": "60011"
    },
    "standardDeviation": {
        "total": "2580",
        "ok": "2389",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3028",
        "ok": "3027",
        "ko": "60011"
    },
    "percentiles2": {
        "total": "4594",
        "ok": "4595",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "7470",
        "ok": "7469",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "10765",
        "ok": "10717",
        "ko": "60011"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 83,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3233,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25.6",
        "ok": "25.592",
        "ko": "0.008"
    }
},
contents: {
"req_--------------dc1e9": {
        type: "REQUEST",
        name: "课程数据及回访，单次课数据",
path: "课程数据及回访，单次课数据",
pathFormatted: "req_--------------dc1e9",
stats: {
    "name": "课程数据及回访，单次课数据",
    "numberOfRequests": {
        "total": "3328",
        "ok": "3327",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "601",
        "ok": "601",
        "ko": "60011"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "50667",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "3657",
        "ok": "3640",
        "ko": "60011"
    },
    "standardDeviation": {
        "total": "2580",
        "ok": "2389",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3028",
        "ok": "3027",
        "ko": "60011"
    },
    "percentiles2": {
        "total": "4596",
        "ok": "4593",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "7470",
        "ok": "7469",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "10765",
        "ok": "10717",
        "ko": "60011"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 83,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3233,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25.6",
        "ok": "25.592",
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
