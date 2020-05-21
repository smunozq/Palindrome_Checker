git pullfunction palindrome(str) {
  const alphanumericOnly = str.tolowerCase().match(/[a-z0-0]/g);

  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

palindrome("eye");
