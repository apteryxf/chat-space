$(function() {
  function buildHTML(message) {
    var html = `<div class="message">
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
                    <img src="${message.image.url}">
                  </p>
                </div>`
    return html;
  }

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
      console.log(data);
      var html = buildHTML(data);
      $('.chat__messages').append(html);
      $('.chat__form--message').val('');
      $('.hidden').val('');
      // $('.chat__messages').animate({
      //   scrollTop: $(document).height()
      // });
      $(".chat__messages").scrollTop($(".chat__messages")[0].scrollHeight);
    })
    .fail(function() {
      alert('error');
    })
    return false;
  })
});
