import minCoinChange from "./min_coin_change";

describe("测试最小硬币找零", () => {
  it("找零", () => {
    const coins = [1, 2, 5, 10, 20, 50, 100];
    const res = minCoinChange(coins, 177);
    console.log(res);
  });
});
