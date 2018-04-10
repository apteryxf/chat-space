$(function() {
  $(".search__query").on("keyup", function() {
    var input = $(".search__query").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

  });
});
