function nums(n){
    const result = [];
    for (let i = 2; result.length < n; i++) {
        let check = false;
        for( let count = 0; count < i; count++){
            if (i % result[count] === 0){
                check = true;
                break;
            };
        }
        if (check === false) {
            result.push(i)
        };
    };
    return result;

};

console.time();
console.log(nums(process.argv[2]));
console.timeEnd();


