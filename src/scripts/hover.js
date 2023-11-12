$(document).ready(function(){

    main();

    function main(){
        mouseOver();
    }

    function mouseOver(){ //manipula propriedades dos elementos do component conforme o mouse da um hover
        $('m-card').on('mouseover', function(){ 
            const elemento = $(this);

            //acessando a shadow dom por meio do shadowRoot
            const shadow = elemento[0].shadowRoot;

            const mIcon = $(shadow).find('.m-icon');
            mIcon.attr('src', './assets/images/2.png');

            const heart = $(shadow).find('.heart');
            heart.addClass('block');

            const more = $(shadow).find('.more');
            more.addClass('block');

            const albumHover = $(shadow).find('.album');
            albumHover.removeClass('mhover-album');

            const timerHover = $(shadow).find('.timer');
            timerHover.removeClass('mhover-timer');

        });
    
        $('m-card').on('mouseout', function(){
            const elemento = $(this);
    
            const shadow = elemento[0].shadowRoot;

            const mIcon = $(shadow).find('.m-icon');
            mIcon.attr('src', './assets/images/1.png');

            const heart = $(shadow).find('.heart');
            heart.removeClass('block');

            const more = $(shadow).find('.more');
            more.removeClass('block');

            const albumHover = $(shadow).find('.album');
            albumHover.addClass('mhover-album');

            const timerHover = $(shadow).find('.timer');
            timerHover.addClass('mhover-timer');

        });
    }

});


