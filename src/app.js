const fs = require('fs')
const path = require('path')
const {dialog} = require('electron').remote

const iter = require('./iter');
const fileOpen = require('./dialog');
const reset = require('./reset');

document.getElementById("btn-readfile").addEventListener("click", fileOpen, false);
document.getElementById("btn-reset").addEventListener("click", reset, false);
document.getElementById("btn-search-id").addEventListener("click", iter, false);
