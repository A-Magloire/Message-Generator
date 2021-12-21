//write code here
const phraseArray = ['a', 'b', 'c']
const photoArray = ['1','2','3']
const songArray = ['$','!','&']

//generate random quote
function generateRandomPhrase(phraseArr) {
    const rndPhrase = Math.floor(Math.random()*phraseArr.length);
    const phraseToDisplay = phraseArr[rndPhrase];
    
    return phraseToDisplay;
}
//generate random photo
function generateRandomPhoto(photoArr) {
    const rndPhoto = Math.floor(Math.random()*photoArr.length);
    const photoToDisplay = photoArr[rndPhoto];

    return photoToDisplay;
}
//generate random song
function generateRandomSong(songArr) {
    const rndSong = Math.floor(Math.random()*songArr.length);
    const songToDisplay = songArr[rndSong];

    return songToDisplay;
}

function generateCombinedMessage () {
    console.log(`${generateRandomPhrase(phraseArray)}, ${generateRandomPhoto(photoArray)}, ${generateRandomSong(songArray)}`)
    
}

generateCombinedMessage()