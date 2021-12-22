//write code here
const dailyVibe = {
    "phrase": ['a', 'b', 'c'],
    "photo": ['1','2','3'],
    "song": ['$','!','&']
}
const rndPhrase = Math.floor(Math.random()*dailyVibe["phrase"].length);
const rndPhoto = Math.floor(Math.random()*dailyVibe["photo"].length);
const rndSong = Math.floor(Math.random()*dailyVibe["song"].length);

const phraseEl = document.getElementById("phrase")
const photoEl = document.getElementById("photo")
const songEl = document.getElementById("song")

function dailyVibeIterator (obj) {
    for (let i in obj) {
        switch(i) {
            case "phrase":
                let newPhrase = obj[i][rndPhrase]
                phraseEl.innerHTML = newPhrase;
                break;
            case "photo":
                let newPhoto = obj[i][rndPhoto]
                photoEl.innerHTML = newPhoto;
                break;
            case "song":
                let newSong = obj[i][rndSong]
                songEl.innerHTML = newSong;
                break;

                

        }
        
    }
    
}

dailyVibeIterator(dailyVibe)


const phraseArray = ['a', 'b', 'c']
const photoArray = ['1','2','3']
const songArray = ['$','!','&']

//generate random quote
// function generateRandomPhrase(phraseArr) {
//     const rndPhrase = Math.floor(Math.random()*phraseArr.length);
//     const phraseToDisplay = phraseArr[rndPhrase];
    
//     return phraseToDisplay;
// }
// //generate random photo
// function generateRandomPhoto(photoArr) {
//     const rndPhoto = Math.floor(Math.random()*photoArr.length);
//     const photoToDisplay = photoArr[rndPhoto];

//     return photoToDisplay;
// }
// //generate random song
// function generateRandomSong(songArr) {
//     const rndSong = Math.floor(Math.random()*songArr.length);
//     const songToDisplay = songArr[rndSong];

//     return songToDisplay;
// }

// function generateCombinedMessage () {
//     console.log(`${generateRandomPhrase(phraseArray)}, ${generateRandomPhoto(photoArray)}, ${generateRandomSong(songArray)}`)
    
// }

// generateCombinedMessage()