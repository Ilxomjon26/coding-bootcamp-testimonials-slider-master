$(document).ready(function(){
    $(".card2").hide()
    $(".next").click(function(){
        $(".card2").toggle()
        $(".card1").toggle()
        $(".prev").toggleClass("next2")
        $(".next").toggleClass("next2")
    })
    $(".prev").click(function(){
        $(".card2").toggle()
        $(".card1").toggle()
        $(".next").toggleClass("next2")
        $(".prev").toggleClass("next2")
    })
    

});