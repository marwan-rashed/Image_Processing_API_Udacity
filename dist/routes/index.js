"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./images"));
var router = express_1.default.Router();
router.use('/api/images', images_1.default);
router.get('/', function (req, res) {
    res.end('<h1>Welcome to Image_Processing_API</h1>');
});
exports.default = router;
