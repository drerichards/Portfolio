'use strict'

{
    $('#homeBtn').click(() => {
        $('.aboutSection').css('display', 'none')
        $('.contactSection').css('display', 'none')
        $('.projectSection').css('display', 'none')
        $('.sectionContainer').css('display', 'none')
        $('.nameDisplay').fadeIn(300)
    })

    $('#aboutBtn').click(() => {
        $('.nameDisplay').css('display', 'none')
        $('.contactSection').css('display', 'none')
        $('.projectSection').css('display', 'none')
        $('.sectionContainer').fadeIn(300)
        $('.aboutSection').fadeIn(300)
    })

    $('#projectBtn').click(() => {
        $('.nameDisplay').css('display', 'none')
        $('.contactSection').css('display', 'none')
        $('.aboutSection').css('display', 'none')
        $('.sectionContainer').fadeIn(300)
        $('.projectSection').fadeIn(300)
    })

    $('#contactBtn').click(() => {
        $('.nameDisplay').css('display', 'none')
        $('.projectSection').css('display', 'none')
        $('.aboutSection').css('display', 'none')
        $('.sectionContainer').fadeIn(300)
        $('.contactSection').fadeIn(300)
    })
}
