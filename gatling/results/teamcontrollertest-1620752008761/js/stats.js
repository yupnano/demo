var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4190",
        "ok": "3439",
        "ko": "751"
    },
    "minResponseTime": {
        "total": "1775",
        "ok": "1775",
        "ko": "6542"
    },
    "maxResponseTime": {
        "total": "60179",
        "ok": "59996",
        "ko": "60179"
    },
    "meanResponseTime": {
        "total": "32267",
        "ok": "26234",
        "ko": "59894"
    },
    "standardDeviation": {
        "total": "16110",
        "ok": "10564",
        "ko": "2678"
    },
    "percentiles1": {
        "total": "26384",
        "ok": "24228",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "43155",
        "ok": "30849",
        "ko": "60035"
    },
    "percentiles3": {
        "total": "60029",
        "ok": "48304",
        "ko": "60112"
    },
    "percentiles4": {
        "total": "60112",
        "ok": "57197",
        "ko": "60176"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3439,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 751,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.025",
        "ok": "21.36",
        "ko": "4.665"
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
        "total": "4190",
        "ok": "3439",
        "ko": "751"
    },
    "minResponseTime": {
        "total": "1775",
        "ok": "1775",
        "ko": "6542"
    },
    "maxResponseTime": {
        "total": "60179",
        "ok": "59996",
        "ko": "60179"
    },
    "meanResponseTime": {
        "total": "32267",
        "ok": "26234",
        "ko": "59894"
    },
    "standardDeviation": {
        "total": "16110",
        "ok": "10564",
        "ko": "2678"
    },
    "percentiles1": {
        "total": "26384",
        "ok": "24228",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "43155",
        "ok": "30849",
        "ko": "60035"
    },
    "percentiles3": {
        "total": "60030",
        "ok": "48304",
        "ko": "60112"
    },
    "percentiles4": {
        "total": "60112",
        "ok": "57197",
        "ko": "60176"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3439,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 751,
        "percentage": 18
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.025",
        "ok": "21.36",
        "ko": "4.665"
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
