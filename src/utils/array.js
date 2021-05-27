"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(collection, indexA, indexB) {
    const minIndex = Math.min(indexA, indexB, collection.length);
    const maxIndex = Math.max(indexA, indexB, 0);
    return [
        ...collection.slice(0, minIndex),
        collection[maxIndex],
        ...collection.slice(minIndex + 1, maxIndex),
        collection[minIndex],
        ...collection.slice(maxIndex + 1)
    ];
}
exports.swap = swap;
function replaceIn(collection, predicate, replacer) {
    return collection.map(v => (predicate(v) ? replacer(v) : v));
}
exports.replaceIn = replaceIn;
function replaceInOrAppend(collection, predicate, replacer) {
    let replaced = false;
    const result = collection.map(v => {
        if (predicate(v)) {
            replaced = true;
            return replacer(v);
        }
        else {
            return v;
        }
    });
    if (!replaced) {
        result.push(replacer());
    }
    return result;
}
exports.replaceInOrAppend = replaceInOrAppend;
