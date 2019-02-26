let name = 'Rick';

function greetMe(name) {
  console.log(`Hi ${this.name}!`);
}

greetMe('George');

/*
 * 1) The result of this exercise will be => 'Hi !'.
 * The reason is because the 'this' keyword in the 'console.log' statement in line 4, will search for globally
 * accessible variables with 'name' signature, such as 'var' variables.  Since we do not have such a variable
 * no name will be printed (let variable name is not accessible by 'this' keyword, in this case).
 */