const fs = require('fs');
const path = require('path');

const NOTES_FILE = path.join(__dirname, 'notes.json');

const saveNotes = (notes) => {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(NOTES_FILE);
        return JSON.parse(dataBuffer.toString());
    } catch {
        return [];
    }
};

module.exports = { saveNotes, loadNotes };