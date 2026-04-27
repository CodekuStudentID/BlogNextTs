interface Category {
    nasional:   string;
    lokal:      string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: 'cpns' | 'bumn' | 'ppk' | 'karir'; 
  image_url: string;
  date: string;
  author: string;
  tag: string;
}