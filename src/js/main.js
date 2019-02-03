
const sayHelloTo = function (ScrollMagic) {
    let controller = new ScrollMagic.Controller()
    console.log('exportado')


    $('body').click(function(){
        TweenMax.to(window, 1.5,{scrollTo:{y: 0}})
    })

       //- --------------------- scene wrapped
    //- --------------------- scene wrapped

    $('img').each(function () {
        let tlWrappedAbout = new TimelineMax()
        .to(this, 1.8, { scale: 1.2, rotation:'+=180', ease: Power3.easeOut });
        
        let scenewrapped = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .1111
        })
    .setTween(tlWrappedAbout)
        .addTo(controller)
    });



}


module.exports = {
    sayHelloTo
}