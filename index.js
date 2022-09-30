$(document).ready(function () {
    $( "#tabs" ).tabs({
        beforeLoad: function( event, ui ) {
            ui.jqXHR.fail(function() {
                ui.panel.html("Couldn't load this tab.");
            });
        }
    });
    //get tab index
})
$('#tabs').on('tabsactivate', function(event, ui) {
    var newIndex = ui.newTab.index();
    console.log('Switched to tab '+newIndex);
});

let al = function () {
    window.open('./image/bath.jpg')
    console.log(this)
    var bg_img = $('.thumbnail').css('background').replace(/^url\(['"](.+)['"]\)/, '$1');
    console.log(bg_img)
}

