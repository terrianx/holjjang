export function smartBet(defaultMarbles: number, availableMarbles: number) {
  // bet 1
  if (availableMarbles == 1) {
    return 1;
  // bet 1 or 2
  } else if (availableMarbles <= 5) {
    return Math.ceil(Math.random() * 2);
  // bet 3 - default marbles amount - 2, leave two for safety
  } else if (availableMarbles <= defaultMarbles) {
    return 3 + Math.ceil(Math.random() * (defaultMarbles - availableMarbles));
  // bet only as much as needed with one or more variance
  } else {
    return (defaultMarbles * 2) - availableMarbles - 1 + Math.ceil(Math.random());
  }
}
