/* eslint-disable camelcase */
$(document).ready(() => {
  const messageForm = $("#messageForm");
  const selWall = $("#wall-select");
  const messageInput = $("#message-body");
  const selFont = $("#font-select");
  const selColour = $("#colour-select");

  const mainWall = $("#mainWall");

  messageForm.on("submit", e => {
    e.preventDefault();

    const wall = selWall.val();
    const message = messageInput.val().trim();
    const font = selFont.val();
    const colour = selColour.val();

    if (!message) {
      return;
    }

    const newMessage = {
      message_body: message,
      category_id: wall,
      font_id: font,
      colour_id: colour
    };
    fetch("api/messages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(() => {
      messageInput.val("");
      location.reload("/");
    });
  });

  // add what to do when a new wall is requested
  mainWall.on("change", e => {
    e.preventDefault();
    
    const newWall = mainWall.val();
    console.log(`front end sending value ${newWall}`)

    fetch(`api/wall/${newWall}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then((res, err) => {
      if (err) throw err;
    })
  })

}); //end of script
