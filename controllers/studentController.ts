import { Request, Response } from "express";
import { Student } from "../utils/studentType";
import { readJSON, writeJSON } from "../utils/fileHandler";

const dbPath = "./database/mahasiswa.json";

// Mendapatkan semua mahasiswa (dengan paginasi)
export const getAllStudents = (req: Request, res: Response) => {
    const students: Student[] = readJSON(dbPath);
    const { page, limit } = req.query;

    if (page && limit) {
        const pageNum = parseInt(page as string);
        const limitNum = parseInt(limit as string);
        const startIndex = (pageNum - 1) * limitNum;
        const paginatedData = students.slice(startIndex, startIndex + limitNum);
        return res.json({ total: students.length, data: paginatedData });
    }

    res.json({ total: students.length, data: students });
};
