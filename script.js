//write code here
const dailyVibe = {
    "phrase": ['Success is not final; failure is not fatal: it is the courage to continue that counts. – Winston Churchill', 'Play by the rules, but be ferocious. – Phil Knight', 'Business opportunities are like buses, there’s always another one coming. – Richard Branson', 'Every problem is a gift—without problems we would not grow. – Anthony Robbins', 'You only have to do a few things right in your life so long as you don’t do too many things wrong. – Warren Buffett', 'Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau', 'And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom. – Anaïs Nin', 'There’s no shortage of remarkable ideas, what’s missing is the will to execute them. – Seth Godin', 'I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite. – G.K. Chesterton', 'I don’t know the word ‘quit.’ Either I never did, or I have abolished it. – Susan Butcher', 'Far and away the best prize that life offers is the chance to work hard at work worth doing. – Theodore Roosevelt', 'If you really look closely, most overnight successes took a long time. – Steve Jobs', 'Almost everything worthwhile carries with it some sort of risk, whether it’s starting a new business, whether it’s leaving home, whether it’s getting married, or whether it’s flying into space. – Chris Hadfield', 'Even if you are on the right track, you’ll get run over if you just sit there. – Will Rodgers', 'The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. – Barack Obama', 'Forget past mistakes. Forget failures. Forget everything except what you’re going to do now and do it. – William Durant', 'Imagination is everything. It is the preview of life’s coming attractions. – Albert Einstein'],

    // "photo": ['1','2','3'],
    // "song": ['$','!','&']
}
const rndPhrase = Math.floor(Math.random()*dailyVibe["phrase"].length);
// const rndPhoto = Math.floor(Math.random()*dailyVibe["photo"].length);
// const rndSong = Math.floor(Math.random()*dailyVibe["song"].length);

const phraseEl = document.getElementById("phrase")
// const photoEl = document.getElementById("photo")
// const songEl = document.getElementById("song")

function dailyVibeIterator (obj) {
    for (let i in obj) {
        switch(i) {
            case "phrase":
                let newPhrase = obj[i][rndPhrase]
                phraseEl.innerHTML = newPhrase;
                break;
            // case "photo":
            //     let newPhoto = obj[i][rndPhoto]
            //     photoEl.innerHTML = newPhoto;
            //     break;
            // case "song":
            //     let newSong = obj[i][rndSong]
            //     songEl.innerHTML = newSong;
            //     break;

                

        }
        
    }
    
}


dailyVibeIterator(dailyVibe)


// const phraseArray = ['a', 'b', 'c']
// const photoArray = ['1','2','3']
// const songArray = ['$','!','&']

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