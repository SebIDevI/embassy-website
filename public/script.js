const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const frameCount = 161;

const currentFrame = (index) => `./public/peleu/${(index + 1).toString()}.png`;
const images = [];
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

console.log(images);
