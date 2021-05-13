var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30818",
        "ok": "30812",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "107",
        "ok": "107",
        "ko": "60006"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "46981",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "1508",
        "ok": "1497",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "1985",
        "ok": "1809",
        "ko": "2"
    },
    "percentiles1": {
        "total": "781",
        "ok": "780",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "2089",
        "ok": "2087",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "4423",
        "ok": "4416",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "8128",
        "ok": "8087",
        "ko": "60013"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15795,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4545,
        "percentage": 15
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10472,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "250.553",
        "ok": "250.504",
        "ko": "0.049"
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
        "total": "30818",
        "ok": "30812",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "107",
        "ok": "107",
        "ko": "60006"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "46981",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "1508",
        "ok": "1497",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "1985",
        "ok": "1809",
        "ko": "2"
    },
    "percentiles1": {
        "total": "781",
        "ok": "780",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "2089",
        "ok": "2087",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "4423",
        "ok": "4416",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "8128",
        "ok": "8092",
        "ko": "60013"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15795,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4545,
        "percentage": 15
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10472,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "250.553",
        "ok": "250.504",
        "ko": "0.049"
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
