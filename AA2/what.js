var x=1;
while (x<52) {
    document.getElementById("one").innerHTML += x + " ";

    x+=2;
}

var y=2;
    do{
        document.getElementById("two").innerHTML += y + " ";
        y+=2;
} 

while (y<51);

for (var z =1; z< 4097; z+=z){
    document.getElementById("three").innerHTML += z + " ";
}