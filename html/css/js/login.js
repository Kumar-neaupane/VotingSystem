function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;

    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }

    var successMessage = document.getElementById("successMessage");
    successMessage.innerText = "Login successful!";
    successMessage.style.display = "block";
  
    document.getElementById("loginForm").reset();
  
    return false;
  }
  
  function hideSuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";
  }
  
  document.getElementById("name").addEventListener("input", hideSuccessMessage);
  document.getElementById("mobile").addEventListener("input", hideSuccessMessage);
  document.getElementById("password").addEventListener("input", hideSuccessMessage);
  