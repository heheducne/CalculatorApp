export function fix_str(str){
  // str = str.trim();
  for (let i=0;i<str.length;i++){
    if (str[i]=='√')  str = str.replace("√", "Math.sqrt");
    if (str[i]=='π') str = str.replace("π", "Math.PI");
    if (str[i]=='^') str = str.replace("^", "**");
    if (str[i]=='!') {
      let tmp = 1;
      for (let j =1;j<parseInt(str[i-1])+1;j++) {
        tmp*=j
      };
      str = str.replace("^", "**");
      str = str.slice(0, i-1) + str.slice(i, str.length);
      str = str.replace("!", tmp.toString())
    }
    if (str[i]=='%'){
      str = str.replace("%", (parseInt(str[i-1])/100).toString())
      str = str.slice(0, i-1) + str.slice(i, str.length);

    }
  }
  return str;
}