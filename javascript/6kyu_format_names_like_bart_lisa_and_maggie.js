function list(names){
  let new_names = [];
  
  names.forEach(name => new_names.push(name['name']));
  
  if (new_names.length == 0){
    return '';
  }else if (new_names.length == 1){
    return new_names[0];
  }else if (new_names.length == 2){
    return new_names[0] + ' & ' + new_names[1];
  }else{
    last_part = new_names.splice(-2)
    return new_names.join(', ') + ', ' + last_part.join(' & ');
  }
}