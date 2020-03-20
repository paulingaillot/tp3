function repeat(s, n) {

    let sb = s;
    for (let i = 1; i < n; i++) {
        s = s + sb;
    }
    return s;
}

function truncate(s, n) {

    s = s.substring(0, n - 3) + "...";
    return s;

}

function isPalindrome(s) {

    let s1 = s.split('').reverse().join('');
    if (s == s1) return true;
    else return false;

}

function swapCase(s) {

    for (let i = 0;)

}