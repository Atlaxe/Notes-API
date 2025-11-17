import { Request, Response } from "express"

export const getNotes = (request: Request, response: Response) => {
    response.send([]);
}
