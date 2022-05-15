import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default class Files {
    static fullImagePath = path.resolve(__dirname, '../../assets/images/full');
    static thumbImagePath = path.resolve(__dirname, '../../assets/images/thumbnails');

    static async getAvailableImages(): Promise<string[]> {
        try {
            const images = (await fs.readdir(Files.fullImagePath)).map(
                (filename: string): string => filename.split('.')[0]
              );

            return images;
        } catch (error) {
            return [];
        }
    }
    
    static async thumbIsExist(params: {filename: string, width: number, height: number}): Promise<string> {
        const filePath = path.resolve(
            Files.thumbImagePath,
            `${params.filename}_${params.height}_${params.width}.jpg`
        );

        try {
            const stat = await fs.stat(filePath);
            return filePath;
        } catch {
            return '';
        }
    }

    static async createThumb(params: {
        filename: string, width: number, height: number
    }): Promise<string> {
        const fullPath = path.resolve(
            Files.fullImagePath,
            `${params.filename}.jpg`
        );
        
        const thumbPath = path.resolve(
            Files.thumbImagePath,
            `${params.filename}_${params.height}_${params.width}.jpg`
        );

        try {
            await sharp(fullPath)
                .resize(params.width, params.height)
                .toFormat('jpg')
                .toFile(thumbPath)
            
            return thumbPath;
        } catch (error) {
            return '';
        }
    }
}