// to make button working  wrote this javascript using canvas, eventlistener & wrapper
document
        .getElementsByClassName("confetti-button")[0]
        .addEventListener("click", () => {
          let canvas = document.createElement("canvas");
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          let container = document.getElementsByClassName("button-wrapper")[0];
          container.appendChild(canvas);

          let myConfetti = confetti.create(canvas, {
            resize: true,
            useWorker: true,
          });

          myConfetti({
            particleCount:200,
            spread: 100,
            origin: { y: 0.6 },
          }).then(() => container.removeChild(canvas));
        });
