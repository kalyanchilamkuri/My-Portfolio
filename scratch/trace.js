const fs = require('fs');
const Module = require('module');

const pid = process.pid;
const logFile = '/Users/purna/Desktop/newPro_portfolio/scratch/trace_run.log';

// Clear log file if this is the parent process (we can identify it by not having __NEXT_PRIVATE_WORKER in env)
if (!process.env.NEXT_PRIVATE_WORKER) {
  try {
    fs.writeFileSync(logFile, `=== START TRACE parent_pid=${pid} ===\n`);
  } catch (e) {}
}

function logTrace(msg) {
  try {
    fs.appendFileSync(logFile, `[PID:${pid}] ${msg}\n`);
  } catch (e) {}
}

const originalRequire = Module.prototype.require;
Module.prototype.require = function(request) {
  const filename = Module._resolveFilename(request, this);
  if (!filename.includes('node_modules')) {
    logTrace('REQ_PROJECT: ' + request + ' -> ' + filename);
  }
  return originalRequire.apply(this, arguments);
};

const originalReadFile = fs.readFileSync;
fs.readFileSync = function(path, options) {
  logTrace('READ_FILE: ' + path);
  return originalReadFile.apply(this, arguments);
};

logTrace('Preload trace initialized');
