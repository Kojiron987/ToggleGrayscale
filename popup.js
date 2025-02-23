document.getElementById("toggle").addEventListener("click", () => {
  console.log("Start");
  browser.tabs.executeScript({ code: `
    function toggleGrayscale() {
      console.log("Inner function");
      const styleId = "grayscale-style";
      let style = document.getElementById(styleId);
      
      if (style) {
        console.log("Remove");
        style.remove();
      } else {
        console.log("Add");
        style = document.createElement("style");
        style.id = styleId;
        style.textContent = "body { filter: grayscale(1) !important; }";
        document.head.appendChild(style);
      }
    }
    toggleGrayscale();
    `});
});

