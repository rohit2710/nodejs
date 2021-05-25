const fs = require("fs");
const chalk = require("chalk");

const removeNote = (title) => {
  var notes = loadNote();
  const noteAvailable = notes.find((note) => note.title === title);
  if (noteAvailable) {
    notes = notes.filter(function (note) {
      return note.title !== title;
    });
    saveNote(notes);
    console.log(chalk.green.inverse("note deleted"));
  }else {
    console.log(chalk.red.inverse("note not exists"));
  }

//   const notesToKeep = notes.filter((note) => note.title !== title);
//   if (notesToKeep.length < notes.length) {
//     saveNote(notesToKeep);
//     console.log(chalk.green.inverse("note deleted"));
//   } else {
//     console.log(chalk.red.inverse("note not exists"));
//   }
};
const addNote = (title, body) => {
  const notes = loadNote();
  //const duplicateNotes = notes.filter((note)=>note.title === title)
  const duplicateNote = notes.find((note) => note.title === title);
  
  debugger
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log("new note added");
  } else {
    console.log("note title taken");
  }
};
//reads single note
const readNote = (title) => {
  const notes = loadNote();
  const noteAvailable = notes.find((note) => note.title === title);
  if (noteAvailable) {
    console.log(
      chalk.green.inverse(noteAvailable.title + " " + noteAvailable.body)
    );
  } else {
    console.log(chalk.red.inverse("note not available"));
  }
};
//write note in to file
const saveNote = (notes) => {
  const dataString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataString);
};
//load notes will return array of notes from file
const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    //if file not exist then ll give error
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (e) {
    return [];
  }
};
//list all notes
const listNote = () => {
  const notes = loadNote();

  console.log(chalk.inverse("Your notes..."));
  notes.forEach((note) => {
    console.log(note.title);
  });
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
