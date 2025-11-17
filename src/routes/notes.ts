import { Router } from "express";
import { getNotes } from "../controllers/notes";

const notesRouter = Router()

notesRouter.get('/', getNotes);

export default notesRouter;