'use strict'

{
    $('#homeBtn').click((e) => {
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
        $('.nameDisplay').hide()
        $('.projectSection').hide()
        $('.aboutSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.contactSection').fadeIn(400)
        $('.menuBtn').removeClass('selected')
        $('#contactBtn').addClass('selected')
        hamToggle()
    })

    $('.arrowEmail').mouseenter(() => {
        $('.contactArrow').animate({
            marginLeft: "6px"
        }, 300, 'swing', () => {
            $('.contactArrow').animate({
                marginLeft: "6px"
            }, 300)
        })
        $('.arrowEmail h2').animate({
            marginLeft: "-6px"
        }, 300, 'swing', () => {
            $('.arrowEmail h2').animate({
                marginLeft: "-6px"
            }, 300)
        })
    })

    $('.arrowEmail').mouseout(() => {
        $('.contactArrow').animate({
            marginLeft: "-6px"
        }, 200)
        $('.arrowEmail h2').animate({
            marginLeft: "6px"
        }, 200)
    })
    $('.hamburger').click(() => {
        hamToggle()
    })
}

const hamToggle = () => {
    if ($(window).width() < 741) {
        $('#sideNav').toggle('slide')
        $('.hamburger').toggleClass("change")
    }
}