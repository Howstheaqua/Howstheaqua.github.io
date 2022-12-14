window.onload = function () {
  importGalleryInfo();
}

function importGalleryInfo(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   document.getElementById("gallery-container").innerHTML = this.responseText;
  }
  magnific();
  };
  xhttp.open("GET", "components/gallery_images.html", true);
  xhttp.send();
}

function magnific(){
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
      zoom: {
        enabled: true, 
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    image: {
      markup: '<div class="mfp-figure">'+
                '<div class="mfp-close"></div>'+
                '<div class="mfp-img"></div>'+
                '<div class="mfp-bottom-bar">'+
                  '<div class="mfp-title"></div>'+
                  '<div class="mfp-counter"></div>'+
                '</div>'+
              '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
    
      cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
    
      titleSrc: function(item) {
        return item.el.attr('title') + ' <a style="color: inherit;" href="order.html?' + item.el.attr('link') + '">Order Now</a>';
        },
    
      verticalFit: true, // Fits image in area vertically
    
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
    });
    
    }