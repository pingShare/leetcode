function dynFib(n) {
    var val = []
    for(var i = 0; i <= n; i++) {
        val[i] = 0
    }
    if (n === 1 || n === 2) {
        return 1
    } else {
        val[1] = 1;
        val[2] = 2;
        for(var i = 3; i <= n; i++) {
            val[i] = val[i-1] + val[i-2]
        }
        return val[n-1]
    }

}
function recurFib(n) {
    if (n < 2) {
        return n;
    } else {
        return recurFib(n-1) + recurFib(n-2)
    }
}

var startTime = new Date().getTime();
console.log(recurFib(30))
var stopTime = new Date().getTime();
console.log('递归：', (stopTime-startTime), 'ms');

startTime = new Date().getTime();
console.log(dynFib(30));
stopTime = new Date().getTime();
console.log('斐哥：', (stopTime-startTime), 'ms');