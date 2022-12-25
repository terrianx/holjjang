export function printBet(amount: number) {
  if (amount == 1) {
    return '1 marble';
  } else {
    return amount + ' marbles';
  }
}

export function printGains(isPlayerWin: boolean, minimumBet: number) {
  if (isPlayerWin) {
    if (minimumBet == 1) {
      return 'You win 1 marble from Computer';
    }
    return 'You win ' + minimumBet + ' marbles from Computer';
  } else {
    if (minimumBet == 1) {
      return 'Computer wins 1 marble from you';
    }
    return 'Computer wins ' + minimumBet + ' marbles from you';
  }
}
