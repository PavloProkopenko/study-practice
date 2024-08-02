function extractPhoneNumbers(text) {
  const regexp = /(\(|\d)[0-9)\s-]+(?:\d)/g; // мой вариант
  const regexp2 = /\b(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}\b/g; // предложный вариант
  return text.match(regexp);
}

const textWithPhones = "Call me at (123) 456-7890 or 123-456-7890.";
console.log(extractPhoneNumbers(textWithPhones)); // ["(123) 456-7890", "123-456-7890"]
