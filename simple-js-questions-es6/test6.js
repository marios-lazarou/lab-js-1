function duplicate(array) {
    return array && Array.isArray(array) && array.length > 0 ?
        array.concat(Array.from(array)) :
        'Error';
}

duplicate([1, 2, 3]);