let string="naman";


function reverse(str){
	let bag="";
	for (let i=str.length-1;i>=0;i--){
		bag=bag+str[i];
	}
	return bag;
}

let reverse_str=reverse(string);

if(string===reverse_str){
	console.log("palindrome");
} else {
	console.log("not palindrome");
}