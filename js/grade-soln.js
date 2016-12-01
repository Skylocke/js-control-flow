function grader(score) {
  switch(true){
    case score < 0:
      return "you did something wrong";
    case score < 60:
      return "F";
    case score < 70:
      return "D";
    case score < 80:
      return "C";
    case score < 90:
      return "B";
    case score < 100:
      return "A";
    case score >= 100:
      return "A+";
    default:
      return "you should enter a number into the paranthesis set"
    }
}

var score = Math.random()*100;
console.log(grader(score));
