export const GlobalList = [
    'ArrayBuffer',
    'Boolean',
    'DataView',
    'Date',
    'Error',
    'EvalError',
    'Float32Array',
    'Float64Array',
    'GLOBAL',
    'Infinity',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Intl',
    'JSON',
    'Map',
    'Math',
    'NaN',
    'Number',
    'Promise',
    'RangeError',
    'ReferenceError',
    'RegExp',
    'Reflect',
    'Set',
    'Symbol',
    'SyntaxError',
    'String',
    'TypeError',
    'URIError',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'WeakMap',
    'WeakSet',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'eval',
    'escape',
    'global',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'root',
    'unescape',
    'AbortController',
    'AbortSignal',
    'Array',
    'Object',
    'Function',
    'undefined',
    'NaN',
    'Infinity'
];

export function setupGlobalPropertiesFrom(target: any, source: any): void {
    for (const key of GlobalList) {
        if (key in source) {
            const descriptor = Object.getOwnPropertyDescriptor(source, key);
            if (descriptor) {
                Object.defineProperty(target, key, descriptor);
            }
        }
    }
}
