$(document).ready(() => {

    const messageForm = $('#messageForm');
    const selWall = $('wall-select');
    const messageInput = $('message-body');
    const selFont = $('font-select');
    const selColour = $('colour-select');

    messageForm.on('submit', e => {
        e.preventDefault();

        const wall = selWall.val();
        const message = messageInput.val().trim();
        const font = selFont.val();
        const colour = selColour.val();

        if (!message) {
            return
        }

        fetch(`api/messages`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(/*what goes here*/),
        }).then(() => {
            messageInput.val('');
            location.reload('');
        });
    })

}); //end of script