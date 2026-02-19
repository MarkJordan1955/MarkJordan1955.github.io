function showImage() {
  // Create a new image element
  const img = document.createElement("img");
  
  // Set the source (URL or file path) and other attributes
  img.src = "images/workplace.jpg";
  img.alt = "A description of the image";
  img.width = 300; 

  // Append the new image element to the container
  document.getElementById("imageContainer").appendChild(img);
}

// Call the function to display the image when the script runs
showImage();



