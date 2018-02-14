'use strict'

{
    $('#homeBtn').click((e) => {
        $('.innerNav h1').hide()
        $('.menu-circle').hide()
        $('.aboutSection').hide()
        $('.contactSection').hide()
        $('.projectSection').hide()
        $('.sectionContainer').hide()
        $('.nameDisplay').fadeIn(300)
        $('.menuBtn').removeClass('selected')
        $('#homeBtn').addClass('selected')
        hamToggle()
    })

    $('#aboutBtn').click(() => {
        $('.innerNav h1').fadeIn(300)
        $('.menu-circle').fadeIn(300)
        $('.nameDisplay').hide()
        $('.contactSection').hide()
        $('.projectSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.aboutSection').fadeIn(300)
        $('.menuBtn').removeClass('selected')
        $('#aboutBtn').addClass('selected')
        hamToggle()
    })

    $('#projectBtn').click(() => {
        $('.innerNav h1').fadeIn(300)
        $('.menu-circle').fadeIn(300)
        $('.nameDisplay').hide()
        $('.contactSection').hide()
        $('.aboutSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.projectSection').fadeIn(300)
        $('.menuBtn').removeClass('selected')
        $('#projectBtn').addClass('selected')
        hamToggle()
    })

    $('#contactBtn').click(() => {
        $('.innerNav h1').fadeIn(300)
        $('.menu-circle').fadeIn(300)
        $('.nameDisplay').hide()
        $('.projectSection').hide()
        $('.aboutSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.contactSection').fadeIn(400)
        $('.menuBtn').removeClass('selected')
        $('#contactBtn').addClass('selected')
        hamToggle()
    })

    $(window).resize(() => {
        window.outerWidth >= 813 ? $('#sideNav').css('display', 'block') : $('#sideNav').css('display', 'none')
    })

    $('.hamburger').click(() => {
        hamToggle()
    })
}

const hamToggle = () => {
    if ($(window).width() < 813) {
        $('#sideNav').toggle('slide')
        $('.hamburger').toggleClass("change")
    }
}