import { Router } from "express";
import { getInspections } from "../controllers/inspections";

const notesRouter = Router()

notesRouter.get('/', getInspections);

export default notesRouter;