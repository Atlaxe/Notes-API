import { Request, Response } from "express"

export const getInspections = (request: Request, response: Response) => {
    response.send(['yoghurt', 'cheese', 'milk']);
}