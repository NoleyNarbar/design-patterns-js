var handshake = true;
var eyeContact = true;
var distance = true;
var ageGreeter = 30;
var ageGreeted = 40;
var gender = female;

var respect = "Nice to meet you";
var disrespect = "What's going on here?";

function foreignerGreeting(handshake, eyeContact, distance){
        if(handshake, eyeContact, distance) {
            return console.log(respect);
        } else {
            return console.log(disrespect);
        }
}

function localGreeting(gender, ageGreeted){
    const gender = (type) => type === male ? handshake : !handshake
    const seniority = (ageGreeted) => ageGreeted > 40 ? bow : !bow;
    if(gender === "female"){
        return !handshake, !eyeContact, distance;
    }
    else if(bow){
        return !handshake, !eyeContact, !distance;
    }
         else {
         return handshake, eyeContact, distance;
         } 
    
    }

//adapter interface 

function GreetingAdapter(){
    var greeting = new localGreeting();
    localGreeting(gender, ageGreeted);


    return {
            
    }
}


foreignerGreeting(handshake, eyeContact, distance);


