var num1 = 0;
num1++;
console.log(num1);
// 自增

// 求余数
var num1 = 35 % 3;
console.log(num1)

var num2 = 0;
num2--;
console.log(num2)
// 自减
console.log("fff");

var num3 = 10;
var num4 = 10;
console.log(num3++); //输出10
console.log(++num4); //输出11


// 比较运算
console.log(10>20); //不成立
console.log(20===20);  //成立

/*
四、比较运算符
运算符	操作	类型
>	大于	num,num=>bool
>=	大于等于	num,num=>bool
<	小于	num,num=>bool
<=	小于等于	num,num=>bool
==	判断相等	any,any=>bool
!=	判断不等	any,any=>bool
===	判断恒等	any,any=>bool
!==	判断非恒等	any,any=>bool
通过上面的表格我们可以了解到比较运算符的作用和返回值类型，如果比较成立，返回true，如果不成立返回false 
*/ 

// 恒等
// 相等和恒等不同，当两个值的数据类型不相同的时候，
// 他们可能相等，但不会恒等

console.log(10 == "10");
console.log(10 === "10");

/*
五、逻辑运算符
运算符	操作	类型
&&	逻辑与	any,any=>any
!	逻辑非	bool,bool
逻辑运算符进行布尔运算，经常和关系运算符一起配合使用，逻辑运算符将多个关系表达式组合起来组成一个更复杂的表达式。
 */ 

// 逻辑与(&&)
var x = 10;
var y = 20;
console.log(x>30 && y>30);
console.log(x<30 && y>30);
console.log(x<30 && y<30);

// 逻辑或(||)
var x = 10;
var y = 20;
console.log(x>30 || y>30);
console.log(x<30 || y>30);
console.log(x>30 || y<30);

// 逻辑非(!)
var x = true;
var y = false;
console.log(!x);
console.log(!y);

/*
六、赋值运算符
运算符	操作	类型
=	赋值	any,any=>any
+=	加并赋值	any,any=>any
-=	减并赋值	any,any=>any
*=	乘并赋值	any,any=>any
/=	除并赋值	any,any=>any
在JavaScript中，我们已经熟悉了用“=”赋值，其他的赋值如代码所示 
*/ 
var x = 10;
var y = 20;
x += y;  //同x = x + y;
x -+ y;  //同x = x - y;
x *= y;  //同x = x * yl
x /= y;  //同x = x / y;
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);