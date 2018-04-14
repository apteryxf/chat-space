$(document).on('turbolinks:load', function() {
  function buildHTML(message) {
    var html = `<div class="message" data-user-id="${message.id}">
                  <ul class="message__lists">
                    <li class="message__lists__list" id="user-name">
                      ${message.name}
                    </li>
                    <li class="message__lists__list" id="date">
                      ${message.created_at}
                    </li>
                  </ul>
                  <p class="message--content">
                    ${message.body}
                    <img src="${message.image}">
                  </p>
                </div>`
    return html;
  }

  var messages_list = $(".chat__messages");

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
      var html = buildHTML(data);
      messages_list.append(html);
      $('.chat__form--message').val('');
      $('.hidden').val('');
      messages_list.scrollTop($(".chat__messages")[0].scrollHeight);
    })
    .fail(function() {
      alert('error');
    })
    return false;
  })

  function autoReload(){
    var message_id = $(".message").last().attr("data-user-id");
    var url = location.href

    if (url.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: url,
        type: "GET",
        data: {id: message_id},
        dataType: 'json'
      })

      .done(function(messages) {
        if(messages.length !== 0) {
          messages.forEach(function(message) {
            var html = buildHTML(message);
            messages_list.append(html);
          });
        }
        messages_list.scrollTop(messages_list[0].scrollHeight);
      })
      .fail(function() {
        alert('更新できませんでした');
      })
    }
  }
  setInterval(autoReload, 5000);
});
