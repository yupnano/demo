var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4913",
        "ok": "4912",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "442",
        "ok": "442",
        "ko": "60008"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "28209",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "2458",
        "ok": "2446",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "1677",
        "ok": "1462",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2019",
        "ok": "2019",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "3136",
        "ok": "3135",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "5098",
        "ok": "5097",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "7240",
        "ok": "7212",
        "ko": "60008"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 79,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 628,
        "percentage": 13
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4205,
        "percentage": 86
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39.304",
        "ok": "39.296",
        "ko": "0.008"
    }
},
contents: {
"req_-------c7e0d": {
        type: "REQUEST",
        name: "续报沟通数据",
path: "续报沟通数据",
pathFormatted: "req_-------c7e0d",
stats: {
    "name": "续报沟通数据",
    "numberOfRequests": {
        "total": "4913",
        "ok": "4912",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "442",
        "ok": "442",
        "ko": "60008"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "28209",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "2458",
        "ok": "2446",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "1677",
        "ok": "1462",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2019",
        "ok": "2019",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "3136",
        "ok": "3135",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "5098",
        "ok": "5097",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "7240",
        "ok": "7212",
        "ko": "60008"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 79,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 628,
        "percentage": 13
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4205,
        "percentage": 86
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39.304",
        "ok": "39.296",
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
