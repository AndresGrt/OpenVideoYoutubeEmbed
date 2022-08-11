const iframe = document.getElementById('target')
const addLink = document.getElementById('addLink')
const formControl = document.getElementById('formControl')

/**
 * Esta funcion crea la url tipo embed para youtube o vimeo con sus tbnail en un objeto
 * @param {String} url La url del video youtube o vimeo
 * @returns {Object}
 */
function UrlToEmbed(url) {
    var video_id_regExp = /^.*((youtu.be\/|vimeo.com\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        match = url.match(video_id_regExp),
        video_id;

    video_id = match && match[7] ? match[7] : false;

    if (url.indexOf('youtu') != -1) {
        return {
            url: `https://www.youtube.com/embed/${video_id}`,
            img: `https://i.ytimg.com/vi/${video_id}`,
        }
    }

    if (url.indexOf('vimeo') != -1) {
        return {
            url: `https://player.vimeo.com/video/${video_id}`,
            img: `http://www.vimeo.com/api/v2/video/${video_id}.json`,
        }
    }

    return url;
}

formControl.onsubmit = function (e) {
    e.preventDefault();
    if (addLink.value) {
        let link = UrlToEmbed(addLink.value)
        console.log(link)
        iframe.src = link.url;
        addLink.value = null;
    }
}