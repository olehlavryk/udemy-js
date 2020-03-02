// Modal
function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModal(startHandler, overlay, closeHadndler) {
        // show overlay
        startHandler.addEventListener('click', function() {        
            overlay.style.display = 'block';
            this.classList.add('more-splash');

            // deny body allow scroll
            document.body.style.overflow = 'hidden';
        });

        // close overlay
        closeHadndler.addEventListener('click', function() {
            overlay.style.display = 'none';
            startHandler.classList.remove('more-splash');

            // allow body scroll 
            document.body.style.overflow = '';
        });
    }

    // init popup for .more
    showModal(more, overlay, close);

    let descriptionBtns = document.querySelectorAll('.description-btn');

    descriptionBtns.forEach(function(el) {
        showModal(el, overlay, close);
    });
}

module.exports = modal;

