emcc returnArray.c -o module.js -s EXPORTED_FUNCTIONS="['_returnArray']" && echo "" >> module.js && echo "module.exports = Module;" >> module.js
