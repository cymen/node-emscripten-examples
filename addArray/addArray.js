var Module = require('./module');

module.exports = function(array) {
    var data,
        dataPtr,
        fn,
        dataHeap,
        size;

    fn = Module.cwrap('addArray', 'number', ['number', 'number']);

    data = new Uint8Array(array);
    size = data.length * data.BYTES_PER_ELEMENT;

    dataPtr = Module._malloc(size);

    dataHeap = new Uint8Array(Module.HEAPU8.buffer, dataPtr, size);
    dataHeap.set(data);

    result = fn(dataHeap.byteOffset, data.length);

    Module._free(dataHeap.byteOffset);

    return result;
};
