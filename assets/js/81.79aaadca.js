(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{468:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("🚀 CodeceptJS 3 is in beta now. Install it:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i codeceptjs@3.0.0-beta.3\n")])])]),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/Codeception/CodeceptJS/blob/codeceptjs-v3.0/CHANGELOG.md#300-beta",target:"_blank",rel:"noopener noreferrer"}},[t._v("COMPLETE CHANGELOG"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Codeception/CodeceptJS/tree/codeceptjs-v3.0/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("After installing a new version, run "),s("code",[t._v("codecept3-upgrade")]),t._v(" which is described below:")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("CodeceptJS 3.0 is a new version of CodeceptJS with some breaking changes included.\nYou should update your project following this guide to ensure that everything works correctly.")]),t._v(" "),s("h3",{attrs:{id:"_1️⃣-syntax-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-syntax-change"}},[t._v("#")]),t._v(" 1️⃣ Syntax Change")]),t._v(" "),s("p",[t._v("CodeceptJS 3.0 introduced a new syntax for declaring tests, instead of:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loginPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("we use a new way of passing arguments into a test, via destruction:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scenario")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loginPage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This works similarly to "),s("code",[t._v("inject()")]),t._v(" command. This change was done to unify accessing "),s("a",{attrs:{href:"https://codecept.io/pageobjects/#dependency-injection",target:"_blank",rel:"noopener noreferrer"}},[t._v("dependency injection container"),s("OutboundLink")],1),t._v(", and to provide better TypeScript support.")]),t._v(" "),s("blockquote",[s("p",[t._v("If you use BDD-style project with Gherkin, no changes needed for this step.")])]),t._v(" "),s("p",[t._v("To upgrade your project, you don't need to change manually all your tests.")]),t._v(" "),s("p",[t._v("💪 "),s("strong",[t._v("Use "),s("a",{attrs:{href:"https://www.npmjs.com/package/codecept3-upgrade",target:"_blank",rel:"noopener noreferrer"}},[t._v("codecept3-upgrade tool"),s("OutboundLink")],1),t._v(" to perform the migration")]),t._v(". Use it carefully, as it updates your current code.")]),t._v(" "),s("p",[t._v("To upgrade your codebase, commit all your changes, and switch to a new branch.\nRun upgrade script (even without installing) for a directory where you have your tests:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npx codecept3-upgrade tests\n")])])]),s("p",[t._v("Review the changes in Git Diff and try to execute tests using CodeceptJS 3.0")]),t._v(" "),s("h3",{attrs:{id:"_2️⃣-grabbers-signature-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-grabbers-signature-change"}},[t._v("#")]),t._v(" 2️⃣ Grabbers signature change")]),t._v(" "),s("p",[t._v("There were confusion and inconsistency across grab* methods. What they will return if multiple elements are found? A single element or an array? This was the problem as the format was dependent on a page content.")]),t._v(" "),s("p",[t._v("In 3.0 we decided to make all current grab* methods to return a single value only. While we add new methods grab**FromAll that return an array.")]),t._v(" "),s("p",[t._v("For instance, "),s("code",[t._v("grabTextFrom")]),t._v(" will always return a single text value, while "),s("code",[t._v("grabTextFromAll")]),t._v(" will return an array of values:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grabTextFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'john'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grabTextFromAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'john'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'claudia'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bill'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Please update parts in your project where you rely on grab* methods to return an array.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Single Value")]),t._v(" "),s("th",[t._v("Multiple Values")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("✋"),s("code",[t._v("grabTextFrom")])]),t._v(" "),s("td",[t._v("🙌 "),s("code",[t._v("grabTextFromAll")])])]),t._v(" "),s("tr",[s("td",[t._v("✋"),s("code",[t._v("grabValueFrom")])]),t._v(" "),s("td",[t._v("🙌 "),s("code",[t._v("grabValueFromAll")])])]),t._v(" "),s("tr",[s("td",[t._v("✋ "),s("code",[t._v("grabAttributeFrom")])]),t._v(" "),s("td",[t._v("🙌"),s("code",[t._v("grabAttributeFromAll")])])]),t._v(" "),s("tr",[s("td",[t._v("✋ "),s("code",[t._v("grabHTMLFrom")])]),t._v(" "),s("td",[t._v("🙌 "),s("code",[t._v("grabHTMLFromAll")])])]),t._v(" "),s("tr",[s("td",[t._v("✋ "),s("code",[t._v("grabCssPropertyFrom")])]),t._v(" "),s("td",[t._v("🙌 "),s("code",[t._v("grabCssPropertyFromAll")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("Single-value "),s("code",[t._v("grab*From")]),t._v(" will throw error when no data was matched, while "),s("code",[t._v("grab*FromAll")]),t._v(" will return array.")])]),t._v(" "),s("h3",{attrs:{id:"_3️⃣-bootstrap-teardown-changed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3️⃣-bootstrap-teardown-changed"}},[t._v("#")]),t._v(" 3️⃣ Bootstrap / Teardown Changed")]),t._v(" "),s("p",[s("code",[t._v("async/await")]),t._v(" paradigm changed the way we write asynchronous code in NodeJS.\nHowever, bootstrap functions were created to use old-style methods of passing "),s("code",[t._v("done")]),t._v(" callback inside.")]),t._v(" "),s("p",[t._v("In 3.0 we decided to completely change the way async bootstrap is performed and replace all it with async/await functions:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// before")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bootstrap")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bootstrap")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Passing a string as bootstrap function (to require a function from external file) is also not supported:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// before")]),t._v("\nbootstrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./server_start.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// after")]),t._v("\nbootstrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./server_start.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("The same rules are applied to teardown, bootstrapAll, teardownAll.")]),t._v(" "),s("h3",{attrs:{id:"_4️⃣-locator-detection-heuristic-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4️⃣-locator-detection-heuristic-change"}},[t._v("#")]),t._v(" 4️⃣ Locator Detection Heuristic Change")]),t._v(" "),s("p",[t._v("In 3.0 we added a new rule to auto-detect CSS locator. If a locator starts with "),s("code",[t._v("[")]),t._v(" parser will use it as a CSS locator, without trying to match value by text.")]),t._v(" "),s("ul",[s("li",[t._v("Previous behavior: I.click('[user]') - will try to search for a link with "),s("code",[t._v("[user]")]),t._v(" text, if no found - take "),s("code",[t._v("[user]")]),t._v(" as CSS locator")]),t._v(" "),s("li",[t._v("Current behavior: I.click('[user]') - will check only for CSS locator "),s("code",[t._v("[user]")])])]),t._v(" "),s("h3",{attrs:{id:"_5️⃣-improved-parallel-execution-with-workers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5️⃣-improved-parallel-execution-with-workers"}},[t._v("#")]),t._v(" 5️⃣ Improved Parallel Execution with Workers")]),t._v(" "),s("p",[t._v("CodeceptJS has two parallel execution modes:")]),t._v(" "),s("ul",[s("li",[t._v("classical "),s("code",[t._v("run-multiple")]),t._v(" which spawns independent CodeceptJS processes on system level.")]),t._v(" "),s("li",[t._v("threaded "),s("code",[t._v("run-workers")]),t._v(" which uses NodeJS workers instead of subprocesses.")])]),t._v(" "),s("p",[t._v("Workers are faster, they can communicate with parent thread. Unfortunately, "),s("code",[t._v("run-workers")]),t._v(" was not as efficient as "),s("code",[t._v("run-multiple")]),t._v(" because there was no way of declaring sophisticated configs for parallel execution. For instance, running tests in 4 threads in 2 browsers could not be set.")]),t._v(" "),s("p",[t._v("We updated workers API to make them as flexible as possible. You don't even need to put complex logic into config! You can create your own parallel runner and customize it to match your expectations:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't initialize workers in constructor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" workers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workerConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// split tests by suites in 2 groups")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" testGroups "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createGroupsOfSuites")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browsers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firefox'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" configs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" browsers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("browser")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" helpers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    WebDriver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" browser "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" configs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" groupOfTests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("spawn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    worker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    worker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nworkers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/Codeception/CodeceptJS/blob/codeceptjs-v3.0/docs/parallel.md#custom-parallel-execution",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more about how you can create a parallel runner"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("code",[t._v("run-multiple")]),t._v(" will still work but it is considered deprecated and won't be supported.")]),t._v(" "),s("h3",{attrs:{id:"webdriverio-helper-removed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webdriverio-helper-removed"}},[t._v("#")]),t._v(" WebDriverIO helper removed")]),t._v(" "),s("p",[t._v("WebDriverIO helper supported webdriverio v4 library, which is not maintained anymore. It should be easy to switch to WebDriver helper which supports webdriverio v6.")])])}),[],!1,null,null,null);a.default=n.exports}}]);