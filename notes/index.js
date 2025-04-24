const noteService = require('./noteService');

module.exports = {
    addNote: noteService.addNote,
    removeNote: noteService.removeNote,
    listNotes: noteService.listNotes,
    readNote: noteService.readNote
};