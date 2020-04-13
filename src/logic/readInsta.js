// eslint-disable-next-line no-undef
readInsta = function () {
    var arr = document.getElementsByTagName("article")[0].getElementsByTagName("a");
    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i].href);
    }
}
// eslint-disable-next-line no-undef
readInsta();