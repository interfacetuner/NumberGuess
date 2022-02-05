const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  numGuesses: 0,
  smallestNum: 1,
  prevGuesses: [],
  secretNum: null,
  play: function () {
    // generate a random number
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;
    console.log(this.secretNum);
    this.getGuess();

    if (this.numGuesses === this.secretNum) {
      alert(`You got ${this.secretNum}: You got it!`);
    } else if (this.numGuesses !== this.secretNum) {
      alert(`You got ${this.secretNum}: Try again!!`);
    }
    while (this.secretNum === false) {
      this.prevGuesses.push(numGuesses); //not pushing numGuesses to array

      break;
    }
  },

  //cs log game.numGuesses = 0 game.guess undef
  getGuess: function () {
    let guess = 0;
    while (guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(
        prompt(
          `Enter a guess between ${this.smallestNum} and ${this.biggestNum}:   `
        )
      );
    }
  },
};
game.play();
