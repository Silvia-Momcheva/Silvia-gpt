"use strict";
(() => {
var exports = {};
exports.id = 466;
exports.ids = [466];
exports.modules = {

/***/ 3118:
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ 9400:
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
        const response = await openai.createImage({
            prompt: `A wet on wet oil painting of ${req.body.prompt} by Bob Ross.`,
            n: 1,
            size: "512x512"
        });
        res.status(200).json({
            text: response.data.data[0].url
        });
    } else {
        res.status(200).json({
            text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg"
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
var __webpack_exports__ = (__webpack_exec__(9400));
module.exports = __webpack_exports__;

})();