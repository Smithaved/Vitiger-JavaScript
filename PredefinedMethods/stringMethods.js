var str= " Hi Everyone  "

 /*1 str.length 
    returns the length of the string
*/
 console.log(str.length);

/*2 str.split 
    Splits the string to substring based on the seperators
    retuns in the form of array
    dosenot modify the existing string
*/
console.log(str);
console.log(str.split(" "));
console.log(str.split("e"));
console.log(str.split("e",2));

// /*3 str.charAt
// return the character of the specified index */
console.log(str);
console.log(str.charAt(4));
console.log(str);

// /*4 str.charCodeAt() 
// prints the unique code of the character
// */
console.log(str);
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(17));

// /*5 str.concat()
// dosenot modify the existing string
// return type is string
// appends the string at end of the string
// */
console.log(str);
console.log(str.concat("Hello"));
console.log(str);

/*6 str.endsWith() 
Check whether the string is ending with the same searched string
*/
console.log(str);
console.log(str.endsWith("e  "));
console.log(str.endsWith("a"));

/*7 str.includes() 
check whether the string inclued the given character or string pattern is present 
*/
console.log(str);
console.log(str.includes("y"));
console.log(str.includes("a"));

/* 8 str.indexOf()
returns the index of the characters travers left to right
first occurance will be considered
*/
console.log(str);
console.log(str.indexOf("H"));
console.log(str.indexOf("h"));
console.log(str.indexOf("o"));

/*9 str.lastIndexOf() 
returns the index of the character travers right to left
first occurance will be considered
*/
console.log(str);
console.log(str.lastIndexOf("e"));

/*10 str.replace() 
replaces the characters with new characters
wount modify the existing string
*/
console.log(str);
console.log(str.replace("Everyone","Good Morning"));
console.log(str);

/*11 str.repeat()
It will print as many copies needed by the user and appends it to the end of the string
dosnt modify the existing string
*/
console.log(str);
console.log(str.repeat(3));
console.log(str.repeat());//it skips the execution
console.log(str);

/* Extra Methods*/

/*str.codePointAt*/
console.log(str);
console.log(str.codePointAt(10));
console.log(str.codePointAt(17));

/*str.search*/
console.log(str);
console.log(str.search("e"));

/*str.startsWith*/
console.log(str);
console.log(str.startsWith("h"));
console.log(str.startsWith(" "));

/*str.substring*/
console.log(str);
console.log(str.substring(2,8));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
