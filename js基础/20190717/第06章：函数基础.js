// 第07章：函数基础
// 一、函数的基本概念
// 函数是一个可执行的语句块，定义的时候不执行，调用的时候执行，使用"函数名()"的形式可以调用函数，语法如下所示：

function fun(){
    console.log("hello");
}
fun();
fun();

// 二、传递参数
//下面编写一个函数sum,输出10和20两个数之和，示例代码如下

function sum(){
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    console.log(result);
}
sum();


// 下面一个简单的例子演示函数如何传递参数

function fun(str){
    console.log("hello"+ str);
}
fun("world");

// 函数可以传递多个参数，用逗号间隔，代码如下

function sum(num1,num2){
    console.log(num1 + num2);
}
sum(10,20);
// 当我们调用函数的时候，实参和形参是一一对应的，10对应的是num1,20对应的是num2,函数执行后会在控制台输出10和20的加和。

// 编写一个函数，它有一个正整数参数n，当我们调用函数时，函数会输出包括n在内，1~n所有正整数的加和

function sum(n){
    var sum = 0;
    for (var i = 0;i<=n;i++){
        sum += i;
    }
    console.log(sum);
}
sum(100);
sum(567);
// 编写一个函数，它有一个正整数参数n，当我们调用函数时，函数会输出包括n在内，1~n所有正整数的加和


// 三、函数的返回值
// 在函数中，我们可以通过return关键字指定一个返回值，函数有了return，当函数被调用的时候就可以把调用的结果赋值给另一个变量了

function fun1(){

}
function fun2(){
    return "hello world";
}
var str1 = fun1();
var str2 = fun2();
console.log(str1);
console.log(str2);
// 在上面的例子中，函数fun1没有返回值，所有将fun1调用的结果赋值给str1,str1的值为undefined，函数fun2有返回值，返回值是"hello fun"，所以当fun2被调用后，将函数运行的结果赋值给str2,str2的值就是"hello fun"

function count(num1,sign,num2){
    var result = 0;
    switch(sign){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("请输入正确的操作符");
    }
    return result;
}
console.log(count(10,"-",20));

var cat = {
    name:"喵喵",
    age:2
}
console.log(cat["name"]);