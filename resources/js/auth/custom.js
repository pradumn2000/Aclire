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

// VERIFICATION-CODE
const handleOtpInput = (e, index) => {

  // only number allow
  const value = e.target.value.replace(/\D/g, "");

  e.target.value = value;

  const inputs = document.querySelectorAll(".inputs");

  // next focus
  if (value && index < inputs.length - 1) {
    inputs[index + 1].focus();
  }

  // join otp
  let otpValue = "";

  inputs.forEach((input) => {
    otpValue += input.value;
  });

  setOtp(otpValue);
};

const handleKeyDown = (e, index) => {

  const inputs = document.querySelectorAll(".inputs");

  // previous focus on backspace
  if (
    e.key === "Backspace" &&
    e.target.value === "" &&
    index > 0
  ) {
    inputs[index - 1].focus();
  }
};
// VERIFICATION-CODE


// TOGGLE SIDEBAR

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

// TOGGLE SIDEBAR