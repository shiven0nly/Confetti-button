 @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Montserrat:wght@400;700&display=swap");
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #bcedf0 10%, #43b1f0, #0ff);
}

 /* Wrapper around the button */
.button-wrapper {
  position: relative;
  z-index: 1;
}

/* confetti canvas */
canvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}


/* Style for the button */
.confetti-button {
  padding: 15px 30px;
  font-family: 'Inter';
  font-weight: 700;
  background: #02bc94;
  color:white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  width: 15vw;
  height: 4vw;
  box-shadow: 0 4px 15px rgba(225, 123, 255, 0.3);
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}

.confetti-button:hover {
  background-color: #1da88a;
  background-image: linear-gradient(to right, #02bc94, rgb(125, 197, 125));
  transform: scale(1.02);
  transition: 0.4s ease-in-out;
}



.button-wrapper {
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 4px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-wrapper canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.button-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.button-bg::before,
.button-bg::after {
  content: "";
  position: absolute;
  background-image: conic-gradient(red, pink, blue, green, yellow, red);
  height: 4vw;
  width: 15vw;
  border-radius: 25px;
  z-index: -1;
  padding: 1px;
}

.button-bg::before {
  filter: blur(8px);
  opacity: 1;
}




