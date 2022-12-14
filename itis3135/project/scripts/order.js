const string = window.location.search;
$(document).ready(function() {
    $('#artwork').attr('src', 'images/' + string.slice(1) + '.jpg');
    $('#order-form').on('submit', function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let artwork = $('#artwork').attr('src');
        let artworkName = artwork.slice(artwork.lastIndexOf('/') + 1, artwork.lastIndexOf('.'));
        let amount = $('#amount').val();
        let artworkPrice = 0;
        let tax = 0;
        let total = 0;
        if(artworkName === "dinnerfortwo"){
            artworkPrice = 100;
        }
        else if(artworkName === "dogwalker"){
            artworkPrice = 200;
        }
        else if(artworkName === "elmori"){
            artworkPrice = 300;
        }
        else if(artworkName === "night"){
            artworkPrice = 400;
        }
        else if(artworkName === "nuclearshit"){
            artworkPrice = 500;
        }
        else if(artworkName === "pastafarian"){
            artworkPrice = 600;
        }
        else if(artworkName === "pout"){
            artworkPrice = 700;
        }
        else if(artworkName === "unjust"){
            artworkPrice = 800;
        }
        else if(artworkName === "us"){
            artworkPrice = 900;
        }
        tax = (artworkPrice * amount) * 0.07;
        total = (artworkPrice * amount) + tax;
        $('#order-confirmation').html('Thank you, ' + name + ', for your order of ' + amount + ' prints for $' + (artworkPrice*amount) + '. Your total is $' + total + ' including tax.');
    });
});

