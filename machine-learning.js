<html align="center">
<body>

<canvas id="myCanvas" width="300" style="border:3px solid grey"></canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let xMax = canvas.height = canvas.width;
let yMax = xMax;
ctx.transform(1, 0, 0, -1, -20, xMax)

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,];

ctx.fillStyle = "red";
for (let i = 0; i < xArray.length-1; i++) {
  let x = xArray[i] * xMax/150;
  let y = yArray[i] * yMax/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 6, 10, 0, 0, Math.PI * 2);
  ctx.fill();
}
</script>

</body>
</html>
