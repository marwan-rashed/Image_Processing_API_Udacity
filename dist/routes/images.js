"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validation_1 = __importDefault(require("../middlewares/validation"));
var router = express_1.default.Router();
router.get('/', validation_1.default, function (req, res) {
    console.log('.............');
    res.status(200).end('Done');
});
exports.default = router;
