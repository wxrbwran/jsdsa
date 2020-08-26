export function knapSack(
  capacity, // 重量约束
  weights, // 物品重量列表
  values // 物品价值列表
) {
  const n = values.length;
  let load = 0;
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i];
      val += r * weights[i];
      load += weights[i];
    }
  }
  return val;
}
