const prompt = require('prompt-sync')();

class Team {
  constructor(scores) {
    this.scores = scores;
  }

  calculateAverageScore() {
    let  sum = 0;
    for (const score of this.scores) {
      sum += score;
    }
    return sum / this.scores.length;
  }

  calculateMinimumScore() {
    return Math.min(...this.scores);
  }

  calculateMaximumScore() {
    return Math.max(...this.scores);
  }
}

function main() {
  const scores = [];

  const n = parseInt(prompt("Enter the number of team members: "));
  for (let i = 0; i < n; i++) {
    const score = parseInt(prompt(`Enter the score for team member ${i + 1}: `));
    scores.push(score);
  }

  const team = new Team(scores);
  const averageScore = team.calculateAverageScore();
  const minimumScore = team.calculateMinimumScore();
  const maximumScore = team.calculateMaximumScore();

  console.log(`Average score: ${averageScore}`);
  console.log(`Minimum score: ${minimumScore}`);
  console.log(`Maximum score: ${maximumScore}`);
}

main();

  
    
    
    
    