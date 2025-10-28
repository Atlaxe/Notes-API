import { notes } from '../models/note.js';
// create an item
export const createNote = (req, res, next) => {
    try {
        const { name, note } = req.body;
        const newNote = { id: Date.now(), name, note };
        notes.push(newNote);
        res.status(201).json(newNote);
    }
    catch (error) {
        next(error);
    }
};
// Read all notes
export const getNotes = (req, res, next) => {
    try {
        res.json(notes);
    }
    catch (error) {
        next(error);
    }
};
// read single item
export const getNoteById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const note = notes.find((n) => n.id === id);
        if (!note) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        res.json(note);
    }
    catch (error) {
        next(error);
    }
};
// update a note
export const updateNote = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name, note } = req.body;
        const noteIndex = notes.findIndex((n) => n.id === id);
        if (noteIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        notes[noteIndex] = {
            ...notes[noteIndex],
            name,
            note
        };
        res.json(notes[noteIndex]);
    }
    catch (error) {
        next(error);
    }
};
// delete an item
export const deleteNote = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const noteIndex = notes.findIndex((n) => n.id === id);
        if (noteIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        const deletedNote = notes.splice(noteIndex, 1)[0];
        res.json(deletedNote);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=noteController.js.map