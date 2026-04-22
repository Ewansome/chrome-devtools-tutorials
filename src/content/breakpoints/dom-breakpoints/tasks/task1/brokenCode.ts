// Somewhere in the code, this is happening:
setTimeout(() => {
  const button = document.querySelector('#submit-btn');
  if (button && Math.random() > 0.5) {
    button.remove(); // Bug: randomly removing button
  }
}, 2000);
