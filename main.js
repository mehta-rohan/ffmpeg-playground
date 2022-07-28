// Non blocking metadata fetch from video
var exec = require('child_process').exec;

let getMetaData = (url, done) => {
    exec(`ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json ${url}`, function (error, stdout, stderr) {
        if (error || stderr) {
            done({ error: error || stderr });
        }
        done(null, stdout);
    });
}

getMetaData('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', (err, data) => {
    console.log('error', err);
    console.log('here', data)
})

setInterval(() => {
    console.log('other process are running')
}, 100);
