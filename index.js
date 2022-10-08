$(window).on('load', function() {
    //Initialize sidebar tabs
    $tabs = $( "#tabs" ).tabs({
        beforeLoad: function( event, ui ) {
            ui.jqXHR.fail(function() {
                ui.panel.html("Couldn't load this tab.");
            });
        },
        cache:true,
    });

    // preloads all tabs
    var total = $tabs.find('.ui-tabs-nav li').length;
    var currentLoadingTab = 1;
    $tabs.bind('tabsload',function(){
        currentLoadingTab++;
        if (currentLoadingTab < total)
            $tabs.tabs('load',currentLoadingTab);
        else
            $tabs.unbind('tabsload');
    }).tabs('load',currentLoadingTab);

    //get tab index
    $('#tabs').on('tabsactivate', function(event, ui) {
        var newIndex = ui.newTab.index();
        if (newIndex === 0) {
            console.log('Switched to landing page ');
        }
        if (newIndex === 1) {
            let thumbnailList = document.getElementsByClassName("thumbnail")
            var arr = Array.prototype.slice.call( thumbnailList )
            console.log('Switched to labwork ' + newIndex);
            const pressed = e => {
                console.log(e.target.className)
            }
        } else if (newIndex === 2) {
            console.log('Switched to labwork '+newIndex);
        } else if (newIndex === 3) {
            console.log('Switched to labwork '+newIndex);
        }
    });
})












