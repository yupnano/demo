var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2712",
        "ok": "2690",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "547",
        "ok": "547",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59766",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "9182",
        "ok": "8767",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "8499",
        "ok": "7178",
        "ko": "2"
    },
    "percentiles1": {
        "total": "7068",
        "ok": "7033",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "10789",
        "ok": "10681",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "22620",
        "ok": "21268",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "56141",
        "ok": "39525",
        "ko": "60011"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2627,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 22,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "18.449",
        "ok": "18.299",
        "ko": "0.15"
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
        "total": "2712",
        "ok": "2690",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "547",
        "ok": "547",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59766",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "9182",
        "ok": "8767",
        "ko": "60006"
    },
    "standardDeviation": {
        "total": "8499",
        "ok": "7178",
        "ko": "2"
    },
    "percentiles1": {
        "total": "7068",
        "ok": "7033",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "10789",
        "ok": "10681",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "22620",
        "ok": "21268",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "56141",
        "ok": "39525",
        "ko": "60011"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2627,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 22,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "18.449",
        "ok": "18.299",
        "ko": "0.15"
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
