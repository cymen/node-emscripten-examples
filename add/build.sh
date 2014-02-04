emcc add.c -o add.js -s EXPORTED_FUNCTIONS="['_add']" && echo "" >> add.js && echo "module.exports = _add;" >> add.js
