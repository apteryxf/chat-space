$(function() {
  
  function addUser(id, name) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${id}'>
                <input name='group[user_ids][]' type='hidden' value='${id}'>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    return html;
  }

  var user_list = $("#chat-group-user")

  $(document).on("click", ".user-search-add", function() {
    $(this).parent().remove();
    var user_id = $(this).attr('data-user-id');
    var user_name = $(this).attr('data-user-name');
    var html = addUser(user_id, user_name);
    user_list.append(html);
  });

  $(document).off("click", ".user-search-remove");
  $(document).on("click", ".user-search-remove", function() {
    $(this).parent().remove();
  });
});
