function addingEventListener() {
    const button = document.getElementById("button"); // Updated to match the correct ID
  
    if (button) {
      button.addEventListener("click", () => {
        console.log("Button clicked! Event listener added.");
      });
    }
  }
  