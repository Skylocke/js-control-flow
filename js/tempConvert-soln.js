function F2C(F) {
  return (F-32)*(5/9);
}

F = 212;
C = F2C(F);

console.log(F + " degrees Fahreinheit is " + C + " degrees Celsius.");
