import {z} from 'zod';


export const  BookSchema = z.object({
    Author: z.string(),
    Tittle: z.string(),
    year_published: z.string(),
})