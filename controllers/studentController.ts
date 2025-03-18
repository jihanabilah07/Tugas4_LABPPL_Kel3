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

// Mendapatkan mahasiswa berdasarkan ID
export const getStudentById = (req: Request, res: Response) => {
    const students: Student[] = readJSON(dbPath);
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(student);
};

// Mencari mahasiswa berdasarkan nama
export const searchStudentByName = (req: Request, res: Response) => {
    const { name } = req.query;
    const students: Student[] = readJSON(dbPath);
    const filtered = students.filter(s => s.name.toLowerCase().includes((name as string).toLowerCase()));

    if (filtered.length === 0) return res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    res.json(filtered);
};
