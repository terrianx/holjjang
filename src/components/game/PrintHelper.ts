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
      return 'You win 1 marble 😃';
    }
    return 'You win ' + minimumBet + ' marbles 😃';
  } else {
    if (minimumBet == 1) {
      return 'You lost 1 marble 😖';
    }
    return 'You lost ' + minimumBet + ' marbles 😖';
  }
}
