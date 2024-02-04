// Anneke Johnson
// CMPT 276

var num = 0
let questions = ["2^2?", "2^3?", "2^4?", "2^5?", "2^6?"]
let answers = ["22", "2", "0", "4", "4", "8", "44", "16", "12", "-16", "16", "8", "32",
                "76", "0", "1", "8", "3232", "32", "64"]
let userans = [0, 0, 0, 0, 0]
let previous = document.getElementById("prev")
let nextq = document.getElementById("next")
let subquiz = document.getElementById("submit")
newQuestion()


// add function for next
nextq.addEventListener('click', nextButton) 
previous.addEventListener('click', prevButton)
subquiz.addEventListener('click', submitButton)
document.getElementById("prev").style.visibility = "hidden"
document.getElementById("results").style.visibility = "hidden"

// clear question, add new one
function newQuestion(){
    let quiz = document.getElementsByName("ans")
    let checked = null
    let checknum = 0
    for (let i=0; i<4; i++){
        if (quiz[i].checked){
            checked = quiz[i]
            checknum = i
        }
    }
    if (!(checked===null)){
        quiz[checknum].checked = false
    }
    document.getElementById("question").innerHTML = questions[num]
    document.getElementById("optA").innerHTML = answers[4*num]
    document.getElementById("optB").innerHTML = answers[4*num+1]
    document.getElementById("optC").innerHTML = answers[4*num+2]
    document.getElementById("optD").innerHTML = answers[4*num+3]

}

// next
function nextButton(){
    let quiz = document.getElementsByName("ans")
    let checked = null
    for (let i=0; i<4; i++){
        if (quiz[i].checked){
            checked = quiz[i]
        }
    }
    if (checked===null && userans[num]===0){
        alert("You have to select an answer first!")
    }
    else{
        if(!(checked===null)){
            let choice = parseInt(checked.value)
            userans[num] = answers[4*num+choice]
        }
        num++
        newQuestion()
        document.getElementById("prev").style.visibility = "visible"
        if (num===4){
            document.getElementById("next").style.visibility = "hidden"
        }
    }
    
}

// previous
function prevButton(){
    num--
    newQuestion()
    if (num===0){
        document.getElementById("prev").style.visibility = "hidden"
    }
    document.getElementById("next").style.visibility = "visible"
}

// submit
function submitButton(){
    let quiz = document.getElementsByName("ans")
    let checked = null
    for (let i=0; i<4; i++){
        if (quiz[i].checked){
            checked = quiz[i]
        }
    }
    if (checked===null){
        alert("You have to select an answer first!")
    }
    else{
        let choice = parseInt(checked.value)
        userans[num] = answers[4*num+choice]

        // print results
        document.getElementById("myQuiz").style.display = "none"
        document.getElementById("results").style.visibility = "visible"
        let tally = 0
        for (let i = 0; i<userans.length; i++){
            let correct = 2**(i+2)
            document.getElementById("show").innerHTML += "Question " + (i+1) + ": </br>"
            for (let j = 0; j<4; j++){
                document.getElementById("show").innerHTML += answers[i*4+j] + "</br>"
            }
            document.getElementById("show").innerHTML += "You selected " + userans[i] + "! </br>"
            if (parseInt(userans[i])===parseInt(correct)){
                document.getElementById("show").innerHTML += "That's the correct answer! Good job! </br>"
                tally++
            }
            else{
                document.getElementById("show").innerHTML += "The correct answer is " + correct + "</br>"
            }
        }
        document.getElementById("show").innerHTML += "Your final score is " +tally+"/5!"
    }
}
