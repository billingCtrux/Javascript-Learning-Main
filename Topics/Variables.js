//There are three types of variables and these are

// 1 CONST is the first varisble type 
const accountName = 'deadpool2059'; //once the constant is declared it can't be changed as some things should not be changed

accountName = 'pooldead5920'; //This is not allowed

// but we can redeclare the const in a diffrent block for example
{
  const accountName = 'pooldead5920';
  console.log('This is inside the block = 'accountName);
}

console.log('This is outside the block = 'accountName);
