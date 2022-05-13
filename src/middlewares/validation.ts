import { Request, Response, NextFunction } from 'express';

export default function validate(req: Request, res: Response, next: NextFunction) {
    const { filename, width, height } = req.query;
    console.log(filename, width, height);
    if(filename && width && height) {
        next()
    } else {
        res.status(400).end('Required Parameters are Missed')
    }
}