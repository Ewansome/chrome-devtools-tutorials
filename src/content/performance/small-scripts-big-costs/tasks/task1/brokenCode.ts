// Layout thrashing pattern:
for (let i = 0; i < boxes.length; i++) {
  const height = boxes[i].offsetHeight; // READ
  boxes[i].style.height = (height + 2) + 'px'; // WRITE
  // ^ This cycle forces layout on every iteration!
}
