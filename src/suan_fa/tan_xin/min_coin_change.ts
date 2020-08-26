export default function minCoinChange(coins: number[], val: number) {
  const changes = [];
  let total = 0;
  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];
    while (total + coin <= val) {
      changes.push(coin);
      total += coin;
    }
  }
  return changes;
}
