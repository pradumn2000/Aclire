// PASSWORD-TOGGLE

document.addEventListener("DOMContentLoaded", function () {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    eye.addEventListener("click", function () {
      const input = eye.closest(".input-grp").querySelector(".password");

      if (eye.classList.contains("eye-close")) {
        eye.classList.remove("eye-close");
        eye.classList.add("eye-open");
        input.setAttribute("type", "text");
      } else {
        eye.classList.remove("eye-open");
        eye.classList.add("eye-close");
        input.setAttribute("type", "password");
      }
    });
  });
});

// PASSWORD-TOGGLE