class RoomChannel < ApplicationCable::Channel
  def subscribed
    # binding.pry
    # stream_from "some_channel"
    # フロントとバックの監視をした時に実行するメソッド
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak (data)
    Message.create!(content: data['message'])
    ActionCable.server.broadcast　'room_channnel' , data['message']
    # broadcastは接続されている全ての端末に対し、相手を特定せずデータを送ること。
    # room_channnelはroom.jsのRoomChannelにデータを送るよっていう意味
  end
end
