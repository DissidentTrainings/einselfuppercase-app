$( document ).ready(function() {

    $('#button').hide();
// Handler for .ready() called.
    $('#word').change(function(evt){
        var value = $('#word').value;
        $.ajax({
            url: "/validate/"+value,
            context: document.body,
            dataType: 'json'
        }).done(function(data) {
            if (data.result == true) {
                $('#button').show();
            }
        });
    })
});