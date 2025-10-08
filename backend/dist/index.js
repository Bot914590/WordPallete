"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok' }));
});
server.listen(PORT, () => {
    // Simple startup log
    console.log(`Backend server listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map