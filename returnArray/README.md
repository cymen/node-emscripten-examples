# returnArray(array)
C function that operates on an array returning a new array that contains twice the
original value. So `[1, 2, 3]` each value would be doubled to `[2, 4, 6]`. This
does not mutate the input array (as `Array.sort` does).

## build

    $ ./build.sh

## try it

    $ node
    > var returnArray = require('./returnArray');
    undefined
    > var values = [1, 2, 3];
    undefined
    > returnArray(values);
    [ 2, 4, 6 ]
    > values
    [ 1, 2, 3 ]

or:

  node try.js
