function timeout(time, obj) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(obj);
        }, time);
    });
}

// var promise = new Promise(function(resolve, reject) {
//     if (1) {
//         resolve("Stuff worked!");
//     }
//     else {
//         reject(Error("It broke"));
//     }
// });

timeout(0).then(function(result) {
    console.log("1212");
    return timeout(1000);
}).then(function () {
    console.log('12');
    return timeout(500);
});