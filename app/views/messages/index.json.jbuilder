json.array! @new_messages do |message|
  json.id message.id
  json.name message.user.name
  json.body message.body.present? ? message.body : " "
  json.image message.image.present? ? message.image.url : " "
  json.user_id message.user.id
  json.group_id message.group.id
  json.created_at message.created_at
end
