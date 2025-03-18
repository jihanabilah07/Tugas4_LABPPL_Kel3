import * as fs from "fs";


export const readJSON = (filePath: string) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

export const writeJSON = (filePath: string, data: any) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};
