/*
第04章：条件语句
1.程序执行顺序有三种：按顺序执行、按条件执行、循环执行，之前我们课程中使用的示例代码都是按顺序执行的，
本章我们讲解按条件执行的程序。
2.按条件执行的语句有if语句和switch语句，除此之外还有一个按条件执行运算符，本章也会讲解。
*/ 
// if(true)
    // console.log("执行代码")；

    // 在上面的代码中,if括号内的值如果是true,则执行第二行代码，如果是false，则不执行第二行代码。
    var num1 = 10;
    var num2 = 20;
    if(num1<num2)
    console.log("num1小于num2");

    var num1 = 10;
    var num2 = 20;
    if(num1<num2){
        console.log("判断num1是否小于num2");
        console.log("num1小于num2");
    }

    var num1 = 10;
    var num2 = 20;
    if(num1<num2){
        //num1如果小于num2,表达式为true，输出if语句后的代码；
        //num1如果大于num2,表达式为false,输出else语句后的内容
        console.log("num1小于num2");
    }else{
        console.log("num1大于num2");
    }

    // 如果需要判断的条件是三种情况，我们可以使用if...else if...语句
    var num1 = 10;
    var num2 = 20;
    if(num1<num2){
        console.log("num1小于num2");
    }else if(num1>num2){
        console.log("num1大于num2");
    }else if(num1===num2){
        console.log("num1恒等num2");
    }

    // 通过控制运算符来实现数学运算
    var nam1 = 10;
    var num2 = 20;
    var sign = "+";  //通过修改操作符，输出不同的结果
    var result = 0;  //result用来存储计算的结果，现在设置一个初始值0
    if(sign === "+"){
        result = num1 + num2;
        console.log(result)
    }else if(sign === "-"){
        result = num1 - num2;
        console.log(result);
    }else if(sign === "*"){
        result = num1 * num2;
        console.log(result);
    }else if(sign === "/"){
        result = num1 / num2;
        console.log(result);
    }else{
        console.log("请输入正确的运算符");
    }
    

// 二、switch语句
// if语句在程序执行的过程中创建一条分支，并且可以使用if...else if...
// 语句来处理多条分支，然而当所有的分支都依赖于同一个表达式的值时，
// 重复计算多条if语句中的条件是非常浪费时间的做法，switch语句正合适处理这种情况.

var num = 0;
switch (num){
    case 0:
        console.log("num的值是零");  //当num===0，执行
        break;
    case 1:
        console.log("num的值是一");  //当num===1，执行
        break;
    case 2:
        console.log("num的值是二");  //当num===2，执行
        break;
    case 3:
        console.log("num的值是三");  //当num===3，执行
        break;
    case 4:
        console.log("num的值是四");  //当num===4，执行
        break;
    default:
        console.log("其他");  //当num的值不是1，2，3，4.执行
}

// 三、条件运算符
// 表达式?第一个值:第二个值
// 如果表达式为true,表达式的返回值是第一个值，如果表达式为false,那么表达式的返回值是第二个值

var num1 = 10;
var num2 = 20;
var result = num1 < num2 ? 100 : 200;
//如果num1小于等于num2，条件表达式的值为100，若num1大于num2时，条件表达式的值为200；
console.log(result);
