
for (let didguess = false; didguess ==false;) {
    var guess = prompt("What is the Password", "");
    if (guess =="1264") {
        didguess=true;
    }
}

const primenav = document.getElementById("primenav");
primenav.style.display = "block";
const navtext = document.getElementById("navtext");
const heroimg = document.getElementById("hero");
const buttonfeild = document.getElementById("buttonfeild");
let thispage = "home"
let thisgroup = "";
let thispiece = "";
const backcolor = 'yellow';
const forwardcolor = 'cyan';
var rolls = document.getElementsByClassName("roll");
var backgroundimages = {'home':"red"}
var pagetree={'home':{'Written Peices':{'Exploratory Essay':null, 'Reveiw':null, 'Listicle':null}, 'Visual Peices':{'Comic Strip':null, 'Dichtonomous Diagram':null, "Photo Essay":null},'Audio/Miscellaneous Peices':{'Sales Pitch':null, 'Commercial':null}}}

primenav.addEventListener("mouseover", displayhero);
primenav.addEventListener("mouseleave", hidehero);

function displayhero() {
    heroimg.style.display = "block";
    primenav.style.height = "100px";
//    updatehero();
}
function hidehero() {
    heroimg.style.display = "none";
    primenav.style.height = "30px";
}

/*function updatehero() {
    for (const key in pagetree) {
            var page = pagetree[key];

            if (key==thispage) {
                    for(const group in page){alert(group)}
            } else {
                for(const group in page){
                    var subject = page[group];
                    if (group==thispage) {
                        for(const peice in group) {alert(peice)}
                    }
                }
            }
//Add Logic to find the proper one and add the buttons and correct image

//            const element = object[key];
}
}*/








//Add functions to display a certain page if it is called and another library for a page to be hidden.

loadfunctions = {
    'home':()=>{thisgroup="";loadnewpage('home');sectionbuttons['Written Peices'](forwardcolor);sectionbuttons['Visual Peices'](forwardcolor); sectionbuttons['Audio/Miscellaneous Peices'](forwardcolor);},
    'Written Peices':()=>{thisgroup="Written Peices&#187;";thispiece="";loadnewpage('Written Peices');sectionbuttons['home']();sectionbuttons['Listicle']();sectionbuttons['Exploratory Essay']();sectionbuttons['Reveiw']();},
    'Exploratory Essay': ()=>{thispiece="Exploratory Essay";loadnewpage('Exploratory Essay');sectionbuttons['Written Peices'](backcolor); },
    'Reveiw':()=>{thispiece="Shadowrift Reveiw";loadnewpage('Reveiw');sectionbuttons['Written Peices'](backcolor); }, 
    'Listicle': ()=>{thispiece="Board Game Mechanics Listicle";loadnewpage('Listicle');sectionbuttons['Written Peices'](backcolor); },
    'Visual Peices':()=>{thisgroup="Visual Peices&#187;";thispiece="";loadnewpage('Visual Peices');sectionbuttons['home']();sectionbuttons['Comic Strip']();sectionbuttons['Photo Essay']();sectionbuttons['Dichtonomous Diagram']();},
    'Comic Strip':()=>{thispiece="Comic Strip";loadnewpage('Comic Strip');sectionbuttons['Visual Peices'](backcolor);  }, 
    'Dichtonomous Diagram':()=>{thispiece='Type Of Board Gamer Dichtonomous Diagram';loadnewpage('Dichtonomous Diagram');sectionbuttons['Visual Peices'](backcolor);}, 
    "Photo Essay":()=>{; thispiece="Photo Essay";loadnewpage("Photo Essay");sectionbuttons['Visual Peices'](backcolor)},
    'Audio/Miscellaneous Peices':()=>{thisgroup="Audio/Miscellaneous Peices&#187;";thispiece="";loadnewpage('Audio/Miscellaneous Peices');sectionbuttons['home']();sectionbuttons['Sales Pitch']();sectionbuttons['Commercial']();},
    'Sales Pitch':()=>{ thispiece="Board Gaming Elevator Pitch"; loadnewpage('Sales Pitch');sectionbuttons['Audio/Miscellaneous Peices'](backcolor);},
    'Commercial':()=>{ thispiece="Shadowrift Commercial";loadnewpage('Commercial');sectionbuttons['Audio/Miscellaneous Peices'](backcolor);}
}

sectionbuttons = {
    'home':()=>{addButton("Home", "loadfunctions.home();", backcolor)},
    'Written Peices':(color)=>{addButton("Written Peices", "loadfunctions['Written Peices']()",color)},
    'Exploratory Essay':()=>{addButton("Exploratory Essay", "loadfunctions['Exploratory Essay']()", forwardcolor)},
    'Reveiw':()=>{addButton('Reveiw', "loadfunctions['Reveiw']()", forwardcolor)},
    'Listicle':()=>{addButton('Listicle', "loadfunctions['Listicle']()", forwardcolor)},
    'Visual Peices': (color)=>{addButton('Visual Peices', "loadfunctions['Visual Peices']()",color)},
    'Comic Strip':()=>{addButton('Comic Strip', "loadfunctions['Comic Strip']()", forwardcolor)},
    'Photo Essay':()=>{addButton('Photo Essay', "loadfunctions['Photo Essay']()", forwardcolor)},
    'Dichtonomous Diagram':()=>{addButton('Dichtonomous Diagram', "loadfunctions['Dichtonomous Diagram']()", forwardcolor)},
    'Audio/Miscellaneous Peices': (color)=>{addButton('Audio/Miscellaneous Peices', "loadfunctions['Audio/Miscellaneous Peices']()",color)},
    'Commercial':()=>{addButton('Commercial', "loadfunctions['Commercial']()", forwardcolor)},
    'Sales Pitch':()=>{addButton('Sales Pitch', "loadfunctions['Sales Pitch']()", forwardcolor);}
}

function addButton(name, callback, color) {
    const newButton = document.createElement("button");
    newButton.setAttribute("onclick", callback);
    newButton.style.cssText = "background-color: "+color;
    const text = document.createTextNode(name);
    newButton.appendChild(text);
    buttonfeild.appendChild(newButton)
}

function loadnewpage(page) {
//    addButton(page, "loadfunctions['"+page+"']");
navtext.innerHTML = "Home &#187;"+thisgroup+thispiece;
buttonfeild.innerHTML = "";
document.getElementById(thispage).style.display = "none";
document.getElementById(page).style.display= "block";
thispage = page;
for (let roll = 0; roll < rolls.length; roll++) {rolls[roll].style.height="35px";}
}
function rollout(ind) {rolls[ind].style.height = "auto";}
loadfunctions.home();

for (let index = 0; index < rolls.length; index++) {
    rolls[index].onclick = ()=>{rollout(index);}
}
for (let index = 0; index < document.getElementsByTagName("a").length; index++) {
    document.getElementsByTagName("a")[index].target="_blank";
}