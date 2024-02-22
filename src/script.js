function validateForm() {
  // Get the values from the form
  let username = document.forms["myForm"]["username"].value;
  let password = document.forms["myForm"]["password"].value;

  // Check if the username is empty
  if (username == "") {
    alert("Username must be filled out");
    return false;
  }

  // Check if the password is empty
  if (password == "") {
    alert("Password must be filled out");
    return false;
  }

  // Additional validation logic can be added here, if needed

  // If both fields are filled, the form is valid
  return true;
}
