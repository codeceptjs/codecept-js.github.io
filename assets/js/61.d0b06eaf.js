(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{449:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"reporters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reporters"}},[t._v("#")]),t._v(" Reporters")]),t._v(" "),e("h2",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" Cli")]),t._v(" "),e("p",[t._v("By default CodeceptJS provides cli reporter with console output.\nTest names and failures will be printed to screen.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("GitHub --\n ✓ search "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 2577ms\n ✓ signin "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 2170ms\n ✖ register "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 1306ms\n\n-- FAILURES:\n\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" GitHub: register:\n      Field q not found by name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("CSS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("XPath\n\n  Scenario Steps:\n\n  - I.fillField"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"q"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" at examples/github_test.js:29:7\n  - I.fillField"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user[password]"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user@user.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" at examples/github_test.js:28:7\n  - I.fillField"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user[email]"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user@user.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" at examples/github_test.js:27:7\n  - I.fillField"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user[login]"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" at examples/github_test.js:26:7\n\n\n\n  Run with --verbose flag to see NodeJS stacktrace\n\n")])])]),e("p",[t._v("npx codeceptjs run --stepsutput add "),e("code",[t._v("--steps")]),t._v(" option to "),e("code",[t._v("run")]),t._v(" command:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code")])]),e("p",[t._v("npx codeceptjs run --steps")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\nOutput:\n\n```sh\nGitHub --\n search\n • I am on page "https://github.com"\n • I am on page "https://github.com/search"\n • I fill field "Search GitHub", "CodeceptJS"\n • I press key "Enter"\n • I see "Codeception/CodeceptJS", "a"\n ✓ OK in 2681ms\n\n signin\n • I am on page "https://github.com"\n • I click "Sign in"\n • I see "Sign in to GitHub"\n • I fill field "Username or email address", "something@totest.com"\n • I fill field "Password", "123456"\n • I click "Sign in"\n • I see "Incorrect username or password.", ".flash-error"\n ✓ OK in 2252ms\n\n register\n • I am on page "https://github.com"\n   Within .js-signup-form:\n   • I fill field "user[login]", "User"\n   • I fill field "user[email]", "user@user.com"\n   • I fill field "user[password]", "user@user.com"\n   • I fill field "q", "aaa"\n ✖ FAILED in 1260ms\n')])])]),e("p",[t._v("To get additional information about test execution use "),e("code",[t._v("--debug")]),t._v(" option.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codeceptjs run --debug\n")])])]),e("p",[t._v("This will show execution steps\nas well as notices from test runner. To get even more information with more technical details like error stack traces,\nand global promises, or events use "),e("code",[t._v("--verbose")]),t._v(" mode.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codeceptjs run --verbose\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("GitHub --\n register\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting recording promises\n   Emitted "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" test.before\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" WebDriver._before\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Queued "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" hook WebDriver._before"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Queued "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" amOnPage: https://github.com\n   Emitted "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" step.before "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I am on page "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n • I am on page "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com"')]),t._v("\n   Emitted "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" step.after "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I am on page "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   Emitted "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" test.start "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("Please use verbose output when reporting issues to GitHub.")]),t._v(" "),e("h3",{attrs:{id:"dry-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dry-run"}},[t._v("#")]),t._v(" Dry Run")]),t._v(" "),e("p",[t._v("There is a way to list all tests and their steps without actually executing them. Execute tests in "),e("code",[t._v("dry-run")]),t._v(" mode to see all available tests:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codeceptjs dry-run\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Tests from /home/davert/projects/codeceptjs/examples:\n\nBusiness rules --\n  ☐ do something\nGoogle --\n  ☐ test @123\nGitHub -- /home/davert/projects/codeceptjs/examples/github_test.js\n  ☐ Visit Home Page @retry\n  ☐ search @grop\n  ☐ signin @normal @important @slow\n  ☐ signin2\n  ☐ register\n\n  Total: 3 suites | 7 tests\n\n--- DRY MODE: No tests were executed ---\n")])])]),e("p",[t._v("Pass "),e("code",[t._v("--steps")]),t._v(" or "),e("code",[t._v("--debug")]),t._v(" option as in "),e("code",[t._v("run")]),t._v(" command to also get steps and substeps to be printed. In this mode "),e("strong",[t._v("tests will be executed")]),t._v(" but all helpers and plugins disabled, so no real actions will be performed.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codecepjs dry-run --debug\n")])])]),e("blockquote",[e("p",[t._v("ℹ If you use custom JavaScript code inside tests, or rely on values from "),e("code",[t._v("grab*")]),t._v(" commands, dry-run may produce error output.")])]),t._v(" "),e("h2",{attrs:{id:"allure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allure"}},[t._v("#")]),t._v(" Allure")]),t._v(" "),e("blockquote",[e("p",[t._v("ℹ  We recommend using Allure reports on CI. Allure is one of the best open-source reporters designed to collect and show test reports in nicest way.")])]),t._v(" "),e("p",[e("a",{attrs:{href:"http://allure.qatools.ru/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Allure reporter"),e("OutboundLink")],1),t._v(" is a tool to store and display test reports.\nIt provides nice web UI which contains all important information on test execution.\nCodeceptJS has built-in support for Allure reports. Inside reports you will have all steps, substeps and screenshots.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/220264/45676511-8e052800-bb3a-11e8-8cbb-db5f73de2add.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("▶ Allure is a standalone tool. Please refer to "),e("a",{attrs:{href:"https://docs.qameta.io/allure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Allure documentation"),e("OutboundLink")],1),t._v(" to learn more about using Allure reports.")])]),t._v(" "),e("p",[t._v("Allure requires "),e("strong",[t._v("Java 8")]),t._v(" to work. Then Allure can be installed via NPM:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install -g allure-commandline --save-dev\n")])])]),e("p",[t._v("Add "),e("RouterLink",{attrs:{to:"/plugins/#allure"}},[t._v("Allure plugin")]),t._v(" in config under "),e("code",[t._v("plugins")]),t._v(" section.")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    allure"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Run tests with allure plugin enabled:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codeceptjs run --plugins allure\n")])])]),e("p",[t._v("(optionally) To enable allure plugin permanently include "),e("code",[t._v('"enabled": true')]),t._v(" into plugin config:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"allure"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Launch Allure server and see the report like on a screenshot above:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("allure serve output\n")])])]),e("p",[t._v("Allure reporter aggregates data from other plugins like "),e("RouterLink",{attrs:{to:"/plugins/#stepByStepReport"}},[e("em",[t._v("stepByStepReport")])]),t._v(" and "),e("RouterLink",{attrs:{to:"/plugins/#screenshotOnFail"}},[e("em",[t._v("screenshotOnFail")])])],1),t._v(" "),e("p",[t._v("Allure reports can also be generated for "),e("code",[t._v("dry-run")]),t._v(" command. So you can get the first report with no tests actually being executed. Enable allure plugin in dry-run options, and pass "),e("code",[t._v("--debug")]),t._v(" option to print all tests on screen.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npx codeceptjs dry-run --debug -p allure\n")])])]),e("h2",{attrs:{id:"reportportal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reportportal"}},[t._v("#")]),t._v(" ReportPortal")]),t._v(" "),e("p",[t._v("Allure is a great reportin tool, however, if you are running tests on different machines it is hard to merge its XML result files to build a proper report. So, for enterprise grade reporting we recommend using "),e("a",{attrs:{href:"https://reportportal.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReportPortal"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://camo.githubusercontent.com/6550c0365f1d0ce1e29c53f1860b12957d1fc529/68747470733a2f2f692e6962622e636f2f516d353247306e2f53637265656e73686f742d323031392d30342d31312d61742d31352d35372d34302e706e67",alt:""}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://reportportal.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReportPortal"),e("OutboundLink")],1),t._v(" is open-source self-hosted service for aggregating test execution reports.\nThink of it as Kibana but for test reports.")]),t._v(" "),e("p",[t._v("Use official "),e("a",{attrs:{href:"https://github.com/reportportal/agent-js-codecept/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeceptJS Agent for ReportPortal"),e("OutboundLink")],1),t._v(" to start publishing your test results.")]),t._v(" "),e("h2",{attrs:{id:"xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xml"}},[t._v("#")]),t._v(" XML")]),t._v(" "),e("p",[t._v("Use default xunit reporter of Mocha to print xml reports. Provide "),e("code",[t._v("--reporter xunit")]),t._v(" to get the report to screen.\nIt is recommended to use more powerful "),e("a",{attrs:{href:"https://www.npmjs.com/package/mocha-junit-reporter",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("mocha-junit-reporter")]),e("OutboundLink")],1),t._v(" package\nto get better support for Jenkins CI.")]),t._v(" "),e("p",[t._v("Install it via NPM (locally or globally, depending on CodeceptJS installation type):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i mocha-junit-reporter\n")])])]),e("p",[t._v("Additional configuration should be added to "),e("code",[t._v("codecept.conf.js")]),t._v(" to print xml report to "),e("code",[t._v("output")]),t._v(" directory:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mocha"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reporterOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mochaFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output/result.xml"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("Execute CodeceptJS with JUnit reporter:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run --reporter mocha-junit-reporter\n")])])]),e("p",[t._v("Result will be located at "),e("code",[t._v("output/result.xml")]),t._v(" file.")]),t._v(" "),e("h2",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" Html")]),t._v(" "),e("p",[t._v("Best HTML reports could be produced with "),e("a",{attrs:{href:"https://www.npmjs.com/package/mochawesome",target:"_blank",rel:"noopener noreferrer"}},[t._v("mochawesome"),e("OutboundLink")],1),t._v(" reporter.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/mochawesome.png",alt:"mochawesome"}})]),t._v(" "),e("p",[t._v("Install it via NPM:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i mochawesome\n")])])]),e("p",[t._v("If you get an error like this")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mochawesome"')]),t._v(" reporter not found\n\ninvalid reporter "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mochawesome"')]),t._v("\n")])])]),e("p",[t._v("Make sure to have mocha installed or install it:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i mocha -D\n")])])]),e("p",[t._v("Configure it to use "),e("code",[t._v("output")]),t._v(" directory to print HTML reports:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mocha"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reporterOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reportDir"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("Execute CodeceptJS with HTML reporter:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("codeceptjs run --reporter mochawesome\n")])])]),e("p",[t._v("Result will be located at "),e("code",[t._v("output/index.html")]),t._v(" file.")]),t._v(" "),e("h3",{attrs:{id:"advanced-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[t._v("#")]),t._v(" Advanced usage")]),t._v(" "),e("p",[t._v("Want to have screenshots for failed tests?\nThen add Mochawesome helper to your config:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"helpers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Mochawesome"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uniqueScreenshotNames"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("Then tests with failure will have screenshots.")]),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("This helper should be configured in codecept.json")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("uniqueScreenshotNames")]),t._v(" (optional, default: false) - option to prevent screenshot override if you have scenarios with the same name in different suites. This option should be the same as in common helper.")]),t._v(" "),e("li",[e("code",[t._v("disableScreenshots")]),t._v(" (optional, default: false)  - don't save screenshot on failure. This option should be the same as in common helper.")])]),t._v(" "),e("p",[t._v("Also if you will add Mochawesome helper, then you will able to add custom context in report:")]),t._v(" "),e("h4",{attrs:{id:"addmochawesomecontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addmochawesomecontext"}},[t._v("#")]),t._v(" addMochawesomeContext")]),t._v(" "),e("p",[t._v("Adds context to executed test in HTML report:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMochawesomeContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'simple string'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMochawesomeContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.url.com/pathname'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMochawesomeContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.url.com/screenshot-maybe.jpg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMochawesomeContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'expected output'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                           a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                           b"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                           c"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d'")]),t._v("\n                         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h5",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("context")]),t._v("  string, url, path to screenshot, object. See "),e("a",{attrs:{href:"https://www.npmjs.com/package/mochawesome#adding-test-context",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"multi-reports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-reports"}},[t._v("#")]),t._v(" Multi Reports")]),t._v(" "),e("p",[t._v("Want to use several reporters in the same time? Try to use "),e("a",{attrs:{href:"https://www.npmjs.com/package/mocha-multi",target:"_blank",rel:"noopener noreferrer"}},[t._v("mocha-multi"),e("OutboundLink")],1),t._v(" reporter")]),t._v(" "),e("p",[t._v("Install it via NPM:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i mocha-multi\n")])])]),e("p",[t._v("Configure mocha-multi with reports that you want:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mocha"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reporterOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"codeceptjs-cli-reporter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stdout"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"verbose"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"steps"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mochawesome"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stdout"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./output/console.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reportDir"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./output"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reportFilename"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"report"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mocha-junit-reporter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stdout"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./output/console.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mochaFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./output/result.xml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attachments"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//add screenshot for a failed test")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Execute CodeceptJS with mocha-multi reporter:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("npx codeceptjs run --reporter mocha-multi\n")])])]),e("p",[t._v("This will give you cli with steps in console and HTML report in "),e("code",[t._v("output")]),t._v(" directory.")])])}),[],!1,null,null,null);s.default=r.exports}}]);