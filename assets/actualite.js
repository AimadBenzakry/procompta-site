document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('news-modal');
    var btn = document.getElementById('show-modal-btn');
    var close = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    close.onclick = function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }
});
