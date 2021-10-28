function vowelBack(s) {
    
    let vowels = ["a", "e", "i", "o", "u"]
    let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let res = ""
    let changed;
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let subtractedIndex;
         //find its index in the alphabets
        let alpIndex = alphabets.indexOf(char)

        if (char == "o" || char == "c") {
            subtractedIndex = alpIndex - 1
            changed = alphabets[subtractedIndex]
            if (changed == "c" || changed == "o" || changed == "d" || changed == "e") {
                res += char
            } else {
                res += changed
            }

        }
        if (char == "d" ) {
            subtractedIndex = alpIndex - 3
            changed = alphabets[subtractedIndex]
            if (changed == "c" || changed == "o" || changed == "d" || changed == "e") {
                res += char
            } else {
                res += changed
            }

        }
        if (char == "e" ) {
            subtractedIndex = alpIndex - 4
            changed = alphabets[subtractedIndex]
            if (changed == "c" || changed == "o" || changed == "d" || changed == "e") {
                res += char
            } else {
                res += changed
            }

        }
        
         //check if its vowel
        if (vowels.includes(char)) {          
            //remove 5 index from it
            subtractedIndex = alpIndex - 5
            if (subtractedIndex < 0) {
                subtractedIndex = 26 - 5
            //replace it with the alphabet of the new index
                 changed = alphabets[subtractedIndex]
                 if (changed == "c" || changed == "o" || changed == "d" || changed == "e") {
                     res += char
                 } else {
                     res += changed
                 }
            }
                        
                  
        } else {
            //move cons 9 steps
            subtractedIndex = alpIndex + 9
            if (subtractedIndex > 25) {
                subtractedIndex = 0
            }
             changed = alphabets[subtractedIndex]
             if (changed == "c" || changed == "o" || changed == "d" || changed == "e") {
                 res += char
             } else {
                 res += changed
             }
        }
        
    }
    console.log(res)
    return res
}
vowelBack("testcase")