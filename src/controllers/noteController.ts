import { Request, Response, NextFunction } from 'express';
import { notes, Note } from '../models/note.js'

// create an item
export const createNote = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, note } = req.body;
        const newNote: Note = { id: Date.now(), name, note };
        notes.push(newNote)
        res.status(201).json(newNote)
    } catch (error) {
        next(error)
    }
}

// Read all notes
export const getNotes = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(notes)
    } catch (error) {
        next(error)
    }
} 

// read single item
export const getNoteById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const note = notes.find((n) => n.id === id);
        if (!note) {
            res.status(404).json({message: 'Item not found'});
            return
        }

        res.json(note)
    } catch (error) {
        next(error)
    }
}

// update a note
export const updateNote = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name, note } = req.body;
        const noteIndex = notes.findIndex((n) => n.id === id);
        if (noteIndex === -1) {
            res.status(404).json({message: 'Item not found'})
            return;
        }

        notes[noteIndex] = { 
            ...notes[noteIndex],
            name,
            note
        }

        res.json(notes[noteIndex])
    } catch (error) {
        next(error)
    }
}

// delete an item
export const deleteNote = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const noteIndex = notes.findIndex((n) => n.id === id);
        if (noteIndex === -1) {
            res.status(404).json({message: 'Item not found'})
            return;
        }

        const deletedNote = notes.splice(noteIndex, 1)[0];
        res.json(deletedNote)
    } catch (error) {
        next(error)
    }
}