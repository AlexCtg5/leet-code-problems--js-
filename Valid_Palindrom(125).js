var isPalindrome = function (s) {
  let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "");
  let str = cleanedStr.split(" ").join("");
  let palindrom = "";
  for (let i = str.length - 1; i >= 0; i--) {
    palindrom = palindrom + str[i];
  }
  console.log(palindrom);
  console.log(str);
  if (palindrom.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
