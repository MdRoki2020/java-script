function validateForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cc = document.getElementById("cc").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const color = document.getElementById("color").checked;
  
    if (fname.trim() === "") {
      alert("FName is required");
      return;
    }
    if (lname.trim() === "") {
        alert("LName is required");
        return;
    }
  
    if (email === "") {
      alert("Email is required");
      return;
    }

    if (password === "") {
        alert("Password is required");
        return;
      }
  
    if (cc === "") {
      alert("Custome color is required");
      return;
    }

    if (dob === "") {
        alert("Date of birth color is required");
        return;
      }

      if (gender === "") {
        alert("gender is required");
        return;
      }

      if (color === "") {
        alert("color is required");
        return;
      }
  
    // If all validations pass, submit the form
    alert("Form submitted successfully");
    // Add code here to submit the form to the server
  }