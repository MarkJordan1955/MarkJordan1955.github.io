function displayImage() {
    // Get the image element by its ID
    const imageElement = document.getElementById("imagePlaceholder");

    // Set the src attribute to the relative path of your image file
    // Assumes the image is in an 'images' folder in the same directory
    imageElement.src = "images/my_picture.jpg";
}