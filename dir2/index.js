var data1 = {
    'a': 1,
    'b': 2
}

var beforeData = data1;

var myData = data1;

delete myData.a;

console.log(beforeData);
console.log(myData);
