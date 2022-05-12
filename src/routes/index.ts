import express, { Request, Response } from 'express';
import imagesRouter from './images';

const router = express.Router();

router.use('/api/images', imagesRouter);

router.get(
    '/',
    (req: Request, res: Response): void => {
        res.send('Welcome to Image_Processing_API');
    }
);

export default router;