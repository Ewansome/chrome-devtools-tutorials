const goToStep = (next) => {
  // Expensive synchronous operation
  const start = Date.now();
  while (Date.now() - start < 150) {}
  setStep(next);
};
