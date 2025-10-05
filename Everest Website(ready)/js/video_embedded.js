$(function() {
    const $overlay = $('#modal-overlay');
    const $closeModal = $('.my-close');
    const $videoFrame = $('#my-video-frame');

    // Delegated binding
    $(document).on('click', '.request-loader', function() {
        let videoUrl = $(this).attr('data-video');

        // ✅ Auto-convert "watch?v=" links to "embed/"
        if (videoUrl.includes("watch?v=")) {
            const videoId = videoUrl.split("watch?v=")[1].split("&")[0];
            videoUrl = "https://www.youtube.com/embed/" + videoId;
        }

        $videoFrame.attr('src', videoUrl + "?autoplay=1");
        $overlay.css('display', 'flex');
    });

    $closeModal.on('click', function() {
        $overlay.hide();
        $videoFrame.attr('src', "");
    });

    $overlay.on('click', function(e) {
        if (e.target === this) {
            $overlay.hide();
            $videoFrame.attr('src', "");
        }
    });
});
