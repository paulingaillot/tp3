function repeat(s, n) {

    for (let i = 0; i < n; i++) {
        s = s + s;
    }
    return s;
}

function main() {

    console.log(repeat("test", 2));

}
main();