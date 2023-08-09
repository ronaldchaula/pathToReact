# Intro

-JavaScript is a scripting language that now works for both server and front end world
It works with both paradigms whicha re functional and object oriented but most people use the functional paradigm of the language
It borrows the influence from languages like C,C++,Smalltalk

JavaScript is based around prototyping type of inheritence for most of its components

JavaScript is the current name, back in the days it used to be called LiveScript or MochaScript, but JavaScript was so popular by that time and they prefered to pigback on the fame of Java which was the most popular language by that time.

AJAX was introduced by microsoft in JScript and later adopted into ECMASCRIPT standard
Macromedia/Adobe Flash was introduced by ActiveScript a version of js used by adobe
ES4 used Strong types
ES3 introduced standardization
ES3.1 went found its way into today's JS which uses weak types
CoffeeScript removed Java Influence and translated into JavaScript
TypeScripts reinforces Java/c# influence and also translates to JS re introduce use of string types like in ES4 but also uses OOP but compiles down to JS/ES

With this came by many libraries and engines for different uses
with Google Chrome V8 Engine, came through the first use of JS outside of the browser, by introducing NodeJs which is server based, it is based on events and non blocking codesome of the libraries that were popular are JQuery and Angular JS currently we can think of the React,Vue and Svelte

From ES6 new ideas like Promises,let,const,arrow function, async/await was introduced in ES7 and new operators will keep emerging in ES NEXT

JS is not the most logical language in the world but its the only one that you need to know if you want to do anything in the browser

# Syntax

There are some similarities between JS and Java, for example
- Statements are terminated with a semicolon
- code blocks are inside curly braces
- comments are either multiline with forward slah asteristic two times then forward slash
- strings are written in either double quotes or single quote
- functions are natively written using the function keyword followed by name of the function in camelCase and parenthesis and codeblock body where the code will be written inside it
- code verification is enabled using the strict mode directive ('use strict) with use of the use strict the syntax rules have to be obeyed or errors will be thrown

# Variables

There are many ways to declare variables in JS
-var is visible inside an entire function, if var is declared globally its declaration is happening first before anything this is called hoisting, that means if you assign a value before the declaration it works. The browser mantains the global scope, hence the var keyword is part of the global object of the browser. It works only with the global scoped variables

- Let is visible only inside the block where it is declared, it is not hoisted, it is not part of the global object of the browser, it is not visible outside of the block where it is declared

- Hoisting does not occur inside a function block,it only occurs in the global scope, hence you can not use a variable that is not declared inside a function block, and cannot double declare with let and const but you wont get an error with var if you double declare and assign a value to the variable that is inside a a function block

- const defines constants when the const is used u cant change the value of the variable, it is not hoisted, it is not part of the global object of the browser, it is not visible outside of the block where it is declared. Const is not immutable, it is only the reference that is immutable, if you have an object and you declare it as a const you can change the properties of the object but you cant change the object itself.  Const is not a constant, it is a read only reference to a value, it is not hoisted, it is not part of the global object of the browser, it is not visible outside of the block where it is declared

# Type Conversions
There are two groups of types
- Primitive types: string, number,bigint,boolean,symbol,undefined,null
- Complex types are objects,arrays,functions

- If the variable is not defined it has a value fo undefined,
- null is an empty value
- varibale types can change because js is not strongly typed language hence a variable can have any value in it
- big int is declared inside a function called BigInt(number)
- boolean has only two types, which are true and false
- any number is of number types
- Symbol are declared insid the symbol("string") function and assign it to the variable

-Complex types can also be assigned to variables by just using the function keyword and parenthesis and code block terminated by a semicolon

- object can also be asigned to variables using the new keyword and function that acts like the constructor

- instanceof compares two values and there types
- typeof checks the data type of the variable
- you can assign a code block to a variable

# Type coercion
- incase of arithment operations JS will attempt the convert to number
- incase of concatenation operation javascript will convert everything else into string
- converts to boolean incase of relational or equality operations
- when a boolean is operated with a number it converted into a number and an operation is done, true means 1 and false means 0
- when a string is added with a number then concatenation si performed
- everything is that is not a zero is true and everything that is a zero is false hence if you not anything that is not false it is then turned to false or true if its not a zero.

# Note type coercion is a reason for many bugs

# Explicit type conversion
- toString() converts the given value to string using the dot operator on the variable name
var.toString() or just pass the string variable into the String() function and assign the returned value to the variable name or you could use it as an object
newString = new String(oldString);
- parseInt() converts the value to integer
- parseFloat() converts value to float

with parse methods you just pass the values than need conversion and collect the returned type
- Number() converts the value to a number
Numbe is a class hence can be used as a method with return type of can be used as a constructor to create the NUmber object

any method with to is attached to the old var to create the new var

- toFixed() chooses decimal points before converting to the string and rounding happen
- toPrecision() calculate the number of items in the list
- toString() converts number value to string primitive how it is implemented depend what type is returned if it is a primitive or its an object
- Boolen() is constructor method converts values to boolean primitive
- NaN is a number