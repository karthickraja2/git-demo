// Below programs in anonymous function & IIFE

// 1. Print odd numbers in an array

    // Anonymous Function

    var res = function(arr){
        var temp = [];
        for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
        temp.push(arr[i]);
        }
        }
        return temp;
        }
        console.log(res([12,13,14,15,16,17,18,19]));

        //output:  [ 13, 15, 17, 19 ]

    // IIFE Methods
       
    (function() {
        let c = [];
        for(let i=0;i<a.length;i++){
        if (a[i] % 2 != 0) {
        c.push(a[i]);
        }
        }
        console.log(c);
    });

    //output:  [ 13, 15, 17, 19 ]

    //Arrow Function    
    oddNumbers = (array) => {
        for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
                console.log(array[i])
             } 
        }
             }


// 2.Convert all the strings to title caps in a string array

   // Anonymous Function
 
    b = function(str) {
    var sentence = str.toLowerCase().split("");
    for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(""));
    return sentence;
    }
    b("Guvi");
    //Output: GUVI
    
    //IIFE function
    
    (function(str) {

        var sentence = str.toLowerCase().split("");
        
        for (let i = 0; i < sentence.length; i++) {
        
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        
        }
        
        console.log(sentence.join(""));
        
        return sentence;
        
        })("java script is the best");

      //Output: GUVI

      //Arrow Function :
       titleCase = (str) => {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
      }            
          


//3.Sum of all numbers in an array

   // Anonymous Function
      
   a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
   b = function() {
   let sum = 0;
   
   for (let i = 0; i < a.length; i++) {
   sum = sum + a[i];
   }
   return sum;
   }
   
   console.log(b());

   //Output: 153

   //IIFE function
   (function() {
    a=  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    let sum = 0;
    for (let i=0; i< a.length; i++) {
    sum = sum + a[i];
    }
    console.log(sum);
    })();
   
  //Output: 153

  //Arrow function:       
    sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }


//4.Return all the prime numbers in an array

     // Anonymous Function
     let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
     b = function(...a) {
     for (let i = 0; i < a.length; i++) {
     for (let j = 2; j <= a[i]-1; j++) {
     if (a[i] % j == 0) {
     return false;
     }
     }
     return a[i] > 1;
     }
     }
     console.log(a.filter(b));

     //Output: [ 2, 3, 5, 7, 11, 13, 17, 19 ]

     
     //IIFE function
     (prime = function(a) {
        for(let j = 2; j <= a-1; j++) {
        if (a % j == 0) {
        return false;
        }
        }
        return a >1;
        })();
        console.log(a.filter(prime))
     //Output: [ 2, 3, 5, 7, 11, 13, 17, 19 ]

   //Arrow Function:
     primeNumber = (numArray) => {
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    }

// 5.Return all the palindromes in an array
    
    //Anonymous Function
let arr = ['ba', 'karthi', 'gaag', 'hello', 'guvi', 'greek'];
let palin = function(arr) {
let c = [];
for (let i = 0; i < arr.length; i++) {
let strarr = arr[i]
let revstr = strarr.split("").reverse().join("");
if (strarr == revstr) {
c.push(strarr);
}
}
console.log(c);
}
palin(arr);

//Output: [ 'gaag' ]


  //IIFE Function
  (function(arr) {

    let c = [];
    
    for (let i = 0; i < arr.length; i++) {
    
    let strarr = arr[i]
    
    let revstr = strarr.split("").reverse().join("");
    
    if (strarr == revstr) {
    
    c.push(strarr);
    
    }
    
    }
    
    console.log(c);
    
    })(arr);
  //Output: [ 'gaag' ]
  
  //Arrow Function:
  Palindrome = (arr, n) =>
  {
      
      for (let i = 0; i < n; i++)
      {
          let ans = isPalindrome(arr[i]);
          if (ans == false)
              return false;
      }
      return true;
  }

//6.Remove duplicates from an Array
//Anonymous Function : 
                        (function(array){
                        let dupl = [...new Set(array)];
                        console.log(dup);
                        })

//IIFE :                
                        (function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4]);

//7.Rotate an array by K times
//Anonymous function : 
                        (function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          })
                          
  // IIFE :  
                        (function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          })([1,2,3,4] , 2)

  //Arrow Function:

                          (function reverse(array , li , ri){
                            while(li < ri){
                            var temp = a[li];
                                 a[li]= a[ri];
                                 a[ri] = temp;
                                 
                                 li++;
                                 ri--;
                               }
                           })