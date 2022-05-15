import app from '../index';
import supertest from 'supertest';
import path from 'path';
import { promises as fs } from 'fs';
import Files from '../services/files';

const request = supertest(app);

describe('End-Points Tests', (): void => {
    describe('/', (): void => {
        it('GET /' , async (): Promise<void> => {
            const res = await request.get('/');

            expect(res.status).toBe(200);
        });
    });

    describe('/api/images', (): void => {
        it('GET /api/images (Missed Required Params)', async (): Promise<void> => {
            const res = await request.get('/api/images');

            expect(res.status).toBe(400);
        });

        it('GET /api/images (Valid Params)', async (): Promise<void> => {
            const res = await request.get('/api/images?filename=fjord&width=200&height=200');

            expect(res.status).toBe(200);
        });
    })

    describe('/api', (): void => {
        it('GET /api' , async (): Promise<void> => {
            const res = await request.get('/api');

            expect(res.status).toBe(404);
        });
    });
});

afterAll(async (): Promise<void> => {
    const testPath: string = path.resolve(
        Files.thumbImagePath,
        'fjord_200_200.jpg'
    );

    try {
        await fs.access(testPath);
        fs.unlink(testPath);
    } catch {
        console.log('Files cannot be removed !!')
    }
});