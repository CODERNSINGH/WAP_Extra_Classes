import { promises as fs } from "fs";
import path from "path";
import dbAddress from "@/db";

export const getData = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, return empty array
      return [];
    }
    throw error;
  }
};

export const postData = async (filePath, entry) => {
  const data = await getData(filePath);
  data.push(entry);
  return await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export const putData = async (filePath, data) => {
  return await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

export const verifyToken = async (token) => {
  const file = path.join(dbAddress, "tokenRegistry.json");
  const tokens = await getData(file);
  return tokens.includes(token);
};