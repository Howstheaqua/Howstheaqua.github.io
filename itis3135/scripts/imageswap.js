$(document).ready(function() {
        $('#image_list a').each(function() {
            var swappedImage = new Image();
            swappedImage.src = $(this).attr('href');
        }); 
    
        $('#image_list a').click(function(evt) {
            // get the image URL and caption for each image and animate the caption
            var imageURL = $(this).attr('href');
            $('#image').hide().attr('src', imageURL).fadeIn('slow');
            var caption = $(this).attr('title');
            $('#caption').text(caption);

            evt.preventDefault();
        });
        $('li:first-child a').focus();
    }); // end ready