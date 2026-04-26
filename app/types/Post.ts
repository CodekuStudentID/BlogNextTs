interface Category {
    nasional:   string;
    lokal:      string;
}

export interface Post {
    id:         number;
    title:      string;
    content:    string;
    category:   Category;
}