function openOrSenior(data){
  var return_members = [];
  data.forEach(function(person){
  if (person[0] >= 55 && person[1] > 7){
    return_members.push("Senior");
  } else return_members.push("Open");
  });
  return return_members;
}