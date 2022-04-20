const countries = [
    "ALBANIA",
    "BOLIVIA",
    "CANADA",
    "DENMARK",
    "ETHIOPIA",
    "FINLAND",
    "GERMANY",
    "HUNGARY",
    "IRELAND",
    "JAPAN",
    "KENYA",
];


function createArrayOfArrays(arr) {
    return arr.map((elem) => [
        elem,
        Array.from(elem).splice(0, 3).join(""),
        elem.length,
    ]);
}

console.log(createArrayOfArrays(countries));