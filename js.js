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
    })

    $('#aboutBtn').click(() => {
        $('.nameDisplay').hide()
        $('.contactSection').hide()
        $('.projectSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.aboutSection').fadeIn(300)
        $('.menuBtn').removeClass('selected')
        $('#aboutBtn').addClass('selected')
    })

    $('#projectBtn').click(() => {
        $('.nameDisplay').hide()
        $('.contactSection').hide()
        $('.aboutSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.projectSection').fadeIn(300)
        $('.menuBtn').removeClass('selected')
        $('#projectBtn').addClass('selected')
    })

    $('#contactBtn').click(() => {
        $('.nameDisplay').hide()
        $('.projectSection').hide()
        $('.aboutSection').hide()
        $('.sectionContainer').fadeIn(300)
        $('.contactSection').fadeIn(400)
        $('.menuBtn').removeClass('selected')
        $('#contactBtn').addClass('selected')
    })

    $('.arrowEmail').mouseenter(() => {
        $('.contactArrow').animate({
            marginLeft: "6px"
        }, 300, 'linear', () => {
            $('.contactArrow').animate({
                marginLeft: "6px"
            }, 300)
        })
        $('.arrowEmail h2').animate({
            marginLeft: "-6px"
        }, 300, 'linear', () => {
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
}
