function repeat(s, n) {

    let sb = s;
    for (let i = 1; i < n; i++) {
        s = s + sb;
    }
    return s;
}




function main() {
    console.log(repeat("foo", 4));
}
main();