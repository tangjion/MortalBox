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

function inputText(id,txt) {
    var ele = document.getElementById(id);
    ele.innerHTML = txt;
}

timeout(0).then(function() {
    inputText('row-01','|');
    return timeout(300);
}).then(function() {
    inputText('row-01','t|');
    return timeout(300);
}).then(function () {
    inputText('row-01','th|');
    return timeout(300);
}).then(function () {
    inputText('row-01','thi|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this |');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a |');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a c|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a co|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a cod|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a code|');
    return timeout(300);
}).then(function () {
    inputText('row-01','this a code!|');
    return timeout(300);
});