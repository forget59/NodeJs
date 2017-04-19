/**
 * Created by fabrice on 18/04/2017.
 */
console.log("test importé");
const fs = require('fs');
let notesExistantes = [];
notesExistantes = require('./note-data.json');

let addNote = (titre,corp)=>{
    keys  = (notesExistantes.filter(getTitre));
    console.log(keys);
    notes = [];
    let note = {
        titre: titre,
        corp: corp
    };
    notes.push(note);
    console.log(notesExistantes.includes(note));
    fs.writeFileSync('./note-data.json', JSON.stringify(notes.concat(notesExistantes)));
};
let listNote = ()=>{
    console.log("affiche des notes");
};
let readNote = (title)=>{

};
let removeNote = (title,body)=>{
    console.log("retire une note");
};

let getTitre = (elements) =>{
    return (elements.titre);
}

module.exports = {addNote,listNote,readNote,removeNote};
