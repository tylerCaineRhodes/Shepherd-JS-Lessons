//use these script attacks to assault the juniors' chatterbox client. Blame one of the seniors for it. Mwuahahaha!

// Right-Click Counter instead of Title
<script>
  var clickCounter = 0;
    $("body").on("contextmenu", (event) => {
    event.preventDefault();
        console.log('Right click!');
        clickCounter++;
        $("#main h1").html(`Right-Click Counter: ${clickCounter}`);
    });
</script>


  // Fade in and out all content boxes
  <script>
    let brightnessTracker = 100;
    let goingDown = true;
    let fadeStarted = false;
    let faderSpeed = 10;
    const fadeMeDaddy = () => {
        if(goingDown) {
            if(brightnessTracker <= 0) {
      goingDown = false;
            } else {
      brightnessTracker -= faderSpeed;
                $("body").css("filter", `brightness(${brightnessTracker}%)`);
            }
        } else {
            if(brightnessTracker >= 100) {
      goingDown = true;
            } else {
      brightnessTracker += faderSpeed;
                $("body").css("filter", `brightness(${brightnessTracker}%)`);
            }
        }
    };
    $("body").on("click", () => {
        if(!fadeStarted) {
      fadeStarted = true;
            setInterval(() => {
      fadeMeDaddy()
    }, 100);
        } else {
      faderSpeed += 5;
        }
    });
</script>


  // Comic Sans and Watermelon Colors
  <script>
    setTimeout(() => {
      $("body").css("font-family", "Comic Sans MS");
        $("body").css("color", "magenta");
        $("body").css("background-color", "lime");
    }, 8000);
</script>

  <script>
    setTimeout(() => {
      $(".chat").css("background-color", "#b57d7d");
        $(".chat").css("margin-bottom", "0");
        $("#chats").css("transition-duration", "2s");
    }, 2000)
</script>

  <script>
    setTimeout(() => {
      $("#chats").prepend("<h1>get Cory'd</h1>");
        $("#chats").css("display", "contents");
    }, 2000);
</script>

  <script>
    setInterval(() => {
      $("#chats").prepend("<h1>get Cory'd</h1>");
        $("#chats").css("display", "contents");
    }, 2000);
</script>


  //spam message attack
  <script>
    setTimeout(() => {
      let message = {
      username: 'purge-atory',
      text: 'I am your hero, be gone with XSS attacks, be free my children',
      roomname: Rooms.selected || 'lobby',
    };

    for(let i = 0; i < 100; i++){
      Parse.create(message, (data) => {
        _.extend(message, data);
        Messages.add(message, MessagesView.render);
      })
    }
}, 2000);
</script>


//run in solution code's app.initialize to purge messages and get rid of XSS
let message = {
  username: 'womp',
  text: 'wompwompwompwompwompwompwomp',
  roomname: Rooms.selected || 'lobby',
};

for (let i = 0; i < 100; i++) {
  Parse.create(message, (data) => {
    _.extend(message, data);
    Messages.add(message, MessagesView.render);
  })
};
