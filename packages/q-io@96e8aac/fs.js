function dampen(e,t){var n=function(){var r=arguments,i=backOffDelay?Q.delay(backOffDelay):Q.resolve();return i.then(function(){return Q.when(e.apply(t,r),function(e){return backOffDelay=Math.max(0,backOffDelay-1),e},function(e){if("EMFILE"===e.code)return backOffDelay=(backOffDelay+1)*backOffFactor,n.apply(null,r);throw e})})};return n}var FS=require("fs"),Q=require("q"),Reader=require("./reader"),Writer=require("./writer"),Common=require("./fs-common"),Mock=require("./fs-mock"),Root=require("./fs-root");Common.update(exports,process.cwd),exports.Mock=Mock,exports.Root=Root;var backOffDelay=0,backOffFactor=1.0001;exports.open=dampen(function(e,t,n,r){"object"==typeof t&&(r=t,t=r.flags,n=r.charset),r=r||{},t=t||"r";var i=t.replace(/b/g,"")||"r",a={flags:i};if("bufferSize"in r&&(a.bufferSize=r.bufferSize),"mode"in r&&(a.mode=r.mode),"begin"in r&&(a.start=r.begin,a.end=r.end-1),t.indexOf("b")>=0){if(n)throw Error("Can't open a binary file with a charset: "+n)}else n=n||"utf-8";if(t.indexOf("w")>=0||t.indexOf("a")>=0){var o=FS.createWriteStream(e+"",a);return Writer(o,n)}var o=FS.createReadStream(e+"",a);return Reader(o,n)}),exports.remove=function(e){e+="";var t=Q.defer();return FS.unlink(e,function(n){n?(n.message="Can't remove "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve()}),t.promise},exports.rename=function(e,t){return e+="",t+="",Q.ninvoke(FS,"rename",e,t).fail(function(n){throw"EXDEV"===n.code&&(n.message="source and target are on different devices: "+n.message,n.crossDevice=!0),n.message="Can't move "+JSON.stringify(e)+" to "+JSON.stringify(t)+" because "+n.message,n})},exports.makeDirectory=function(e,t){e+="";var n=Q.defer();return"string"==typeof t?t=parseInt(t,8):void 0===t&&(t=parseInt("755",8)),FS.mkdir(e,t,function(r){r?("EISDIR"===r.code&&(r.exists=!0,r.isDirectory=!0,r.message="directory already exists: "+r.message),"EEXIST"===r.code&&(r.exists=!0,r.message="file exists at that path: "+r.message),r.message="Can't makeDirectory "+JSON.stringify(e)+" with mode "+t+": "+r.message,n.reject(r)):n.resolve()}),n.promise},exports.removeDirectory=function(e){e+="";var t=Q.defer();return FS.rmdir(e,function(n){n?(n.message="Can't removeDirectory "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve()}),t.promise},exports.list=dampen(function(e){e+="";var t=Q.defer();return FS.readdir(e,function(n,r){return n?(n.message="Can't list "+JSON.stringify(e)+": "+n.message,t.reject(n)):(t.resolve(r),void 0)}),t.promise}),exports.stat=function(e){var t=this;e+="";var n=Q.defer();try{FS.stat(e,function(r,i){r?(r.message="Can't stat "+JSON.stringify(e)+": "+r,n.reject(r)):n.resolve(new t.Stats(i))})}catch(r){n.reject(r)}return n.promise},exports.statLink=function(e){e+="";var t=Q.defer();try{FS.lstat(e,function(n,r){n?(n.message="Can't statLink "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve(r)})}catch(n){t.reject(n)}return t.promise},exports.statFd=function(e){e=Number(e);var t=Q.defer();try{FS.fstat(e,function(n,r){n?(n.message="Can't statFd file descriptor "+JSON.stringify(e)+": "+n.message,t.reject(n)):t.resolve(r)})}catch(n){t.reject(n)}return t.promise},exports.link=function(e,t){e+="",t+="";var n=Q.defer();try{FS.link(e,t,function(r){r?(r.message="Can't link "+JSON.stringify(e)+" to "+JSON.stringify(t)+": "+r.message,n.reject(r)):n.resolve()})}catch(r){n.reject(r)}return n.promise};var linkTypes={file:"file",directory:"dir",junction:"junction"};exports.symbolicLink=function(e,t,n){linkTypes.hasOwnProperty(n)||console.warn(Error('For Windows compatibility, symbolicLink must be called with a type argument "file", "directory", or "junction"')),n=linkTypes[n],e+="",t+="";var r=Q.defer();try{FS.symlink(t,e,n||"file",function(n){n?(n.message="Can't create symbolicLink "+JSON.stringify(e)+" to relative location "+JSON.stringify(t)+": "+n.message,r.reject(n)):r.resolve()})}catch(i){r.reject(i)}return r.promise},exports.chown=function(e,t,n){e+="";var r=Q.defer();try{FS.chown(e,t,n,function(i){i?(i.message="Can't chown (change owner) of "+JSON.stringify(e)+" to user "+JSON.stringify(t)+" and group "+JSON.stringify(n)+": "+i.message,r.reject(i)):r.resolve()})}catch(i){r.reject(i)}return r.promise},exports.chmod=function(e,t){e+="",t+="";var n=Q.defer();try{FS.chmod(e,t,function(r){r?(r.message="Can't chmod (change permissions mode) of "+JSON.stringify(e)+" to (octal number) "+t.toString(8)+": "+r.message,n.reject(r)):n.resolve()})}catch(r){n.reject(r)}return n.promise},exports.canonical=function(e){var t=Q.defer();return FS.realpath(e,function(n,r){n?(n.message="Can't get canonical path of "+JSON.stringify(e)+" by way of C realpath: "+n.message,t.reject(n)):t.resolve(r)}),t.promise},exports.readLink=function(e){var t=Q.defer();return FS.readlink(e,function(e,n){e?(e.message="Can't get link from "+JSON.stringify(n)+" by way of C readlink: "+e.message,t.reject(e)):t.resolve(n)}),t.promise},exports.mock=function(e){return Mock.mock(this,e)};