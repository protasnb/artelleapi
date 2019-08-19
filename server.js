"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res, next) { res.send('Arc/Artel Architecture API'); });
var port = process.env.PORT || 8090;
app.listen(port, function () { console.log('Server started on port', port); });
