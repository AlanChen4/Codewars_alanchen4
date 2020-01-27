function alphabetPosition(text) {
  let final_string = "";
  text = text.toLowerCase();
  for (i = 0; i < text.length; i++){
  	letter_condition = (text.charAt(i).charCodeAt() - 96 > 0 && text.charAt(i).charCodeAt() - 96 < 27)
    final_string = (letter_condition) ? final_string.concat(" ", String(text.charAt(i).charCodeAt() - 96)) : final_string.concat("", "");
  };
  return final_string.slice(1);
};