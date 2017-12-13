"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const _1 = require("./");
ava_1.default('basics', t => {
    const client = new _1.default('http://fakeendpoint.com');
    t.true(!!client);
});
