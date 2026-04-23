function heavyComputation() {
  let result = 0;
  for (let i = 0; i < 5_000_000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  return result;
}
