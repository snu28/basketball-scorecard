let homeScoreEl= document.getElementById('home-score')
let awayScoreEl= document.getElementById('away-score')


homeCount=0
awayCount=0

homeScoreEl.textContent=homeCount
awayScoreEl.textContent=awayCount

function addone(){
    homeCount+=1
    homeScoreEl.textContent=homeCount

}


function addtwo(){
    homeCount+=2
    homeScoreEl.textContent=homeCount

}

function addthree(){
    homeCount+=3
    homeScoreEl.textContent=homeCount

}

function addoneA(){
    awayCount+=1
    awayScoreEl.textContent=awayCount

}

function addtwoA(){
    awayCount+=2
    awayScoreEl.textContent=awayCount

}


function addthreeA(){
    awayCount+=3
    awayScoreEl.textContent=awayCount

}



function clearscore(){
    homeCount=0
    awayCount=0

    awayScoreEl.textContent=0
    homeScoreEl.textContent=0

    

}