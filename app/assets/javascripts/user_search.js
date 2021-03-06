$(document).on('turbolinks:load', function() {

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    $("#user-search-result").append(html);
  }

  $(".search__query").on("keyup", function() {
    var input = $(".search__query").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0 && input.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        });
      }
      else {
        $("#user-search-result").append("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    })
  });
});
