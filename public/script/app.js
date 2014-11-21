$( document ).ready(function() {

    $('#button').hide();
// Handler for .ready() called.
    $('#word').change(function(evt){
        $.ajax({
            url: "/validate/hans",
            context: document.body,
            dataType: 'json'
        }).done(function() {
            $('#button').show();
        });
    })
});