export interface Movie {
    id: number;
    title: string;
    
    description?: string;
    imageUrl?: string;
    imageCaption?: string;
    content?: string;
    author?: string;
    publishDate?: string;
}