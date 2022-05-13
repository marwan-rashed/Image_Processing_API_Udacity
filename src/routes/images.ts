import express, { Request, Response } from 'express';
import validate from '../middlewares/validation';

const router = express.Router();

router.get(
    '/',
    validate,
    (req: Request, res: Response) => {
        res.status(200).end('Done')
    }
);

export default router;