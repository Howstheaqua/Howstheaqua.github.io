$(document).ready(function() {
    $('#commission-form').on('submit', function(event) {
        event.preventDefault();
        console.log('here');
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
        $('#confirmation').html('Thank you, ' + name + ', for your commission request. I will contact you at ' + email + ' regarding your request.');
    });
});