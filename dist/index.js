"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var PORT = 5000;
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(PORT, function () {
    console.log("Server is running on PORT ".concat(PORT, " ..."));
});
exports.default = app;
