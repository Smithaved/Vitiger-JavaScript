var s1="sm1#%24it?ha"
var alpha=""
var number=""
var special=""
for (var i = 0; i < s1.length; i++) {
    if ((s1.charAt(i)>='a') || (s1.charAt(i)>='z') ) {
      alpha=alpha+s1.charAt(i)  
    }
    else if ((s1.charAt(i)>='0') || (s1.charAt(i)>='9')) {
        number=number+s1.charAt(i)  
      }
    else
    {
        special=special+s1.charAt(i) 
    }
}
console.log(alpha);
console.log(number);
console.log(special);