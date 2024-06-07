// JavaScript Code

let text = document.querySelector(".text"); //Selecting the qery to modify the class and css easily

let string = text.textContent; //getting the text content

let arr = string.split("");

text.innerHTML = "";

arr.forEach((char) => {
  let spanTag = `<span class="split-char">${char}</span>`;

  text.insertAdjacentHTML("beforeend", spanTag);
});

const huha = () => {
  const generateRainbowColor = () => {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  };

  const root = document.documentElement;
  root.style.setProperty("--rainbow-color", generateRainbowColor());
};

const rid = setInterval(huha, 1000);

//ager puro take copy kore kichu change jkore css er root e add kore dile hote pare ("Ther New Idea Can be Executed")
