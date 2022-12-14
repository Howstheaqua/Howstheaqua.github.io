// jquery ready function
$(document).ready(function() {
    $("#menu-description").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
    $('#MyTurntable').turntable({
        axis: 'scroll',
        scrollStart: 'top'
      });
});
