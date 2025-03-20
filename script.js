document.addEventListener("DOMContentLoaded", () => {
  // Select the line element
  const line = document.getElementById("line");

  if (!line) {
    console.error("Element with ID 'line' not found.");
    return;
  }

  // Initialize the rotation angle
  let angle = 0;

  // Create a function to update the rotation
  function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Rotate the line
  }

  // Use setInterval to update the rotation every 20ms
  setInterval(rotateLine, 20);
});
