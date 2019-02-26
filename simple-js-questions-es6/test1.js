let name = 'Rick';

function greetMe() {
  console.log(`Hi ${name}!`);
}

name = 'Morty';

greetMe();

/*
 * 1) The result of this exercise will be => 'Hi Morty!'.
 * The reason is because the 'greedMe()' function execution, is executed as the last statement of this block of code.  Therefore, 
 * the value of the 'let' variable 'name' changes/updates before the 'greedMe()' function fires.
 * Also, the 'name' variable stated in the 'console.log' in line 4 has access on the 'let' variable 'name' stated in line 1, because
 * 'let' variabls block scoped related.
 */