/*jslint node: true, vars: true, indent: 4 */
(function (module) {
    "use strict";

    var path = require("path"),
        templates = path.join(__dirname, "templates"),
        pubdir = path.join(__dirname, "public");

    module.exports = {
        "hostname": "mapper.jolira.com",
        "public": pubdir,
        "googleAnalyticsWebPropertyID": "UA-3602945-1",
        "title": "Meta Programming",
        "stylesheets": [
            "css/style.css",
            "css/mapper.css"
        ],
        "metas": [{
                "name": "description",
                "content": "Meta Programming for Serious Applications"
            },
            {
                "viewport" : "width=device-width,user-scalable=no,initial-scale=1"
            }
        ],
        "templateFiles": [
        ],
        "htmlFiles": [
            path.join(templates, "main.html")
        ],
        scripts: [
            "js/libs/modernizr-2.5.2.min.js",
            "js/libs/phonegap-1.4.1.js"
        ]
    };
})(module);