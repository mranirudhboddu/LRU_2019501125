const str = "Anirudh"
const string1 = "Anirudh is good programmer"
const letter = 'o'

function countBs(str1) {
    count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "B") {
            count++;
        }

    }
    console.log(count)
    // return count
    }

countBs(str)    

function countChar(string,letter) {
    count = 0;
    // letter = 'i'
    for(let i = 0; i<string.length;i++) {
        if(string[i] === letter) {
            count++;
        }
    }
    console.log(count)
    
}
countChar(string1,letter)