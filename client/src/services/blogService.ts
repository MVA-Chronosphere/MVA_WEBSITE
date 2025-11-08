// src/services/blogService.ts
export interface Blog {
  image: string;
  title: string;
  desc: string;
  category: string;
  content: string;
}

export interface BlogData {
  achievements: Blog[];
  innovation: Blog[];
  parenting: Blog[];
}

// Import your JSON data
import blogData from '@/data/blogs.json';

class BlogService {
  private readonly STORAGE_KEY = 'macrovision_blog_additions';

  // Get all blog data - combines JSON data with localStorage additions
  getBlogData(): BlogData {
    try {
      // Get additions from localStorage
      const storedAdditions = localStorage.getItem(this.STORAGE_KEY);
      const additions: Partial<BlogData> = storedAdditions ? JSON.parse(storedAdditions) : {};
      
      // Merge JSON data with localStorage additions (additions come first)
      return {
        achievements: [...(additions.achievements || []), ...blogData.achievements],
        innovation: [...(additions.innovation || []), ...blogData.innovation],
        parenting: [...(additions.parenting || []), ...blogData.parenting],
      };
    } catch (error) {
      console.error('Error reading blog data:', error);
      return blogData;
    }
  }

  // Add new blog post to localStorage
  addBlogPost(category: keyof BlogData, blog: Blog): void {
    const additions = this.getStoredAdditions();
    
    if (!additions[category]) {
      additions[category] = [];
    }

    additions[category]!.unshift(blog); // Add to beginning
    this.saveAdditions(additions);
  }

  // Export all blog data
  exportBlogData(): string {
    return JSON.stringify(this.getBlogData(), null, 2);
  }

  // Import blog data
  importBlogData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData) as BlogData;
      this.saveAdditions(data);
      return true;
    } catch (error) {
      console.error('Error importing blog data:', error);
      return false;
    }
  }

  // Reset to original JSON data only
  resetToDefault(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Private methods
  private getStoredAdditions(): Partial<BlogData> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  private saveAdditions(additions: Partial<BlogData>): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(additions));
  }
}

export const blogService = new BlogService();