'use strict';

$(document).ready(() => {
    console.log('ready')

    $('.main_btn').on('click', () => {
        $('.overlay').animate(
                {
                    'opacity': 'show'
                }, 1500
            );

        setTimeout(() => {
            $('.modal').animate(
                {
                    'height': 'show'
                },1500
            );
        }, 1500)
        
    });

    $('.close').on('click', () => {
        $('.modal').animate(
            {
                'height': 'hide'
            },
            1500
        );

        setTimeout(() => {
            $('.overlay').animate(
                {
                    'opacity': 'hide'
                }, 1500
            );
        }, 1500)
    });
});