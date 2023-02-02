
var PI = 3.14;
PI = 42;

//ES5 Global Constants
let PI = 3.14;

//ES2015 Global Constants
const PI = 3.14;


/*
What is the difference between var and let?
    You cannot redeclare using let like you can with var
        You cannot make another variable in the same scope using let with the same name like you can with var
    With let you can use the curly braces to make a block scope variable
    By using var you can access a hoisted variable    

What is the difference between var and const?
    var can redecalare a variable, const cannot reassign or redeclare a variable
    var can add a property on the window object (console is an existing object on the window like the window object - can do window.console or just window.chickens)

What is the difference between let and const?
    const prevents a variable from ever being reassigned or redeclared where as let always you to reassign 

What is hoisting?
    Hoisting is the JS compiler to move the vairable to the top of the scope they are being declared in. Var lets you access the variable name and it's undefined value befor its used. 
    function declarations can be hoisted and invoked before they are defined. 
*/