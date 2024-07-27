let arr = [1, [2, 3], 4, [[123, [23]], 123], 21]

function flatten(arr) {
    function _flatten(arr, result) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                _flatten(arr[i], result)
            } else {
                result.push(arr[i])
            }
        }
    }


    const result = []
    _flatten(arr, result)
    return result
}
console.log(flatten(arr))