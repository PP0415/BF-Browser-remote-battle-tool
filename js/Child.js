window.onload = function () {
    // 親ウィンドウの存在チェック
    console.log("open")
    if (!window.opener || window.opener.closed) {
        window.alert('親ウィンドウがありません。');
        return false;
    }
}