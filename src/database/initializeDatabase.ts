import { type SQLiteDatabase } from 'expo-sqlite'

export async function initializeDatabase( database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS products(
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTERGER NOT NULL
        );
    `)
}