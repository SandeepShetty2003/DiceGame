function rollDice() {
  // Generate random numbers
  const p1 = Math.floor(Math.random() * 6) + 1;
  const p2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.getElementById('dice1').src = `https://upload.wikimedia.org/wikipedia/commons/${getDicePath(p1)}`;
document.getElementById('dice2').src = `https://upload.wikimedia.org/wikipedia/commons/${getDicePath(p2)}`;

function getDicePath(num) {
  const paths = {
    1: "1/1b/Alea_1.png",
    2: "5/5f/Alea_2.png",
    3: "b/b1/Alea_3.png",
    4: "f/fd/Alea_4.png",
    5: "0/08/Alea_5.png",
    6: "2/2c/Alea_6.png"
  };
  return paths[num];
}

}