App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
    // バックエンドと繋がった時に実行される
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    const messages = documet.getElementById('messages')
    messages.innnerHTML += `<p>${data}</p>`
    // Called when there's incoming data on the websocket for this channel
    // broadcastでroom_channelからきたdataはここにくるよ。
    // aleat
  },

  speak: function(content) {
    return this.perform('speak',{message: content});
    // speakを指定することで、room_channelのspeakを実行できる。
  }
});

document.addEventListener('DOMContentLoaded', function (){
  const input = document.getElementById('chat-input')
  const button = document.getElementById('button')
  button.addEventListener('click', function (){
    const content = input.value
    App.room.speak(content)
    input.value = ''
  })
})