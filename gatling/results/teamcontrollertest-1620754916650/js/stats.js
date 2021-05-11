var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5313",
        "ok": "5307",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "598",
        "ok": "598",
        "ko": "60004"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "55471",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "4608",
        "ok": "4545",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "4309",
        "ok": "3887",
        "ko": "1"
    },
    "percentiles1": {
        "total": "3610",
        "ok": "3605",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "5465",
        "ok": "5455",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "10334",
        "ok": "10251",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "21605",
        "ok": "19863",
        "ko": "60008"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 62,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5226,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39.649",
        "ok": "39.604",
        "ko": "0.045"
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
        "total": "5313",
        "ok": "5307",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "598",
        "ok": "598",
        "ko": "60004"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "55471",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "4608",
        "ok": "4545",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "4309",
        "ok": "3887",
        "ko": "1"
    },
    "percentiles1": {
        "total": "3610",
        "ok": "3605",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "5465",
        "ok": "5455",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "10334",
        "ok": "10251",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "21605",
        "ok": "19863",
        "ko": "60008"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 62,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5226,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39.649",
        "ok": "39.604",
        "ko": "0.045"
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
