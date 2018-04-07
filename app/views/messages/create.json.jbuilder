json.name @message.user.name
json.body @message.body.present? ? @message.body : " "
json.image @message.image.present? ? @message.image : " "
json.user_id @message.user.id
json.group_id @message.group.id
