emcc addArray.c -o module.js -s EXPORTED_FUNCTIONS="['_addArray']" && echo "" >> module.js && echo "module.exports = Module;" >> module.js
