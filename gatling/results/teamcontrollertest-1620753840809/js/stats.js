var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4245",
        "ok": "4245",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41103",
        "ok": "41103",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2854",
        "ok": "2854",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1805",
        "ok": "1805",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2387",
        "ok": "2387",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3594",
        "ok": "3594",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5857",
        "ok": "5857",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8931",
        "ok": "8931",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 110,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 266,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3869,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30.106",
        "ok": "30.106",
        "ko": "-"
    }
},
contents: {
"req_----------7f0c2": {
        type: "REQUEST",
        name: "列表页公共信息接口",
path: "列表页公共信息接口",
pathFormatted: "req_----------7f0c2",
stats: {
    "name": "列表页公共信息接口",
    "numberOfRequests": {
        "total": "4245",
        "ok": "4245",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41103",
        "ok": "41103",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2854",
        "ok": "2854",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1805",
        "ok": "1805",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2387",
        "ok": "2387",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3594",
        "ok": "3594",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5857",
        "ok": "5857",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8931",
        "ok": "8931",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 110,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 266,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3869,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30.106",
        "ok": "30.106",
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
