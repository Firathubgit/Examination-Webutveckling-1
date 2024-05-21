var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = 'Images/SlideShow1.jpg';
images[1] = 'Images/SlideShow2.jpg';
images[2] = 'Images/SlideShow3.jpg';

// Change Image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To 0
        i = 0;
    }

    // Run function every x seconds
    setTimeout(changeImg, time);
}

// Run function when page loads
window.onload = changeImg;
