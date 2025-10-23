function openLetter() {
      // เปิด flap
      document.querySelector('.flap').style.transform = "rotateX(45deg)";

      // เปิดข้อความ
      setTimeout(() => {
        document.getElementById('loveMessage').style.display = "block";
        document.getElementById('bgMusic').play();
        createFloatingEmojis();
      }, 600);
    }

    function createFloatingEmojis() {
      const emojis = ["❤️","🌹","💕","🌸"];
      for(let i=0; i<20; i++) {
        let emoji = document.createElement("div");
        emoji.classList.add("floating");
        emoji.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        emoji.style.left = Math.random()*window.innerWidth + "px";
        emoji.style.top = (window.innerHeight - 50) + "px";
        emoji.style.fontSize = (20 + Math.random()*20) + "px";
        document.body.appendChild(emoji);

        setTimeout(() => {
          emoji.remove();
        }, 4000);
      }
    }