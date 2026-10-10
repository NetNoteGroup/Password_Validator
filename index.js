function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasDigit = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  
    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase.test(password)) {
      return "Password must include at least one uppercase letter.";
    }
    if (!hasLowerCase.test(password)) {
      return "Password must include at least one lowercase letter.";
    }
    if (!hasDigit.test(password)) {
      return "Password must include at least one number.";
    }
    if (!hasSpecialChar.test(password)) {
      return "Password must include at least one special character.";
    }
  
    return "Password is valid!";
  }
  
  // Example usage
  console.log(validatePassword("Test1234"));      // Missing special character
  console.log(validatePassword("Test@1234"));     // Valid
  