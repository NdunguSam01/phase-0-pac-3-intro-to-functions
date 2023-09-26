// Follow along with the examples here
function helloWorld()
{
    console.log("Hello World");
}

helloWorld(); //Function call

const greet=(firstName)=>//First name acts as the function's parameter
{
    console.log(`Hello ${firstName}`);
}
greet("Samuel");//Samuel is passed onto the function as an argument during its invocation

const add=(x, y)=>
{
    return x + y;
}

console.log("Kshs. " +add(3000,2000));