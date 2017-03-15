$(document).ready(function(){
    $(document).mousemove(function(e){
        var opacity = 1;
        $('#purple-bg').css('opacity', ''+(opacity - e.pageY/1000));
    });
});
