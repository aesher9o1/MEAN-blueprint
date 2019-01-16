$(window).on('load',function(){
    $('#main-loader').fadeOut();
});

$('.overlay').on('click', function(){
    $("#resume").show();
    $('.overlay').hide();
})