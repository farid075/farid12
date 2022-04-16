function f(a,b){
   if (a>b){
       console.log(a)
    
   }
   else if (b>a){
       console.log(b)
   }
}
f(7,6)
function l(a,b){
    if (a>b){
        console.log(a)
    }
    else if (b>a){
        console.log(b)
    }
    else if (a==b){
        console.log('Beraberdir')
    }
}
l(6,5)
function f(a,b){
    if (a>10 || b>10){
        console.log(10)
    }
    else if (a<10 && b<10){
        if (a>b){
            console.log(a)
        }else if (b>a){
            console.log(b)
        }
        }
    }
f(4,11)
var a=0
for (let i=1;i<11;i++){
   a+=i


}
console.log(a)
var b=0;
for (let i=1;i<11;i++){
    if (i%2!=0){
      b+=i
    }
}
console.log(b)
 function d(a,b){
     cem=0
     for (let i=a;i<b+1;i++){
        cem+=i
     }
     console.log(cem)
 }
 d(5,10)
 function g(a,b){
     if (a.length>b.length){
         console.log(a)
    
     }
     else if (a.length<b.length){
         console.log(b)
     }

 }
g("farid","sda")

