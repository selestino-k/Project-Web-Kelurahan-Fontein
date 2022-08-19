 /**Sticky navigation */

 let navbar = $(".navbar");

 $(window).scroll(function(){
    console.log(window.innerHeight);
    console.log($(".section").offset().top);
 });

 
 /**Count animation */

 let nCount = function(selector){
    $(selector).each(function(){
        $(this).animate({
            Counter: $(this).text()
        
        },{
            duration:2000,
            easing:"swing",
            step: function(value){
                $(this).text(Math.cell())
            }
        })
    });
 }
 let a = 0;
 $(window).scroll(function(){
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if(a==0 && $(window).scrollTop() >=oTop){
        a++;
        nCount(".rectangle > h1");
    }
 })