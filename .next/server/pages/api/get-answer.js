"use strict";
(() => {
var exports = {};
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 3118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 7001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { Configuration , OpenAIApi  } = __webpack_require__(3118);
const configuration = new Configuration({
    apiKey: process.env.OPENAI
});
const openai = new OpenAIApi(configuration);
async function handler(req, res) {
    if (typeof req.body.prompt === "string") {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: req.body.prompt,
            temperature: 0,
            max_tokens: 1000
        });
        res.status(200).json({
            text: response.data.choices[0].text
        });
    } else {
        res.status(200).json({
            text: "Invalid prompt provided."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7001));
module.exports = __webpack_exports__;

})();