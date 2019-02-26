/* 
 * 1) The problem here is that we are returning the content of the 'getSumAsync' function, which is a promise 
 * without unwrapping the promise's content. Since the promise has not being resolved or rejected, its status remains
 * as pending.  The way to solve this problem is to use the 'then()' function upon recieving the promise in order to
 * get the result of the calculation (or error in case one occurs), and therefor handle it appropriatelly - print it out.
 */

getSumAsync = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 3000);
  });
}

getProdAsync = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 2000);
  });
}


start = () => {
  return new Promise((resolve, reject) => {
    getSumAsync(3, 5).then((result) => {
      return result &&
        typeof result === 'number' ?
        resolve(result) :
        reject();
    });
    getProdAsync(5, 5).then((result) => {
      return result &&
        typeof result === 'number' ?
        resolve(result) :
        reject();
    });
  }).then(
    (response) => {
      console.log('The sum was: ', response);
      return response;
    },
    () => {
      return 'Error';
    }).catch((exception) => {
    return exception;
  });
}


start();