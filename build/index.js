"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = __importDefault(require("./hello-world"));
const hello_world_2 = require("./hello-world");
// call hello world function
(0, hello_world_1.default)();
// call greet function
(0, hello_world_2.greet)('Joe');
//# sourceMappingURL=index.js.map