"use strict";

function cutOffAt(amount, string) {
  if (mdebug == true) {
    console.log("String to use is \"" + string + "\". Cutting off after " + amount + "."  );
  }
	return string.substr(0, amount);
  if (mdebug == true) {
    console.log("Output was " + string.substr(0, amount) + ".");
  }
}

function removeVowels(string) {
	return string.replace(/[aeiou]/gi, '');
}

function removeNumbers(string) {
	return string.replace(/[1234567890]/gi, '');
}

function removeAlphabet(string) {
	return string.replace(/[qwertyuiopasdfghjklzxcvbnm]/gi, '');
}
