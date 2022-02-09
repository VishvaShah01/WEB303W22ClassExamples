// $(function () {

// });
var a;
var b;
var c = { property: "Something", numbervalue: 1 };

function step1() {
    // console.log("step 1 ran");
    return "this" + step2();
}
function step2() {
    a = [1, 2, 3, 4];
    // console.assert(a.length > 0, "array a STILL has no value");
    b = a[100];
    // debugger;
    // ILLEGAL
    // console.log("got here", b);
    return " is less awesome";
}

try {
    console.log("trying to run some code");
    var message = step1();
    console.log("successfully ran those functions");
}
catch (exception) {
    console.error("something went wrong, info as follows: ", exception);
}
finally {
    console.log("This is going to run no matter what");
}
// console.log("a is: ", a, " and b is: ", b, " and c is ", c, " and c if I force it to be a string is: " + c);
console.group("examples of messages")
console.info(message);
console.log(message);
console.warn(message);
console.error(message);
console.groupEnd();

// console.table(c);

// console.log("the console error didn't halt the code");