$(document).ready(function(){
    $("a[name=copy_pre]").click(function() {
        var id = $(this).attr('id');
        var el = document.getElementById(id);
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        alert("Contents copied to clipboard.");
        return false;
    });
});