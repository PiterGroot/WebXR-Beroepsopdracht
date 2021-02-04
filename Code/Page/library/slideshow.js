
var imageIndex = 1;

/* Zet eerste Foto Klaar */
changeImage(imageIndex);



function slide(i) {/*Als er op de knop Geklikt wordt, Ga 1 verder of 1 terug*/
    changeImage(imageIndex += i);
  }


function changeImage(foto) { /*Verander Foto Naar volgende Foto*/
    var i;
    var imageList = document.getElementsByClassName("slideImage"); /*Maak lijst van alle foto's*/


    if (foto > imageList.length) { /*Als voorbij laatste foto, Ga naar eerste foto.*/
        imageIndex = 1
    }
    
    if (foto < 1) { /*Als je terug gaat bij eerste foto, ga naar de laaste foto*/
        imageIndex = imageList.length 
    }
    
    for (i = 0; i < imageList.length; i++) { /*Maak alle foto's ontzichtbaar*/
      imageList[i].style.display = "none";  
    }

    imageList[imageIndex-1].style.display = "block"; /*Maak geselecteerde foto zichtbaar*/
}