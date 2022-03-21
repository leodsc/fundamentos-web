const swapImage = () => {
  const image = document.querySelector("img");
  let i = 0;
  image.addEventListener("click", (e) => {
    e.target.setAttribute("src", "./assets/images" + i + ".jpeg");
    if (i == 6) i = 0;
    else i++;
  });
};

const changeTitleColor = () => {
  const title = document.querySelector("h2");
  setInterval(() => {
    let red = randomColor();
    let green = randomColor();
    let blue = randomColor();
    title.style.color = `rgb(${red}, ${green}, ${blue})`;
  }, 500);
};

const randomColor = () => {
  return (Math.random() * 255).toFixed(0);
};

swapImage();
changeTitleColor();
