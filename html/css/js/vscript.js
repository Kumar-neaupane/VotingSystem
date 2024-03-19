function validateForm() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  // Validate mobile number
  var mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  // Validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

 
  if (password !== confirm_password) {
    alert("Passwords do not match.");
    return false;
  }
  var successMessage = document.getElementById("successMessage");
  successMessage.innerText = "Registration successful!";
  successMessage.style.display = "block";

  document.getElementById("registrationForm").reset();

  return false;
}

function hideSuccessMessage() {
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "none";
}

document.getElementById("name").addEventListener("input", hideSuccessMessage);
document.getElementById("mobile").addEventListener("input", hideSuccessMessage);
document.getElementById("email").addEventListener("input", hideSuccessMessage);
document.getElementById("password").addEventListener("input", hideSuccessMessage);
document.getElementById("confirm_password").addEventListener("input", hideSuccessMessage);
document.getElementById("photo").addEventListener("change", hideSuccessMessage);
