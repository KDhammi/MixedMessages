const charaRace = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
const charaClass = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const charaBg = ['Acolyte', 'Charlatan', 'Criminal', 'Criminal (Spy)', 'Entertainer', 'Entertainer (Gladiator)', 'Folk Hero', 'Guild Artisan', 'Guild Artisan (Guild Merchant)', 'Hermit', 'Noble', 'Noble (Knight)', 'Outlander', 'Sage', 'Sailor', 'Sailor (Pirate)', 'Soldier', 'Urchin'];
const charaGender = ['Male', 'Female', 'Non-Binary'];

const generateRandomMessage = () => { // generate a random message
    let randRace = charaRace[Math.floor(Math.random()*charaRace.length)]; // picks a random index from the charaRace array and assigns it to randRace
    let randClass = charaClass[Math.floor(Math.random()*charaClass.length)]; // picks a random index from the charaClass array and assigns it to randClass
    let randBg = charaBg[Math.floor(Math.random()*charaBg.length)]; // picks a random index from the charaBg array and assigns it to randBg
    let randGender = charaGender[Math.floor(Math.random()*charaGender.length)]; // picks a random index from the charaGender array and assigns it to randGender
    //console.log(randRace);
    //console.log(randClass);
    //console.log(randBg);
    //console.log(randGender);
}
generateRandomMessage();