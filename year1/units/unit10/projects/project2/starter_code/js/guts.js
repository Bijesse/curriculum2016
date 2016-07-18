// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y)
{
	return x/y;
}

function multiply(x,y)
{
	return x*y;
}

function subtract(x,y)
{
	return x-y;
}

function add(x,y)
{
	return x+y;
}

function power(x,y)
{
	return Math.pow(x,y);
}

function square_root(x)
{
	return Math.sqrt(x);
}

function logBase10(x)
{
	return Math.log(x) / Math.LN10;
}

function generateRandomNumber()
{
	return Math.floor((Math.random() * 1000) + 1);
}
