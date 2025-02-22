const values = [4, 6, 3, 9, 10, 4, 6];

const operationsMenu = [

    (value) => {
        let accumulate = 0;

        for (value of values) {
            console.log(accumulate);
            accumulate += value;
        };

        return accumulate;
    },

    (value) => {
        let accumulate = 1;

        for (value of values) {
            console.log(accumulate);
            accumulate *= value;
        };

        return accumulate;
    },

    (value) => {
        let accumulate = 100;

        for (value of values) {
            console.log(accumulate);
            accumulate += value;
        };

        return accumulate;
    }
];

console.log(`${operationsMenu[0](values)} \n`);
console.log(`${operationsMenu[1](values)} \n`);
console.log(`${operationsMenu[2](values)} \n`);
