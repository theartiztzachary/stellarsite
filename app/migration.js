//Workerdata.path is the file path passed into runworker.ts via the jsMigrationToTsMigrationPath variable

const path = require('path');
const { workerData } = require('worker_threads');
require('ts-node').register();
require(path.resolve(__dirname, workerData.path));