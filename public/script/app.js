$( document ).ready(function() {
    
    // hide these elements on init
    $('#button').hide();
    $('#upperview').hide();
    
    // make it upper case and einself onclick
    $('#button').click(function() {
        var value = $('#word').val();
        $.ajax({
            url: "/upper/"+value,
            context: document.body,
            dataType: 'json'
        }).done(function(data) {
            // hide the form
            $('#formview').hide();
            // show the result view
            $('#uppercaseword').text(data.result);
            $('#upperview').show();
        });
    });
    
    // validate when the contents of the for changes
    $('#word').change(function(evt){
        var value = $('#word').val();
        $.ajax({
            url: "/validate/"+value,
            context: document.body,
            dataType: 'json'
        }).done(function(data) {
            if (data.result == true) {
                $('#button').show();
            }
        });
    });
});