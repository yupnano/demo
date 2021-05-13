var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33350",
        "ok": "33350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22813",
        "ok": "22813",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "951",
        "ok": "951",
        "ko": "-"
    },
    "percentiles1": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "876",
        "ok": "876",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2837",
        "ok": "2837",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3897",
        "ok": "3897",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23470,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3693,
        "percentage": 11
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6187,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "273.361",
        "ok": "273.361",
        "ko": "-"
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
        "total": "33350",
        "ok": "33350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22813",
        "ok": "22813",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "951",
        "ok": "951",
        "ko": "-"
    },
    "percentiles1": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "876",
        "ok": "876",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2837",
        "ok": "2837",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3897",
        "ok": "3897",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23470,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3693,
        "percentage": 11
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6187,
        "percentage": 19
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "273.361",
        "ok": "273.361",
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
