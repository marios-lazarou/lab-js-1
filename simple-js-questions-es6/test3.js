function showLuckyNumber(doubleIt) {
  const dateNow = new Date();
  const luckyNumber = Math.ceil(Math.random() * 100);
  const winningsText = doubleIt ? 'and wins double!' : 'and wins'
  console.log(`${dateNow} - The lucky number is ${luckyNumber} ${winningsText}`);
}

function firstFunction (toBeShown) {
  const timeInterval = 5000;
  let timer = 0;
  const interval = setInterval(() => {
    this.showLuckyNumber(toBeShown);
    timer += timeInterval;
    if (this.clearInterval(interval, timer)) {
      return;
    }
  }, timeInterval);
};

function secondFunction() {
  const timeInterval = 10000;
  let timer = 0;
  const interval = setInterval(() => {
    this.showLuckyNumber(true);
    timer += timeInterval;
    if (this.clearInterval(interval, timer)) {
      return;
    }
  }, timeInterval);
};

function clearInterval(interval, timer) {
  if ((timer && typeof timer === 'number') && interval) {
    if (timer === 30000 || timer > 30000) {
      clearInterval(interval);
      return true;
    }
  }
  return false;
};