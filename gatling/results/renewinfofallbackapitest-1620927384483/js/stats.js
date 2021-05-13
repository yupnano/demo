var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23996",
        "ok": "23995",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "1026"
    },
    "maxResponseTime": {
        "total": "4045",
        "ok": "4045",
        "ko": "1026"
    },
    "meanResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "1026"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "0"
    },
    "percentiles1": {
        "total": "38",
        "ok": "38",
        "ko": "1026"
    },
    "percentiles2": {
        "total": "43",
        "ok": "43",
        "ko": "1026"
    },
    "percentiles3": {
        "total": "52",
        "ok": "53",
        "ko": "1026"
    },
    "percentiles4": {
        "total": "511",
        "ok": "510",
        "ko": "1026"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23827,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 54,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 114,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "196.689",
        "ok": "196.68",
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
        "total": "23996",
        "ok": "23995",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "1026"
    },
    "maxResponseTime": {
        "total": "4045",
        "ok": "4045",
        "ko": "1026"
    },
    "meanResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "1026"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "152",
        "ko": "0"
    },
    "percentiles1": {
        "total": "38",
        "ok": "38",
        "ko": "1026"
    },
    "percentiles2": {
        "total": "43",
        "ok": "43",
        "ko": "1026"
    },
    "percentiles3": {
        "total": "53",
        "ok": "53",
        "ko": "1026"
    },
    "percentiles4": {
        "total": "511",
        "ok": "510",
        "ko": "1026"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23827,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 54,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 114,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "196.689",
        "ok": "196.68",
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
