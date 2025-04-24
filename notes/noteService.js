const chalk = require('chalk');
const { saveNotes, loadNotes } = require('./noteStorage');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);

    if (duplicate) {
        console.log(chalk.red.inverse('Note title taken!'));
        return;
    }

    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
};

const removeNote = (title) => {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if (filtered.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
        return;
    }

    saveNotes(filtered);
    console.log(chalk.green.inverse('Note removed!'));
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes'));
    notes.forEach(note => console.log(`- ${note.title}`));
};

const readNote = (title) => {
    const note = loadNotes().find(note => note.title === title);

    if (!note) {
        console.log(chalk.red.inverse('Note not found!'));
        return;
    }

    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
};

module.exports = { addNote, removeNote, listNotes, readNote };