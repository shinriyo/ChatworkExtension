// ボタンおした時の処理
chrome.browserAction.onClicked.addListener(function() {
alert($(".roomUnread"));
  $(".roomUnread").each(
    function(){$(this).click()}
  );
});
