$(document).on('change', 'input[type=checkbox]', function(e) {autofill(e);});
window.addEventListener('input', function(e) {autofill(e);}, false);
function handle(e) {
  if (e.keyCode === 13) {
    e.preventDefault(); // Ensure it is only this code that runs
    
window.location.href = '/?'+document.getElementById("loginName").value;
  }
}
function init() {
  if (location.href.indexOf("?") != -1) {
    // Gamemode
    user = window.location.href.split('#').pop().trim();
    var login = document.getElementById("login");
    login.style.display = "none"
          var wrapper = document.getElementById("wrapper");
    wrapper.style.display = "block"
    load();
    
setInterval(function(){
    save()}, 30000)
  } else {
        var login = document.getElementById("login");
    login.style.display = "block"
        var wrapper = document.getElementById("wrapper");
    wrapper.style.display = "none"
    // Lobbymode
  
  }
}
function autofill(e) {
  switch(e.target.className) {
    // Automatic inputs
    // Energy Armor Class
    case "EACarmor" :
      if (isNaN($('.EACarmor').val())){$('.EACarmor').val(0);}
      break;
    // Saving throws
    // Fortitude
    case "fortbase":
      if (isNaN($('.fortbase').val())){$('.fortbase').val(0);}
    case "fortmisc" :
      if (isNaN($('.fortmisc').val())){$('.fortmisc').val(0);}
      updateFort();
      break;
    // Reflex
    case "refbase" :
      if (isNaN($('.refbase').val())){$('.refbase').val(0);}
    case "refmisc" :
      if (isNaN($('.refmisc').val())){$('.refmisc').val(0);}
      updateRef();
      break;
    // Will
    case "willbase" :
      if (isNaN($('.willbase').val())){$('.willbase').val(0);}
    case "willmisc" :
      if (isNaN($('.willmisc').val())){$('.willmisc').val(0);}
      updateWill();
      break;
    // Attack Bonuses
    // Melee
    case "BABmelee" :
      if (isNaN($('.BABmelee').val())){$('.BABmelee').val(0);}
      updateBAB($('.BABmelee').val());
    case "meleemisc" :
      if (isNaN($('.meleemisc').val())){$('.meleemisc').val(0);}
      updateMelee();
      break;
    // Ranged
    case "BABrange" :
      if (isNaN($('.BABrange').val())){$('.BABrange').val(0);}
      updateBAB($('.BABrange').val());
    case "rangemisc" :
      if (isNaN($('.rangemisc').val())){$('.rangemisc').val(0);}
      updateRange();
      break;
    // Thrown
    case "BABthrown" :
      if (isNaN($('.BABthrown').val())){$('.BABthrown').val(0);}
      updateBAB($('.BABthrown').val());
    case "thrownmisc" :
      if (isNaN($('.thrownmisc').val())){$('.thrownmisc').val(0);}
      updateThrown();
      break;
    // Initiative
    case "initmiscmod" :
      if (isNaN($('.initmiscmod').val())){$('.initmiscmod').val(0);}
      updateInitiative();
      break;
    // Ability Scores
    // Strength
    case "str" :
      if (isNaN($('.str').val())){$('.str').val(0);}
      updateStrMod();
      updateAthletics();
      updateMelee();
      updateThrown();
      break;
    case "strmod" :
      if (isNaN($('.strmod').val())){$('.strmod').val(0);}
      updateUStrMod();
      break;
    // Dexterity
    case "dex" :
      if (isNaN($('.dex').val())){$('.dex').val(0);}
      updateDexMod();
      updateInitiative();
      updateEAC();
      updateKAC();
      updateCMD();
      updateRef();
      updateRange();
      updateAcrobatics();
      updatePiloting();
      updateSleightOfHand();
      updateStealth();
      break;
    case "dexmod" :
      if (isNaN($('.dexmod').val())){$('.dexmod').val(0);}
      updateUDexMod();
      break;
    // Constitution
    case "con" :
      if (isNaN($('.con').val())){$('.con').val(0);}
      updateConMod();
      updateFort();
      break;
    case "conmod" :
      if (isNaN($('.conmod').val())){$('.conmod').val(0);}
      updateUConMod();
      break;
    // Intelligence
    case "int" :
      if (isNaN($('.int').val())){$('.int').val(0);}
      updateIntMod();
      updateComputers();
      updateCulture();
      updateEngineering();
      updateLifeScience();
      updateMedicine();
      updatePhysicalScience();
      break;
    case "intmod" :
      if (isNaN($('.intmod').val())){$('.intmod').val(0);}
      updateUIntMod();
      break;
    // Wisdom
    case "wis" :
      if (isNaN($('.wis').val())){$('.wis').val(0);}
      updateWisMod();
      updateWill();
      updateMysticism();
      updatePerception();
      updateSenseMotive();
      updateSurvival();
      break;
    case "wismod" :
      if (isNaN($('.wismod').val())){$('.wismod').val(0);}
      updateUWisMod();
      break;
    // Charisma
    case "cha" :
      if (isNaN($('.cha').val())){$('.cha').val(0);}
      updateChaMod();
      updateBluff();
      updateDiplomacy();
      updateDisguise();
      updateIntimidate();
      break;
    case "chamod" :
      if (isNaN($('.chamod').val())){$('.chamod').val(0);}
      updateUChaMod();
      break;
    // Skills
    // Acrobatics
    case "acrobaticsCS" :
      if (isNaN($('.acrobaticsCS').val())){$('.acrobaticsCS').val(0);}
    case "acrobaticsranks" :
      if (isNaN($('.acrobaticsranks').val())){$('.acrobaticsranks').val(0);}
    case "acrobaticsclassbonus" :
      if (isNaN($('.acrobaticsclassbonus').val())){$('.acrobaticsclassbonus').val(0);}
    case "acrobaticsmiscmod" :
      if (isNaN($('.acrobaticsmiscmod').val())){$('.acrobaticsmiscmod').val(0);}
      updateAcrobatics();
      break;
    // Athletics
    case "athleticsCS" :
      if (isNaN($('.athleticsCS').val())){$('.athleticsCS').val(0);}
    case "athleticsranks" :
      if (isNaN($('.athleticsranks').val())){$('.athleticsranks').val(0);}
    case "athleticsclassbonus" :
      if (isNaN($('.athleticsclassbonus').val())){$('.athleticsclassbonus').val(0);}
    case "athleticsmiscmod" :
      if (isNaN($('.athleticsmiscmod').val())){$('.athleticsmiscmod').val(0);}
      updateAthletics();
      break;
    // Bluff
    case "bluffCS" :
      if (isNaN($('.bluffCS').val())){$('.bluffCS').val(0);}
    case "bluffranks" :
      if (isNaN($('.bluffranks').val())){$('.bluffranks').val(0);}
    case "bluffclassbonus" :
      if (isNaN($('.bluffclassbonus').val())){$('.bluffclassbonus').val(0);}
    case "bluffmiscmod" :
      if (isNaN($('.bluffmiscmod').val())){$('.bluffmiscmod').val(0);}
      updateBluff();
      break;
    // Computers
    case "computersCS" :
      if (isNaN($('.computersCS').val())){$('.computersCS').val(0);}
    case "computersranks" :
      if (isNaN($('.computersranks').val())){$('.computersranks').val(0);}
    case "computersclassbonus" :
      if (isNaN($('.computersclassbonus').val())){$('.computersclassbonus').val(0);}
    case "computersmiscmod" :
      if (isNaN($('.computersmiscmod').val())){$('.computersmiscmod').val(0);}
      updateComputers();
			break;
    // Culture
    case "cultureCS" :
      if (isNaN($('.cultureCS').val())){$('.cultureCS').val(0);}
    case "cultureranks" :
      if (isNaN($('.cultureranks').val())){$('.cultureranks').val(0);}
    case "cultureclassbonus" :
      if (isNaN($('.cultureclassbonus').val())){$('.cultureclassbonus').val(0);}
    case "culturemiscmod" :
      if (isNaN($('.culturemiscmod').val())){$('.culturemiscmod').val(0);}
      updateCulture();
			break;
    // Diplomacy
    case "diplomacyCS" :
      if (isNaN($('.diplomacyCS').val())){$('.diplomacyCS').val(0);}
    case "diplomacyranks" :
      if (isNaN($('.diplomacyranks').val())){$('.diplomacyranks').val(0);}
    case "diplomacyclassbonus" :
      if (isNaN($('.diplomacyclassbonus').val())){$('.diplomacyclassbonus').val(0);}
    case "diplomacymiscmod" :
      if (isNaN($('.diplomacymiscmod').val())){$('.diplomacymiscmod').val(0);}
      updateDiplomacy();
			break;
    // Disguise
    case "disguiseCS" :
      if (isNaN($('.disguiseCS').val())){$('.disguiseCS').val(0);}
    case "disguiseranks" :
      if (isNaN($('.disguiseranks').val())){$('.disguiseranks').val(0);}
    case "disguiseclassbonus" :
      if (isNaN($('.disguiseclassbonus').val())){$('.disguiseclassbonus').val(0);}
    case "disguisemiscmod" :
      if (isNaN($('.disguisemiscmod').val())){$('.disguisemiscmod').val(0);}
      updateDisguise();
			break;
    // Engineering
    case "engineeringCS" :
      if (isNaN($('.engineeringCS').val())){$('.engineeringCS').val(0);}
    case "engineeringranks" :
      if (isNaN($('.engineeringranks').val())){$('.engineeringranks').val(0);}
    case "engineeringclassbonus" :
      if (isNaN($('.engineeringclassbonus').val())){$('.engineeringclassbonus').val(0);}
    case "engineeringmiscmod" :
      if (isNaN($('.engineeringmiscmod').val())){$('.engineeringmiscmod').val(0);}
      updateEngineering();
			break;
    // Intimidate
    case "intimidateCS" :
      if (isNaN($('.intimidateCS').val())){$('.intimidateCS').val(0);}
    case "intimidateranks" :
      if (isNaN($('.intimidateranks').val())){$('.intimidateranks').val(0);}
    case "intimidateclassbonus" :
      if (isNaN($('.intimidateclassbonus').val())){$('.intimidateclassbonus').val(0);}
    case "intimidatemiscmod" :
      if (isNaN($('.intimidatemiscmod').val())){$('.intimidatemiscmod').val(0);}
      updateIntimidate();
			break;
    // Life Science
    case "lifescienceCS" :
      if (isNaN($('.lifescienceCS').val())){$('.lifescienceCS').val(0);}
    case "lifescienceranks" :
      if (isNaN($('.lifescienceranks').val())){$('.lifescienceranks').val(0);}
    case "lifescienceclassbonus" :
      if (isNaN($('.lifescienceclassbonus').val())){$('.lifescienceclassbonus').val(0);}
    case "lifesciencemiscmod" :
      if (isNaN($('.lifesciencemiscmod').val())){$('.lifesciencemiscmod').val(0);}
      updateLifeScience();
			break;
    // Medicine
    case "medicineCS" :
      if (isNaN($('.medicineCS').val())){$('.medicineCS').val(0);}
    case "medicineranks" :
      if (isNaN($('.medicineranks').val())){$('.medicineranks').val(0);}
    case "medicineclassbonus" :
      if (isNaN($('.medicineclassbonus').val())){$('.medicineclassbonus').val(0);}
    case "medicinemiscmod" :
      if (isNaN($('.medicinemiscmod').val())){$('.medicinemiscmod').val(0);}
      updateMedicine();
			break;
    // Mysticism
    case "mysticismCS" :
      if (isNaN($('.mysticismCS').val())){$('.mysticismCS').val(0);}
    case "mysticismranks" :
      if (isNaN($('.mysticismranks').val())){$('.mysticismranks').val(0);}
    case "mysticismclassbonus" :
      if (isNaN($('.mysticismclassbonus').val())){$('.mysticismclassbonus').val(0);}
    case "mysticismmiscmod" :
      if (isNaN($('.mysticismmiscmod').val())){$('.mysticismmiscmod').val(0);}
      updateMysticism();
			break;
    // Perception
    case "perceptionCS" :
      if (isNaN($('.perceptionCS').val())){$('.perceptionCS').val(0);}
    case "perceptionranks" :
      if (isNaN($('.perceptionranks').val())){$('.perceptionranks').val(0);}
    case "perceptionclassbonus" :
      if (isNaN($('.perceptionclassbonus').val())){$('.perceptionclassbonus').val(0);}
    case "perceptionmiscmod" :
      if (isNaN($('.perceptionmiscmod').val())){$('.perceptionmiscmod').val(0);}
      updatePerception();
			break;
    // Physical Science
    case "physicalscienceCS" :
      if (isNaN($('.physicalscienceCS').val())){$('.physicalscienceCS').val(0);}
    case "physicalscienceranks" :
      if (isNaN($('.physicalscienceranks').val())){$('.physicalscienceranks').val(0);}
    case "physicalscienceclassbonus" :
      if (isNaN($('.physicalscienceclassbonus').val())){$('.physicalscienceclassbonus').val(0);}
    case "physicalsciencemiscmod" :
      if (isNaN($('.physicalsciencemiscmod').val())){$('.physicalsciencemiscmod').val(0);}
      updatePhysicalScience();
			break;
    // Piloting
    case "pilotingCS" :
      if (isNaN($('.pilotingCS').val())){$('.pilotingCS').val(0);}
    case "pilotingranks" :
      if (isNaN($('.pilotingranks').val())){$('.pilotingranks').val(0);}
    case "pilotingclassbonus" :
      if (isNaN($('.pilotingclassbonus').val())){$('.pilotingclassbonus').val(0);}
    case "pilotingmiscmod" :
      if (isNaN($('.pilotingmiscmod').val())){$('.pilotingmiscmod').val(0);}
      updatePiloting();
			break;
    // Profession 0
    case "profession0CS" :
      if (isNaN($('.profession0CS').val())){$('.profession0CS').val(0);}
    case "profession0ranks" :
      if (isNaN($('.profession0ranks').val())){$('.profession0ranks').val(0);}
    case "profession0classbonus" :
      if (isNaN($('.profession0classbonus').val())){$('.profession0classbonus').val(0);}
    case "profession0miscmod" :
      if (isNaN($('.profession0miscmod').val())){$('.profession0miscmod').val(0);}
      updateProfession0();
			break;
    // Profession 1
    case "profession1CS" :
      if (isNaN($('.profession1CS').val())){$('.profession1CS').val(0);}
    case "profession1ranks" :
      if (isNaN($('.profession1ranks').val())){$('.profession1ranks').val(0);}
    case "profession1classbonus" :
      if (isNaN($('.profession1classbonus').val())){$('.profession1classbonus').val(0);}
    case "profession1miscmod" :
      if (isNaN($('.profession1miscmod').val())){$('.profession1miscmod').val(0);}
      updateProfession1();
			break;
    // Sense Motive
    case "sensemotiveCS" :
      if (isNaN($('.sensemotiveCS').val())){$('.sensemotiveCS').val(0);}
    case "sensemotiveranks" :
      if (isNaN($('.sensemotiveranks').val())){$('.sensemotiveranks').val(0);}
    case "sensemotiveclassbonus" :
      if (isNaN($('.sensemotiveclassbonus').val())){$('.sensemotiveclassbonus').val(0);}
    case "sensemotivemiscmod" :
      if (isNaN($('.sensemotivemiscmod').val())){$('.sensemotivemiscmod').val(0);}
      updateSenseMotive();
			break;
    // Sleight of Hand
    case "sleightofhandCS" :
      if (isNaN($('.sleightofhandCS').val())){$('.sleightofhandCS').val(0);}
    case "sleightofhandranks" :
      if (isNaN($('.sleightofhandranks').val())){$('.sleightofhandranks').val(0);}
    case "sleightofhandclassbonus" :
      if (isNaN($('.sleightofhandclassbonus').val())){$('.sleightofhandclassbonus').val(0);}
    case "sleightofhandmiscmod" :
      if (isNaN($('.sleightofhandmiscmod').val())){$('.sleightofhandmiscmod').val(0);}
      updateSleightOfHand();
			break;
    // Stealth
    case "stealthCS" :
      if (isNaN($('.stealthCS').val())){$('.stealthCS').val(0);}
    case "stealthranks" :
      if (isNaN($('.stealthranks').val())){$('.stealthranks').val(0);}
    case "stealthclassbonus" :
      if (isNaN($('.stealthclassbonus').val())){$('.stealthclassbonus').val(0);}
    case "stealthmiscmod" :
      if (isNaN($('.stealthmiscmod').val())){$('.stealthmiscmod').val(0);}
      updateStealth();
			break;
    // Survival
    case "survivalCS" :
      if (isNaN($('.survivalCS').val())){$('.survivalCS').val(0);}
    case "survivalranks" :
      if (isNaN($('.survivalranks').val())){$('.survivalranks').val(0);}
    case "survivalclassbonus" :
      if (isNaN($('.survivalclassbonus').val())){$('.survivalclassbonus').val(0);}
    case "survivalmiscmod" :
      if (isNaN($('.survivalmiscmod').val())){$('.survivalmiscmod').val(0);}
      updateSurvival();
			break;
  }
}
function updateBAB(value){
  $('.BABmelee').val(value);
  $('.BABrange').val(value);
  updateMelee();
  updateRange();
}
function parseint(value) {
  if (value == '') {
    return 0;
  } else {
    return parseInt(value);
  }
}
function updateEAC() {$('.EACtotal').val(10 + parseint($('.dexm').val()) + parseint($('.EACarmor').val()));}
function updateFort() {$('.forttotal').val(parseint($('.conm').val()) + parseint($('.fortbase').val()) );}
function updateRef() {$('.reftotal').val(parseint($('.dexm').val()) + parseint($('.refbase').val()) );}
function updateWill() {$('.willtotal').val(parseint($('.wism').val()) + parseint($('.willbase').val()) );}
function updateMelee() {$('.meleetotal').val(parseint($('.strm').val()) + parseint($('.BABmelee').val()) );}
function updateRange() {$('.rangetotal').val(parseint($('.dexm').val()) + parseint($('.BABrange').val()) );}
function updateThrown() {$('.throwntotal').val(parseint($('.strm').val()) + parseint($('.BABthrown').val()) + parseint($('.thrownmisc').val()));}
function updateInitiative() {$('.inittotal').val(parseint($('.dexm').val()) );}
function updateStrMod() {$('.strm').val(Math.floor((parseint($('.str').val()) - 10) / 2));}
function updateDexMod() {$('.dexm').val(Math.floor((parseint($('.dex').val()) - 10) / 2));}
function updateConMod() {$('.conm').val(Math.floor((parseint($('.con').val()) - 10) / 2));}
function updateIntMod() {$('.intm').val(Math.floor((parseint($('.int').val()) - 10) / 2));}
function updateWisMod() {$('.wism').val(Math.floor((parseint($('.wis').val()) - 10) / 2));}
function updateChaMod() {$('.cham').val(Math.floor((parseint($('.cha').val()) - 10) / 2));}
function updateUStrMod() {$('.strmodm').val(Math.floor((parseint($('.strmod').val()) - 10) / 2));}
function updateUDexMod() {$('.dexmodm').val(Math.floor((parseint($('.dexmod').val()) - 10) / 2));}
function updateUConMod() {$('.conmodm').val(Math.floor((parseint($('.conmod').val()) - 10) / 2));}
function updateUIntMod() {$('.intmodm').val(Math.floor((parseint($('.intmod').val()) - 10) / 2));}
function updateUWisMod() {$('.wismodm').val(Math.floor((parseint($('.wismod').val()) - 10) / 2));}
function updateUChaMod() {$('.chamodm').val(Math.floor((parseint($('.chamod').val()) - 10) / 2));}
function updateAcrobatics() {$('.acrobaticstotal').val(parseint($('.acrobaticsranks').val()) + parseint($('.dexm').val()) + (3 * $('.acrobaticsCS:checked').is(':checked')));}
function updateAthletics() {$('.athleticstotal').val(parseint($('.athleticsranks').val()) + parseint($('.wism').val()) + (3 * $('.athleticsCS:checked').is(':checked')));}
function updateBluff() {$('.blufftotal').val(parseint($('.bluffranks').val()) + parseint($('.cham').val()) + (3 * $('.bluffCS:checked').is(':checked')));}
function updateComputers() {$('.computerstotal').val(parseint($('.computersranks').val()) + parseint($('.intm').val()) + (3 * $('.computersCS:checked').is(':checked')));}
function updateCulture() {$('.culturetotal').val(parseint($('.cultureranks').val()) +  parseint($('.intm').val()) + (3 * $('.cultureCS:checked').is(':checked')));}
function updateDiplomacy() {$('.diplomacytotal').val(parseint($('.diplomacyranks').val()) + parseint($('.cham').val()) + (3 * $('.diplomacyCS:checked').is(':checked')));}
function updateDisguise() {$('.disguisetotal').val(parseint($('.disguiseranks').val()) +  parseint($('.cham').val()) + (3 * $('.disguiseCS:checked').is(':checked')));}
function updateEngineering() {$('.engineeringtotal').val(parseint($('.engineeringranks').val()) +  parseint($('.intm').val()) + (3 * $('.engineeringCS:checked').is(':checked')));}
function updateIntimidate() {$('.intimidatetotal').val(parseint($('.intimidateranks').val()) +  parseint($('.cham').val()) + (3 * $('.intimidateCS:checked').is(':checked')));}
function updateLifeScience() {$('.lifesciencetotal').val(parseint($('.lifescienceranks').val()) + parseint($('.intm').val()) + (3 * $('.lifescienceCS:checked').is(':checked')));}
function updateMedicine() {$('.medicinetotal').val(parseint($('.medicineranks').val()) + parseint($('.intm').val()) + (3 * $('.medicineCS:checked').is(':checked')));}
function updateMysticism() {$('.mysticismtotal').val(parseint($('.mysticismranks').val()) + parseint($('.wism').val()) + (3 * $('.mysticismCS:checked').is(':checked')));}
function updatePerception() {$('.perceptiontotal').val(parseint($('.perceptionranks').val())  + parseint($('.wism').val()) + (3 * $('.perceptionCS:checked').is(':checked')));}
function updatePhysicalScience() {$('.physicalsciencetotal').val(parseint($('.physicalscienceranks').val()) + parseint($('.intm').val()) + (3 * $('.physicalscienceCS:checked').is(':checked')));}
function updatePiloting() {$('.pilotingtotal').val(parseint($('.pilotingranks').val()) +  parseint($('.dexm').val()) + (3 * $('.pilotingCS:checked').is(':checked')));}
function updateProfession0() {$('.profession0total').val(parseint($('.profession0ranks').val()) + parseint($('.profession0mod').val()) + (3 * $('.profession0CS:checked').is(':checked')));}
function updateSenseMotive() {$('.sensemotivetotal').val(parseint($('.sensemotiveranks').val()) +  parseint($('.wism').val()) + (3 * $('.sensemotiveCS:checked').is(':checked')));}
function updateSleightOfHand() {$('.sleightofhandtotal').val(parseint($('.sleightofhandranks').val()) + parseint($('.dexm').val()) + (3 * $('.sleightofhandCS:checked').is(':checked')));}
function updateStealth() {$('.stealthtotal').val(parseint($('.stealthranks').val()) + parseint($('.dexm').val()) + (3 * $('.stealthCS:checked').is(':checked')));}
function updateSurvival() {$('.survivaltotal').val(parseint($('.survivalranks').val()) + parseint($('.wism').val()) + (3 * $('.survivalCS:checked').is(':checked')));}
/// Now for the saving and loading functions
function download (text, name, type) {
  var a = document.createElement("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
}
function save() {
    var savebutton = document.getElementById("save");
  savebutton.disabled = true;
  var data = {
    characterinfo: [
      {
        name: $('.name').val(),
        race: $('.race').val(),
        theme: $('.theme').val(),
        class: $('.class').val(),
        player: $('.player').val(),
        size: $('.size').val(),
        speed: $('.speed').val(),
        diety: $('.diety').val(),
        gender: $('.gender').val(),
        height: $('.height').val(),
        weight: $('.weight').val(),
        homeworld: $('.homeworld').val(),
        alignment: $('.alignment').val()
      }
    ],
    healthresolve: [
      {
        totalstamina: $('.totalstamina').val(),
        totalhp: $('.totalhp').val(),
        totalresolve: $('.totalresolve').val(),
        currentstamina: $('.currentstamina').val(),
        currenthp: $('.currenthp').val(),
        currentresolve: $('.currentresolve').val()
      }
    ],
    armorclass: [
      {
        EACarmor: $('.EACarmor').val(),
        EACmisc: $('.EACmisc').val(),
        KACarmor: $('.KACarmor').val(),
        KACmisc: $('.KACmisc').val(),
        dr: $('.DR').val(),
        resistances: $('.resistances').val()
      }
    ],
    savingthrows: [
      {
        fortbase: $('.fortbase').val(),
        fortmisc: $('.fortmisc').val(),
        refbase: $('.refbase').val(),
        refmisc: $('.refmisc').val(),
        willbase: $('.willbase').val(),
        willmisc: $('.willmisc').val()
      }
    ],
    attackbonus: [
      {
        BABmelee: $('.BABmelee').val(),
        BABrange: $('.BABrange').val(),
        BABthrown: $('.BABthrown').val(),
        meleemisc: $('.meleemisc').val(),
        rangemisc: $('.rangemisc').val(),
        thrownmisc: $('.thrownmisc').val()
      }
    ],
    weapons: [
      {
        weapon0: [
          {
            weaponname: $('.weapon0name').val(),
            weaponlevel: $('.weapon0level').val(),
            weaponatk: $('.weapon0atk').val(),
            weapondamage: $('.weapon0damage').val(),
            weaponcrit: $('.weapon0crit').val(),
            weaponrange: $('.weapon0range').val(),
            weapontype: $('.weapon0type').val(),
            weaponspecial: $('.weapon0special').val(),
            weaponammo: $('.weapon0ammo').val()
          }
        ],
        weapon1: [
          {
            weaponname: $('.weapon1name').val(),
            weaponlevel: $('.weapon1level').val(),
            weaponatk: $('.weapon1atk').val(),
            weapondamage: $('.weapon1damage').val(),
            weaponcrit: $('.weapon1crit').val(),
            weaponrange: $('.weapon1range').val(),
            weapontype: $('.weapon1type').val(),
            weaponspecial: $('.weapon1special').val(),
            weaponammo: $('.weapon1ammo').val()
          }
        ],
        weapon2: [
          {
            weaponname: $('.weapon2name').val(),
            weaponlevel: $('.weapon2level').val(),
            weaponatk: $('.weapon2atk').val(),
            weapondamage: $('.weapon2damage').val(),
            weaponcrit: $('.weapon2crit').val(),
            weaponrange: $('.weapon2range').val(),
            weapontype: $('.weapon2type').val(),
            weaponspecial: $('.weapon2special').val(),
            weaponammo: $('.weapon2ammo').val()
          }
        ],
        weapon3: [
          {
            weaponname: $('.weapon3name').val(),
            weaponlevel: $('.weapon3level').val(),
            weaponatk: $('.weapon3atk').val(),
            weapondamage: $('.weapon3damage').val(),
            weaponcrit: $('.weapon3crit').val(),
            weaponrange: $('.weapon3range').val(),
            weapontype: $('.weapon3type').val(),
            weaponspecial: $('.weapon3special').val(),
            weaponammo: $('.weapon3ammo').val()
          }
        ],
        weapon4: [
          {
            weaponname: $('.weapon4name').val(),
            weaponlevel: $('.weapon4level').val(),
            weaponatk: $('.weapon4atk').val(),
            weapondamage: $('.weapon4damage').val(),
            weaponcrit: $('.weapon4crit').val(),
            weaponrange: $('.weapon4range').val(),
            weapontype: $('.weapon4type').val(),
            weaponspecial: $('.weapon4special').val(),
            weaponammo: $('.weapon4ammo').val()
          }
        ],
        weapon5: [
          {
            weaponname: $('.weapon5name').val(),
            weaponlevel: $('.weapon5level').val(),
            weaponatk: $('.weapon5atk').val(),
            weapondamage: $('.weapon5damage').val(),
            weaponcrit: $('.weapon5crit').val(),
            weaponrange: $('.weapon5range').val(),
            weapontype: $('.weapon5type').val(),
            weaponspecial: $('.weapon5special').val(),
            weaponammo: $('.weapon5ammo').val()
          }
        ],
      }
    ],
    initiative: [
      {
        initmiscmod: $('.initmiscmod').val()
      }
    ],
    abilityscores: [
      {
        str: $('.str').val(),
        dex: $('.dex').val(),
        con: $('.con').val(),
        int: $('.int').val(),
        wis: $('.wis').val(),
        cha: $('.cha').val(),
        strmod: $('.strmod').val(),
        dexmod: $('.dexmod').val(),
        conmod: $('.conmod').val(),
        intmod: $('.intmod').val(),
        wismod: $('.wismod').val(),
        chamod: $('.chamod').val()
      }
    ],
    skills: [
      {
        skillranks: $('.skillranks').val(),
        acrobatics: [
          {
            cs:         $('.acrobaticsCS:checked').is(':checked'),
            ranks:      $('.acrobaticsranks').val(),
            classbonus: $('.acrobaticsclassbonus').val(),
            miscmod:    $('.acrobaticsmiscmod').val()
          }
        ],
        athletics: [
          {
            cs:         $('.athleticsCS:checked').is(':checked'),
            ranks:      $('.athleticsranks').val(),
            classbonus: $('.athleticsclassbonus').val(),
            miscmod:    $('.athleticsmiscmod').val()
          }
        ],
        bluff: [
          {
            cs:         $('.bluffCS:checked').is(':checked'),
            ranks:      $('.bluffranks').val(),
            classbonus: $('.bluffclassbonus').val(),
            miscmod:    $('.bluffmiscmod').val()
          }
        ],
        computers: [
          {
            cs:         $('.computersCS:checked').is(':checked'),
            ranks:      $('.computersranks').val(),
            classbonus: $('.computersclassbonus').val(),
            miscmod:    $('.computersmiscmod').val()
          }
        ],
        culture: [
          {
            cs:         $('.cultureCS:checked').is(':checked'),
            ranks:      $('.cultureranks').val(),
            classbonus: $('.cultureclassbonus').val(),
            miscmod:    $('.culturemiscmod').val()
          }
        ],
        diplomacy: [
          {
            cs:         $('.diplomacyCS:checked').is(':checked'),
            ranks:      $('.diplomacyranks').val(),
            classbonus: $('.diplomacyclassbonus').val(),
            miscmod:    $('.diplomacymiscmod').val()
          }
        ],
        disguise: [
          {
            cs:         $('.disguiseCS:checked').is(':checked'),
            ranks:      $('.disguiseranks').val(),
            classbonus: $('.disguiseclassbonus').val(),
            miscmod:    $('.disguisemiscmod').val()
          }
        ],
        engineering: [
          {
            cs:         $('.engineeringCS:checked').is(':checked'),
            ranks:      $('.engineeringranks').val(),
            classbonus: $('.engineeringclassbonus').val(),
            miscmod:    $('.engineeringmiscmod').val()
          }
        ],
        intimidate: [
          {
            cs:         $('.intimidateCS:checked').is(':checked'),
            ranks:      $('.intimidateranks').val(),
            classbonus: $('.intimidateclassbonus').val(),
            miscmod:    $('.intimidatemiscmod').val()
          }
        ],
        lifescience: [
          {
            cs:         $('.lifescienceCS:checked').is(':checked'),
            ranks:      $('.lifescienceranks').val(),
            classbonus: $('.lifescienceclassbonus').val(),
            miscmod:    $('.lifesciencemiscmod').val()
          }
        ],
        medicine: [
          {
            cs:         $('.medicineCS:checked').is(':checked'),
            ranks:      $('.medicineranks').val(),
            classbonus: $('.medicineclassbonus').val(),
            miscmod:    $('.medicinemiscmod').val()
          }
        ],
        mysticism: [
          {
            cs:         $('.mysticismCS:checked').is(':checked'),
            ranks:      $('.mysticismranks').val(),
            classbonus: $('.mysticismclassbonus').val(),
            miscmod:    $('.mysticismmiscmod').val()
          }
        ],
        perception: [
          {
            cs:         $('.perceptionCS:checked').is(':checked'),
            ranks:      $('.perceptionranks').val(),
            classbonus: $('.perceptionclassbonus').val(),
            miscmod:    $('.perceptionmiscmod').val()
          }
        ],
        physicalscience: [
          {
            cs:         $('.physicalscienceCS:checked').is(':checked'),
            ranks:      $('.physicalscienceranks').val(),
            classbonus: $('.physicalscienceclassbonus').val(),
            miscmod:    $('.physicalsciencemiscmod').val()
          }
        ],
        piloting: [
          {
            cs:         $('.pilotingCS:checked').is(':checked'),
            ranks:      $('.pilotingranks').val(),
            classbonus: $('.pilotingclassbonus').val(),
            miscmod:    $('.pilotingmiscmod').val()
          }
        ],
        profession0: [
          {
            cs:         $('.profession0CS:checked').is(':checked'),
            ranks:      $('.profession0ranks').val(),
            classbonus: $('.profession0classbonus').val(),
            miscmod:    $('.profession0miscmod').val(),
            profmod:    $('.profession0mod').val(),
            profname:   $('.profession0name').val()
          }
        ],
        profession1: [
          {
            cs:         $('.profession1CS:checked').is(':checked'),
            ranks:      $('.profession1ranks').val(),
            classbonus: $('.profession1classbonus').val(),
            miscmod:    $('.profession1miscmod').val(),
            profmod:    $('.profession1mod').val(),
            profname:   $('.profession1name').val()
          }
        ],
        sensemotive: [
          {
            cs:         $('.sensemotiveCS:checked').is(':checked'),
            ranks:      $('.sensemotiveranks').val(),
            classbonus: $('.sensemotiveclassbonus').val(),
            miscmod:    $('.sensemotivemiscmod').val()
          }
        ],
        sleightofhand: [
          {
            cs:         $('.sleightofhandCS:checked').is(':checked'),
            ranks:      $('.sleightofhandranks').val(),
            classbonus: $('.sleightofhandclassbonus').val(),
            miscmod:    $('.sleightofhandmiscmod').val()
          }
        ],
        stealth: [
          {
            cs:         $('.stealthCS:checked').is(':checked'),
            ranks:      $('.stealthranks').val(),
            classbonus: $('.stealthclassbonus').val(),
            miscmod:    $('.stealthmiscmod').val()
          }
        ],
        survival: [
          {
            cs:         $('.survivalCS:checked').is(':checked'),
            ranks:      $('.survivalranks').val(),
            classbonus: $('.survivalclassbonus').val(),
            miscmod:    $('.survivalmiscmod').val()
          }
        ]
      }
    ],
    abilities: [
      {
        abilities0:  $('.abilities0').val(),
        abilities1:  $('.abilities1').val(),
        abilities2:  $('.abilities2').val(),
        abilities3:  $('.abilities3').val(),
        abilities4:  $('.abilities4').val(),
        abilities5:  $('.abilities5').val(),
        abilities6:  $('.abilities6').val(),
        abilities7:  $('.abilities7').val(),
        abilities8:  $('.abilities8').val(),
        abilities9:  $('.abilities9').val(),
        abilities10: $('.abilities10').val(),
        abilities11: $('.abilities11').val(),
        abilities12: $('.abilities12').val(),
        abilities13: $('.abilities13').val(),
        abilities14: $('.abilities14').val(),
        abilities15: $('.abilities15').val(),
        abilities16: $('.abilities16').val(),
        abilities17: $('.abilities17').val(),
        abilities18: $('.abilities18').val(),
        abilities19: $('.abilities19').val(),
        abilities20: $('.abilities20').val(),
        abilities21: $('.abilities21').val(),
        abilities22: $('.abilities22').val(),
        abilities23: $('.abilities23').val(),
        abilities24: $('.abilities24').val(),
        abilities25: $('.abilities25').val(),
        abilities26: $('.abilities26').val(),
        abilities27: $('.abilities27').val(),
        abilities28: $('.abilities28').val(),
        abilities29: $('.abilities29').val(),
        abilities30: $('.abilities30').val(),
        abilities31: $('.abilities31').val(),
        abilities32: $('.abilities32').val(),
        abilities33: $('.abilities33').val(),
        abilities34: $('.abilities34').val(),
        abilities35: $('.abilities35').val(),
        abilities36: $('.abilities36').val(),
        abilities37: $('.abilities37').val(),
        abilities38: $('.abilities38').val(),
        abilities39: $('.abilities39').val(),
        abilities40: $('.abilities40').val(),
        abilities41: $('.abilities41').val(),
        abilities42: $('.abilities42').val(),
        abilities43: $('.abilities43').val(),
        abilities44: $('.abilities44').val(),
        abilities45: $('.abilities45').val(),
        abilities46: $('.abilities46').val(),
        abilities47: $('.abilities47').val(),
        abilities48: $('.abilities48').val(),
        abilities49: $('.abilities49').val(),
        abilities50: $('.abilities50').val(),
        abilities51: $('.abilities51').val(),
        abilities52: $('.abilities52').val(),
        abilities53: $('.abilities53').val(),
        abilities54: $('.abilities54').val(),
        abilities55: $('.abilities55').val(),
        abilities56: $('.abilities56').val(),
        abilities57: $('.abilities57').val(),
        abilities58: $('.abilities58').val(),
        abilities59: $('.abilities59').val(),
        abilities60: $('.abilities60').val(),
        abilities61: $('.abilities61').val(),
        abilities62: $('.abilities62').val(),
        abilities63: $('.abilities63').val()
      }
    ],
    feats: [
      {
        feats0: $('.feats0').val(),
        feats1: $('.feats1').val(),
        feats2: $('.feats2').val(),
        feats3: $('.feats3').val(),
        feats4: $('.feats4').val(),
        feats5: $('.feats5').val(),
        feats6: $('.feats6').val(),
        feats7: $('.feats7').val(),
        feats8: $('.feats8').val(),
        feats9: $('.feats9').val(),
        feats10: $('.feats10').val(),
        feats11: $('.feats11').val(),
        feats12: $('.feats12').val(),
        feats13: $('.feats13').val(),
        feats14: $('.feats14').val(),
        feats15: $('.feats15').val(),
        feats16: $('.feats16').val(),
        feats17: $('.feats17').val(),
        feats18: $('.feats18').val(),
        feats19: $('.feats19').val(),
        feats20: $('.feats20').val(),
        feats21: $('.feats21').val(),
        feats22: $('.feats22').val(),
        feats23: $('.feats23').val()
      }
    ],
    equipment: [
      {
        equipment0: [
          {
            name: $('.equipment0name').val(),
            level: $('.equipment0level').val(),
            bulk: $('.equipment0bulk').val()
          }
        ],
        equipment1: [
          {
            name: $('.equipment1name').val(),
            level: $('.equipment1level').val(),
            bulk: $('.equipment1bulk').val()
          }
        ],
        equipment2: [
          {
            name: $('.equipment2name').val(),
            level: $('.equipment2level').val(),
            bulk: $('.equipment2bulk').val()
          }
        ],
        equipment3: [
          {
            name: $('.equipment3name').val(),
            level: $('.equipment3level').val(),
            bulk: $('.equipment3bulk').val()
          }
        ],
        equipment4: [
          {
            name: $('.equipment4name').val(),
            level: $('.equipment4level').val(),
            bulk: $('.equipment4bulk').val()
          }
        ],
        equipment5: [
          {
            name: $('.equipment5name').val(),
            level: $('.equipment5level').val(),
            bulk: $('.equipment5bulk').val()
          }
        ],
        equipment6: [
          {
            name: $('.equipment6name').val(),
            level: $('.equipment6level').val(),
            bulk: $('.equipment6bulk').val()
          }
        ],
        equipment7: [
          {
            name: $('.equipment7name').val(),
            level: $('.equipment7level').val(),
            bulk: $('.equipment7bulk').val()
          }
        ],
        equipment8: [
          {
            name: $('.equipment8name').val(),
            level: $('.equipment8level').val(),
            bulk: $('.equipment8bulk').val()
          }
        ],
        equipment9: [
          {
            name: $('.equipment9name').val(),
            level: $('.equipment9level').val(),
            bulk: $('.equipment9bulk').val()
          }
        ],
        equipment10: [
          {
            name: $('.equipment10name').val(),
            level: $('.equipment10level').val(),
            bulk: $('.equipment10bulk').val()
          }
        ],
        equipment11: [
          {
            name: $('.equipment11name').val(),
            level: $('.equipment11level').val(),
            bulk: $('.equipment11bulk').val()
          }
        ],
        equipment12: [
          {
            name: $('.equipment12name').val(),
            level: $('.equipment12level').val(),
            bulk: $('.equipment12bulk').val()
          }
        ],
        equipment13: [
          {
            name: $('.equipment13name').val(),
            level: $('.equipment13level').val(),
            bulk: $('.equipment13bulk').val()
          }
        ],
        equipment14: [
          {
            name: $('.equipment14name').val(),
            level: $('.equipment14level').val(),
            bulk: $('.equipment14bulk').val()
          }
        ]
      }
    ],
    wealth: [
      {
        credits: $('.credits').val()
      }
    ],
    languages: [
      {
        language0 : $('.language0').val(),
        language1 : $('.language1').val(),
        language2 : $('.language2').val(),
        language3 : $('.language3').val(),
        language4 : $('.language4').val(),
        language5 : $('.language5').val(),
        language6 : $('.language6').val(),
        language7 : $('.language7').val(),
        language8 : $('.language8').val(),
        language9 : $('.language9').val(),
        language10: $('.language10').val(),
        language11: $('.language11').val()
      }
    ],
    experience: [
      {
        expearned: $('.expearned').val(),
        expnext: $('.expnext').val()
      }
    ],
    spells: [
      {
        spell0: [
          {
            spell0known: $('.spell0known').val(),
            spell0pday: $('.spell0pday').val(),
            spell0slots: $('.spell0slots').val(),
            spell00: $('.spell00').val(),
            spell01: $('.spell01').val(),
            spell02: $('.spell02').val(),
            spell03: $('.spell03').val(),
            spell04: $('.spell04').val(),
            spell05: $('.spell05').val(),
            spell06: $('.spell06').val(),
            spell07: $('.spell07').val(),
            spell08: $('.spell08').val()
          }
        ],
        spell1: [
          {
            spell1known: $('.spell1known').val(),
            spell1pday: $('.spell1pday').val(),
            spell1slots: $('.spell1slots').val(),
            spell10: $('.spell10').val(),
            spell11: $('.spell11').val(),
            spell12: $('.spell12').val(),
            spell13: $('.spell13').val(),
            spell14: $('.spell14').val(),
            spell15: $('.spell15').val(),
            spell16: $('.spell16').val(),
            spell17: $('.spell17').val(),
            spell18: $('.spell18').val()
          }
        ],
        spell2: [
          {
            spell2known: $('.spell2known').val(),
            spell2pday: $('.spell2pday').val(),
            spell2slots: $('.spell2slots').val(),
            spell20: $('.spell20').val(),
            spell21: $('.spell21').val(),
            spell22: $('.spell22').val(),
            spell23: $('.spell23').val(),
            spell24: $('.spell24').val(),
            spell25: $('.spell25').val(),
            spell26: $('.spell26').val(),
            spell27: $('.spell27').val(),
            spell28: $('.spell28').val()
          }
        ],
        spell3: [
          {
            spell3known: $('.spell3known').val(),
            spell3pday: $('.spell3pday').val(),
            spell3slots: $('.spell3slots').val(),
            spell30: $('.spell30').val(),
            spell31: $('.spell31').val(),
            spell32: $('.spell32').val(),
            spell33: $('.spell33').val(),
            spell34: $('.spell34').val(),
            spell35: $('.spell35').val(),
            spell36: $('.spell36').val(),
            spell37: $('.spell37').val(),
            spell38: $('.spell38').val()
          }
        ],
        spell4: [
          {
            spell4known: $('.spell4known').val(),
            spell4pday: $('.spell4pday').val(),
            spell4slots: $('.spell4slots').val(),
            spell40: $('.spell40').val(),
            spell41: $('.spell41').val(),
            spell42: $('.spell42').val(),
            spell43: $('.spell43').val(),
            spell44: $('.spell44').val(),
            spell45: $('.spell45').val(),
            spell46: $('.spell46').val(),
            spell47: $('.spell47').val(),
            spell48: $('.spell48').val()
          }
        ],
        spell5: [
          {
            spell5known: $('.spell5known').val(),
            spell5pday: $('.spell5pday').val(),
            spell5slots: $('.spell5slots').val(),
            spell50: $('.spell50').val(),
            spell51: $('.spell51').val(),
            spell52: $('.spell52').val(),
            spell53: $('.spell53').val(),
            spell54: $('.spell54').val(),
            spell55: $('.spell55').val(),
            spell56: $('.spell56').val(),
            spell57: $('.spell57').val(),
            spell58: $('.spell58').val()
          }
        ],
        spell6: [
          {
            spell6known: $('.spell6known').val(),
            spell6pday: $('.spell6pday').val(),
            spell6slots: $('.spell6slots').val(),
            spell60: $('.spell60').val(),
            spell61: $('.spell61').val(),
            spell62: $('.spell62').val(),
            spell63: $('.spell63').val(),
            spell64: $('.spell64').val(),
            spell65: $('.spell65').val(),
            spell66: $('.spell66').val(),
            spell67: $('.spell67').val(),
            spell68: $('.spell68').val()
          }
        ]
      }
    ]
  }
  var jsonData = JSON.stringify(data);
 
var currentdate = new Date(); 
var datetime = "Last Autosave: " + currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
 
  url = '/do.php';
  object = new FormData();
  object.append('data', jsonData);
  object.append('user',user);
  fetch(url, {
    method: 'POST',
    body: object
  }).then((resp) => resp.json()).then(function(r) {
    if (r = "Worked"){ 
      savebutton.value="Save ("+datetime+")";
    } else {
     savebutton.value="Save (Last save failed)";
    }
    savebutton.disabled = false;
  });

  //download(jsonData, $('.name').val() + ' the ' + $('.race').val() + ' ' + $('.theme').val() + ' ' + $('.class').val() + '.txt', 'text/plain');
}
function load() {
url = '/do.php';
  object = new FormData();
  object.append('load', user);
  fetch(url, {
    method: 'POST',
    body: object
  }).then((resp) => resp.json()).then(function(r) {
   displayContents(r); 
  });
}
function displayContents(output) {
  data = JSON.parse(output);
  $('.name').val(data.characterinfo[0].name);
  $('.race').val(data.characterinfo[0].race);
  $('.player').val(data.characterinfo[0].player);
  $('.size').val(data.characterinfo[0].size);
  $('.speed').val(data.characterinfo[0].speed);
  $('.gender').val(data.characterinfo[0].gender);
  $('.height').val(data.characterinfo[0].height);
  $('.weight').val(data.characterinfo[0].weight);
  $('.homeworld').val(data.characterinfo[0].homeworld);
  $('.totalstamina').val(data.healthresolve[0].totalstamina);
  $('.totalhp').val(data.healthresolve[0].totalhp);
  $('.currentstamina').val(data.healthresolve[0].currentstamina);
  $('.currenthp').val(data.healthresolve[0].currenthp);
  $('.EACarmor').val(data.armorclass[0].EACarmor);
  $('.DR').val(data.armorclass[0].dr);
  $('.fortbase').val(data.savingthrows[0].fortbase);
  $('.refbase').val(data.savingthrows[0].refbase);
  $('.willbase').val(data.savingthrows[0].willbase);
  $('.BABmelee').val(data.attackbonus[0].BABmelee);
  $('.BABrange').val(data.attackbonus[0].BABrange);
  $('.initmiscmod').val(data.initiative[0].initmiscmod);
  $('.str').val(data.abilityscores[0].str);
  $('.dex').val(data.abilityscores[0].dex);
  $('.con').val(data.abilityscores[0].con);
  $('.int').val(data.abilityscores[0].int);
  $('.wis').val(data.abilityscores[0].wis);
  $('.cha').val(data.abilityscores[0].cha);
  $('.strmod').val(data.abilityscores[0].strmod);
  $('.dexmod').val(data.abilityscores[0].dexmod);
  $('.conmod').val(data.abilityscores[0].conmod);
  $('.intmod').val(data.abilityscores[0].intmod);
  $('.wismod').val(data.abilityscores[0].wismod);
  $('.chamod').val(data.abilityscores[0].chamod);
  $('.skillranks').val(data.skills[0].skillranks);
  $('.acrobaticsCS').prop('checked', data.skills[0].acrobatics[0].cs);
  $('.acrobaticsranks').val(data.skills[0].acrobatics[0].ranks);
  $('.athleticsranks').val(data.skills[0].athletics[0].ranks);
    $('.athleticsCS').val(data.skills[0].athletics[0].cs)
  $('.bluffCS').prop('checked', data.skills[0].bluff[0].cs);
  $('.bluffranks').val(data.skills[0].bluff[0].ranks);
  $('.computersCS').prop('checked', data.skills[0].computers[0].cs);
  $('.computersranks').val(data.skills[0].computers[0].ranks);
  $('.cultureCS').prop('checked', data.skills[0].culture[0].cs);
  $('.cultureranks').val(data.skills[0].culture[0].ranks);
  $('.diplomacyCS').prop('checked', data.skills[0].diplomacy[0].cs);
  $('.diplomacyranks').val(data.skills[0].diplomacy[0].ranks);
  $('.disguiseCS').prop('checked', data.skills[0].disguise[0].cs);
  $('.disguiseranks').val(data.skills[0].disguise[0].ranks);
  $('.engineeringCS').prop('checked', data.skills[0].engineering[0].cs);
  $('.engineeringranks').val(data.skills[0].engineering[0].ranks);
  $('.intimidateCS').prop('checked', data.skills[0].intimidate[0].cs);
  $('.intimidateranks').val(data.skills[0].intimidate[0].ranks);
  $('.lifescienceCS').prop('checked', data.skills[0].lifescience[0].cs);
  $('.lifescienceranks').val(data.skills[0].lifescience[0].ranks);
  $('.medicineCS').prop('checked', data.skills[0].medicine[0].cs);
  $('.medicineranks').val(data.skills[0].medicine[0].ranks);
  $('.mysticismCS').prop('checked', data.skills[0].mysticism[0].cs);
  $('.mysticismranks').val(data.skills[0].mysticism[0].ranks);
  $('.perceptionCS').prop('checked', data.skills[0].perception[0].cs);
  $('.perceptionranks').val(data.skills[0].perception[0].ranks);
  $('.physicalscienceCS').prop('checked', data.skills[0].physicalscience[0].cs);
  $('.physicalscienceranks').val(data.skills[0].physicalscience[0].ranks);
  $('.pilotingCS').prop('checked', data.skills[0].piloting[0].cs);
  $('.pilotingranks').val(data.skills[0].piloting[0].ranks);
  $('.profession0CS').prop('checked', data.skills[0].profession0[0].cs);
  $('.profession0ranks').val(data.skills[0].profession0[0].ranks);
  $('.profession0mod').val(data.skills[0].profession0[0].profmod);
  $('.profession0name').val(data.skills[0].profession0[0].profname);
  $('.sensemotiveCS').prop('checked', data.skills[0].sensemotive[0].cs);
  $('.sensemotiveranks').val(data.skills[0].sensemotive[0].ranks);
  $('.sleightofhandCS').prop('checked', data.skills[0].sleightofhand[0].cs);
  $('.sleightofhandranks').val(data.skills[0].sleightofhand[0].ranks);
  $('.stealthCS').prop('checked', data.skills[0].stealth[0].cs);
  $('.stealthranks').val(data.skills[0].stealth[0].ranks);
  $('.survivalCS').prop('checked', data.skills[0].survival[0].cs);
  $('.survivalranks').val(data.skills[0].survival[0].ranks);
  $('.abilities0').val(data.abilities[0].abilities0);
  $('.abilities1').val(data.abilities[0].abilities1);
  $('.abilities2').val(data.abilities[0].abilities2);
  $('.abilities3').val(data.abilities[0].abilities3);
  $('.abilities4').val(data.abilities[0].abilities4);
  $('.abilities5').val(data.abilities[0].abilities5);
  $('.abilities6').val(data.abilities[0].abilities6);
  $('.abilities7').val(data.abilities[0].abilities7);
  $('.abilities8').val(data.abilities[0].abilities8);
  $('.abilities9').val(data.abilities[0].abilities9);
  $('.abilities10').val(data.abilities[0].abilities10);
  $('.abilities11').val(data.abilities[0].abilities11);
  $('.abilities12').val(data.abilities[0].abilities12);
  $('.abilities13').val(data.abilities[0].abilities13);
  $('.abilities14').val(data.abilities[0].abilities14);
  $('.abilities15').val(data.abilities[0].abilities15);
  $('.abilities16').val(data.abilities[0].abilities16);
  $('.abilities17').val(data.abilities[0].abilities17);
  $('.abilities18').val(data.abilities[0].abilities18);
  $('.abilities19').val(data.abilities[0].abilities19);
  $('.abilities20').val(data.abilities[0].abilities20);
  $('.abilities21').val(data.abilities[0].abilities21);
  $('.abilities22').val(data.abilities[0].abilities22);
  $('.abilities23').val(data.abilities[0].abilities23);
  $('.abilities24').val(data.abilities[0].abilities24);
  $('.abilities25').val(data.abilities[0].abilities25);
  $('.abilities26').val(data.abilities[0].abilities26);
  $('.abilities27').val(data.abilities[0].abilities27);
  $('.abilities28').val(data.abilities[0].abilities28);
  $('.abilities29').val(data.abilities[0].abilities29);
  $('.abilities30').val(data.abilities[0].abilities30);
  $('.abilities31').val(data.abilities[0].abilities31);
  $('.abilities32').val(data.abilities[0].abilities32);
  $('.abilities33').val(data.abilities[0].abilities33);
  $('.abilities34').val(data.abilities[0].abilities34);
  $('.abilities35').val(data.abilities[0].abilities35);
  $('.abilities36').val(data.abilities[0].abilities36);
  $('.abilities37').val(data.abilities[0].abilities37);
  $('.abilities38').val(data.abilities[0].abilities38);
  $('.abilities39').val(data.abilities[0].abilities39);
  $('.abilities40').val(data.abilities[0].abilities40);
  $('.abilities41').val(data.abilities[0].abilities41);
  $('.abilities42').val(data.abilities[0].abilities42);
  $('.abilities43').val(data.abilities[0].abilities43);
  $('.abilities44').val(data.abilities[0].abilities44);
  $('.abilities45').val(data.abilities[0].abilities45);
  $('.abilities46').val(data.abilities[0].abilities46);
  $('.abilities47').val(data.abilities[0].abilities47);
  $('.abilities48').val(data.abilities[0].abilities48);
  $('.abilities49').val(data.abilities[0].abilities49);
  $('.abilities50').val(data.abilities[0].abilities50);
  $('.abilities51').val(data.abilities[0].abilities51);
  $('.abilities52').val(data.abilities[0].abilities52);
  $('.abilities53').val(data.abilities[0].abilities53);
  $('.abilities54').val(data.abilities[0].abilities54);
  $('.abilities55').val(data.abilities[0].abilities55);
  $('.abilities56').val(data.abilities[0].abilities56);
  $('.abilities57').val(data.abilities[0].abilities57);
  $('.abilities58').val(data.abilities[0].abilities58);
  $('.abilities59').val(data.abilities[0].abilities59);
  $('.abilities60').val(data.abilities[0].abilities60);
  $('.abilities61').val(data.abilities[0].abilities61);
  $('.abilities62').val(data.abilities[0].abilities62);
  $('.abilities63').val(data.abilities[0].abilities63);
  $('.feats0').val(data.feats[0].feats0);
  $('.feats1').val(data.feats[0].feats1);
  $('.feats2').val(data.feats[0].feats2);
  $('.feats3').val(data.feats[0].feats3);
  $('.feats4').val(data.feats[0].feats4);
  $('.feats5').val(data.feats[0].feats5);
  $('.feats6').val(data.feats[0].feats6);
  $('.feats7').val(data.feats[0].feats7);
  $('.feats8').val(data.feats[0].feats8);
  $('.feats9').val(data.feats[0].feats9);
  $('.feats10').val(data.feats[0].feats10);
  $('.feats11').val(data.feats[0].feats11);
  $('.feats12').val(data.feats[0].feats12);
  $('.feats13').val(data.feats[0].feats13);
  $('.feats14').val(data.feats[0].feats14);
  $('.feats15').val(data.feats[0].feats15);
  $('.feats16').val(data.feats[0].feats16);
  $('.feats17').val(data.feats[0].feats17);
  $('.feats18').val(data.feats[0].feats18);
  $('.feats19').val(data.feats[0].feats19);
  $('.feats20').val(data.feats[0].feats20);
  $('.feats21').val(data.feats[0].feats21);
  $('.feats22').val(data.feats[0].feats22);
  $('.feats23').val(data.feats[0].feats23);
  $('.equipment0name').val(data.equipment[0].equipment0[0].name);
  $('.equipment0level').val(data.equipment[0].equipment0[0].level);
  $('.equipment0bulk').val(data.equipment[0].equipment0[0].bulk);
  $('.equipment1name').val(data.equipment[0].equipment1[0].name);
  $('.equipment1level').val(data.equipment[0].equipment1[0].level);
  $('.equipment1bulk').val(data.equipment[0].equipment1[0].bulk);
  $('.equipment2name').val(data.equipment[0].equipment2[0].name);
  $('.equipment2level').val(data.equipment[0].equipment2[0].level);
  $('.equipment2bulk').val(data.equipment[0].equipment2[0].bulk);
  $('.equipment3name').val(data.equipment[0].equipment3[0].name);
  $('.equipment3level').val(data.equipment[0].equipment3[0].level);
  $('.equipment3bulk').val(data.equipment[0].equipment3[0].bulk);
  $('.equipment4name').val(data.equipment[0].equipment4[0].name);
  $('.equipment4level').val(data.equipment[0].equipment4[0].level);
  $('.equipment4bulk').val(data.equipment[0].equipment4[0].bulk);
  $('.equipment5name').val(data.equipment[0].equipment5[0].name);
  $('.equipment5level').val(data.equipment[0].equipment5[0].level);
  $('.equipment5bulk').val(data.equipment[0].equipment5[0].bulk);
  $('.equipment6name').val(data.equipment[0].equipment6[0].name);
  $('.equipment6level').val(data.equipment[0].equipment6[0].level);
  $('.equipment6bulk').val(data.equipment[0].equipment6[0].bulk);
  $('.equipment7name').val(data.equipment[0].equipment7[0].name);
  $('.equipment7level').val(data.equipment[0].equipment7[0].level);
  $('.equipment7bulk').val(data.equipment[0].equipment7[0].bulk);
  $('.equipment8name').val(data.equipment[0].equipment8[0].name);
  $('.equipment8level').val(data.equipment[0].equipment8[0].level);
  $('.equipment8bulk').val(data.equipment[0].equipment8[0].bulk);
  $('.equipment9name').val(data.equipment[0].equipment9[0].name);
  $('.equipment9level').val(data.equipment[0].equipment9[0].level);
  $('.equipment9bulk').val(data.equipment[0].equipment9[0].bulk);
  $('.equipment10name').val(data.equipment[0].equipment10[0].name);
  $('.equipment10level').val(data.equipment[0].equipment10[0].level);
  $('.equipment10bulk').val(data.equipment[0].equipment10[0].bulk);
  $('.equipment11name').val(data.equipment[0].equipment11[0].name);
  $('.equipment11level').val(data.equipment[0].equipment11[0].level);
  $('.equipment11bulk').val(data.equipment[0].equipment11[0].bulk);
  $('.equipment12name').val(data.equipment[0].equipment12[0].name);
  $('.equipment12level').val(data.equipment[0].equipment12[0].level);
  $('.equipment12bulk').val(data.equipment[0].equipment12[0].bulk);
  $('.equipment13name').val(data.equipment[0].equipment13[0].name);
  $('.equipment13level').val(data.equipment[0].equipment13[0].level);
  $('.equipment13bulk').val(data.equipment[0].equipment13[0].bulk);
  $('.equipment14name').val(data.equipment[0].equipment14[0].name);
  $('.equipment14level').val(data.equipment[0].equipment14[0].level);
  $('.equipment14bulk').val(data.equipment[0].equipment14[0].bulk);
  $('.credits').val(data.wealth[0].credits);
  $('.language0').val(data.languages[0].language0);
  $('.language1').val(data.languages[0].language1);
  $('.language2').val(data.languages[0].language2);
  $('.language3').val(data.languages[0].language3);
  $('.language4').val(data.languages[0].language4);
  $('.language5').val(data.languages[0].language5);
  $('.language6').val(data.languages[0].language6);
  $('.language7').val(data.languages[0].language7);
  $('.language8').val(data.languages[0].language8);
  $('.language9').val(data.languages[0].language9);
  $('.language10').val(data.languages[0].language10);
  $('.language11').val(data.languages[0].language11);
  $('.expearned').val(data.experience[0].expearned);
  $('.expnext').val(data.experience[0].expnext);
  $('.spell0known').val(data.spells[0].spell0[0].spell0known);
  $('.spell0pday').val(data.spells[0].spell0[0].spell0pday);
  $('.spell0slots').val(data.spells[0].spell0[0].spell0slots);
  $('.spell00').val(data.spells[0].spell0[0].spell00);
  $('.spell01').val(data.spells[0].spell0[0].spell01);
  $('.spell02').val(data.spells[0].spell0[0].spell02);
  $('.spell03').val(data.spells[0].spell0[0].spell03);
  $('.spell04').val(data.spells[0].spell0[0].spell04);
  $('.spell05').val(data.spells[0].spell0[0].spell05);
  $('.spell06').val(data.spells[0].spell0[0].spell06);
  $('.spell07').val(data.spells[0].spell0[0].spell07);
  $('.spell08').val(data.spells[0].spell0[0].spell08);
  $('.spell1known').val(data.spells[0].spell1[0].spell1known);
  $('.spell1pday').val(data.spells[0].spell1[0].spell1pday);
  $('.spell1slots').val(data.spells[0].spell1[0].spell1slots);
  $('.spell10').val(data.spells[0].spell1[0].spell10);
  $('.spell11').val(data.spells[0].spell1[0].spell11);
  $('.spell12').val(data.spells[0].spell1[0].spell12);
  $('.spell13').val(data.spells[0].spell1[0].spell13);
  $('.spell14').val(data.spells[0].spell1[0].spell14);
  $('.spell15').val(data.spells[0].spell1[0].spell15);
  $('.spell16').val(data.spells[0].spell1[0].spell16);
  $('.spell17').val(data.spells[0].spell1[0].spell17);
  $('.spell18').val(data.spells[0].spell1[0].spell18);
  $('.spell2known').val(data.spells[0].spell2[0].spell2known);
  $('.spell2pday').val(data.spells[0].spell2[0].spell2pday);
  $('.spell2slots').val(data.spells[0].spell2[0].spell2slots);
  $('.spell20').val(data.spells[0].spell2[0].spell20);
  $('.spell21').val(data.spells[0].spell2[0].spell21);
  $('.spell22').val(data.spells[0].spell2[0].spell22);
  $('.spell23').val(data.spells[0].spell2[0].spell23);
  $('.spell24').val(data.spells[0].spell2[0].spell24);
  $('.spell25').val(data.spells[0].spell2[0].spell25);
  $('.spell26').val(data.spells[0].spell2[0].spell26);
  $('.spell27').val(data.spells[0].spell2[0].spell27);
  $('.spell28').val(data.spells[0].spell2[0].spell28);
  $('.spell3known').val(data.spells[0].spell3[0].spell3known);
  $('.spell3pday').val(data.spells[0].spell3[0].spell3pday);
  $('.spell3slots').val(data.spells[0].spell3[0].spell3slots);
  $('.spell30').val(data.spells[0].spell3[0].spell30);
  $('.spell31').val(data.spells[0].spell3[0].spell31);
  $('.spell32').val(data.spells[0].spell3[0].spell32);
  $('.spell33').val(data.spells[0].spell3[0].spell33);
  $('.spell34').val(data.spells[0].spell3[0].spell34);
  $('.spell35').val(data.spells[0].spell3[0].spell35);
  $('.spell36').val(data.spells[0].spell3[0].spell36);
  $('.spell37').val(data.spells[0].spell3[0].spell37);
  $('.spell38').val(data.spells[0].spell3[0].spell38);
  $('.spell4known').val(data.spells[0].spell4[0].spell4known);
  $('.spell4pday').val(data.spells[0].spell4[0].spell4pday);
  $('.spell4slots').val(data.spells[0].spell4[0].spell4slots);
  $('.spell40').val(data.spells[0].spell4[0].spell40);
  $('.spell41').val(data.spells[0].spell4[0].spell41);
  $('.spell42').val(data.spells[0].spell4[0].spell42);
  $('.spell43').val(data.spells[0].spell4[0].spell43);
  $('.spell44').val(data.spells[0].spell4[0].spell44);
  $('.spell45').val(data.spells[0].spell4[0].spell45);
  $('.spell46').val(data.spells[0].spell4[0].spell46);
  $('.spell47').val(data.spells[0].spell4[0].spell47);
  $('.spell48').val(data.spells[0].spell4[0].spell48);
  $('.spell5known').val(data.spells[0].spell5[0].spell5known);
  $('.spell5pday').val(data.spells[0].spell5[0].spell5pday);
  $('.spell5slots').val(data.spells[0].spell5[0].spell5slots);
  $('.spell50').val(data.spells[0].spell5[0].spell50);
  $('.spell51').val(data.spells[0].spell5[0].spell51);
  $('.spell52').val(data.spells[0].spell5[0].spell52);
  $('.spell53').val(data.spells[0].spell5[0].spell53);
  $('.spell54').val(data.spells[0].spell5[0].spell54);
  $('.spell55').val(data.spells[0].spell5[0].spell55);
  $('.spell56').val(data.spells[0].spell5[0].spell56);
  $('.spell57').val(data.spells[0].spell5[0].spell57);
  $('.spell58').val(data.spells[0].spell5[0].spell58);
  $('.spell6known').val(data.spells[0].spell6[0].spell6known);
  $('.spell6pday').val(data.spells[0].spell6[0].spell6pday);
  $('.spell6slots').val(data.spells[0].spell6[0].spell6slots);
  $('.spell60').val(data.spells[0].spell6[0].spell60);
  $('.spell61').val(data.spells[0].spell6[0].spell61);
  $('.spell62').val(data.spells[0].spell6[0].spell62);
  $('.spell63').val(data.spells[0].spell6[0].spell63);
  $('.spell64').val(data.spells[0].spell6[0].spell64);
  $('.spell65').val(data.spells[0].spell6[0].spell65);
  $('.spell66').val(data.spells[0].spell6[0].spell66);
  $('.spell67').val(data.spells[0].spell6[0].spell67);
  $('.spell68').val(data.spells[0].spell6[0].spell68);
  updateStrMod();
  updateDexMod();
  updateConMod();
  updateIntMod();
  updateWisMod();
  updateChaMod();
  updateUStrMod();
  updateUDexMod();
  updateUConMod();
  updateUIntMod();
  updateUWisMod();
  updateUChaMod();
  updateEAC();
  updateFort();
  updateRef();
  updateWill();
  updateMelee();
  updateRange();
  updateInitiative();
  updateAthletics();
  updateAcrobatics();
  updateBluff();
  updateComputers();
  updateCulture();
  updateDiplomacy();
  updateDisguise();
  updateEngineering();
  updateIntimidate();
  updateLifeScience();
  updateMedicine();
  updateMysticism();
  updatePerception();
  updatePhysicalScience();
  updatePiloting();
  updateProfession0();
  updateSenseMotive();
  updateSleightOfHand();
  updateStealth();
  updateSurvival();
}
