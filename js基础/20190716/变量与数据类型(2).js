
// 五、四则运算


        // 在四则运算中，需要特别注意的，乘法在代码中用的是“*”，除法在代码中用的是“/”。我们将运算的结果分别赋值给了四个变量，并在控制台输出,示例代码如下（demo05.html）。
        var num1 = 10 + 20;
        var num2 = 50 - 30;
        var num3 = 5 * 30;
        var num4 = 50 / 2;
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);
        // 我们可以直接用数字做四则运算，也可以将数字赋值给变量，再对变量进行运算操作，得到的结果和上一个案例相同，示例代码如下
        var num5 = 50;
        var num6 = 30;
        var result1 = num6 + num5;
        var result2 = num6 - num5;
        var result3 = num6 * num5;
        var result4 = num6 / num5;
        console.log(result1)
        console.log(result2)
        console.log(result3)
        console.log(result4)


        // 六、字符串链接

        
        // 又用到了“+”运算符，但是和之前不同，之前“+”左右两边是数值，可以通过“+”计算数值的结果，这个例子“+”两边是字符串，那么将会将两个字符串连接，然后赋值给str3,示例代码如下
        var str1 = "hello";
        var str2 = "world";
        var str3 = str1 + str2;
        console.log(str3);