// CLOSURES
 function a(){
    var x =12;
    var y =10;
    function b(){
        var y =8;
        console.log(y);
    }
    y =14;
    b();

}
a();