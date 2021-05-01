
function before_test() {
    let result = '';
    if (a) {
        if (!b) {
            result = 'c';
        }
    } else {
        result = 'a'
    }
    result += 'b';
    return result;
}


function after_test() {
    let result = '';
    if (!a) {
        result = 'a';
        result += 'b';
        return;
    }
    if (!b) {
        result = 'c';
    }
    result += 'b';
    return result;
}