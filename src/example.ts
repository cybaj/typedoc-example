/**
 * Represents a book.
 */
export class Book {

    /**
     * The title of the book.
     */
    title: string;

    /**
     * The author of the book.
     */
    author: string;

    /**
     * Constructs a new book instance.
     * @param title - The title of the book.
     * @param author - The author of the book.
     */
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    /**
     * Provides a summary of the book.
     * @returns A string summary of the book.
     */
    summarize(): string {
        return `${this.title} by ${this.author}`;
    }
}

