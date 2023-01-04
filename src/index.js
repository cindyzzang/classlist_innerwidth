const body = document.body;

function handleWindowResize() {
  const innerWidth = window.innerWidth;
  const resizedClass = "resized";
  const fullScreenClass = "fullScreen";

  if (innerWidth > 1000) {
    body.classList.add(fullScreenClass);
  } else if (innerWidth <= 1000 && innerWidth > 600) {
    body.classList.remove(fullScreenClass);
    body.classList.add(resizedClass);
  } else if (innerWidth <= 600) {
    body.classList.remove(resizedClass);
  }
}

window.addEventListener("resize", handleWindowResize);
