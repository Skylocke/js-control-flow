function pluralizer(thing, count) {
  if (count < 0) {
    return "Negatives? Really, now."
  } else if (count == 0) {
    return "No " + thing + "s. Why did you even put this through a pluralizer?"
  } else if (count == 1) {
    return "One " + thing + ". Why did you even put this through a pluralizer?"
  } else {
    return count + " " + thing + "s."
  }
}
console.log(pluralizer('cat', 5));
console.log(pluralizer('cat', 2));
console.log(pluralizer('cat', 1));
console.log(pluralizer('cat', 0));
console.log(pluralizer('cat', -4));
