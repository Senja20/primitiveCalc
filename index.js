// index.js
import fs from "fs";
import loader from "@assemblyscript/loader";

const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/debug.wasm"));
module.exports = wasmModule.exports;