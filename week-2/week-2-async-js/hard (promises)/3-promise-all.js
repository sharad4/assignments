/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolve after: ' + t * 1000 + ' ms');
        }, t * 1000)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolve after: ' + t * 1000 + ' ms');
        }, t * 1000)
    })
}

function wait3(t) {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolve after: ' + t * 1000 + ' ms');
        }, t * 1000)
    })

}

function calculateTime(t1, t2, t3) {
    const start = Date.now();

    return new Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((results) => {
        const end = Date.now();
        const timeTaken = end - start;

        console.log("Results: ", results);
        console.log('Total time taken: ' + timeTaken + ' ms');
    }) 
}

calculateTime(2, 3, 5).then((message) => {
    console.log(message);
})

module.exports = calculateTime;
