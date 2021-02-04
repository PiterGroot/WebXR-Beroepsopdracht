
var imageIndex = 1;
changeImage(imageIndex);

function slide(i) {
    changeImage(imageIndex += i);
  }
  
function changeImage(foto) {
    var i;
    var imageList = document.getElementsByClassName("slideImage");
    if (foto > imageList.length) {
        imageIndex = 1
    }
    
    
    if (foto < 1) {
        imageIndex = imageList.length
    }
    
    for (i = 0; i < imageList.length; i++) {
      imageList[i].style.display = "none";  
    }



    imageList[imageIndex-1].style.display = "block";
}