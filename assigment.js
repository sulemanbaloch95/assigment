//Question 1:


var word = prompt("Enter your name & num");
for(i = word.length -1 ; i >=0 ; i--){
    console.log(word[i])
}



function data(x) {
      
    //Here i will used toString to convert number on string and split and join 
    var y = x.toString().split("").reverse().join("");
    console.log(y);
    
};

// call function on arguments
data(32243);

//Question 2
var word = prompt("Enter your word ");
var check = "";
for(var i= word.length -1; i >=0 ; i--){   //for (i=0; i<= 10 ; i++)
}if(check === word){
    console.log(word+ " " + "word is plandrome");
}else{
    console.log("your word is not plandrome");
}

//Question 3

 let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
document.write(possibleCombinations('saqib'));

//Question 4
function con(str){
    let list_of_string =[];
    for(i=0; i< str.length; i++){
        for(j=i + 1; j< str.length + 1; j++){
            list_of_string.push(str.slice(i , j));
        }
  
    } return list_of_string;

}


// Question 5

var word = prompt("Enter your name ");
var fChar = word.slice(0,1);
var otherChar = word.slice(1);
fChar = fChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var word = fChar + otherChar ;
console.log(word);

function big(){

    var sentence = "the jump brown fox ";
    sentence = sentence.split("");
    for(i=0;i < sentence.length;i++){
        console.log(sentence[i][0].toUpperCase);
    }
}

big();


// Question 6

function vowle(str) {

    var vowel_list = "oieuaAIOUE";
    var vacc = 0;
    for(j=0;j<str.length;j++){
        if(vowel_list.indexOf(str[j]) !== -1){
            vacc += 1;
        }
    } return vacc;
    
}console.log("the quick fox");



// Question 7

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));



// Question 8 

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));


//Question 9


function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('Saqib'));
console.log(detect_data_type(false));



//Question 10


function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));


