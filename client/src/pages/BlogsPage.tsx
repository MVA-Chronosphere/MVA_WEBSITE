// src/pages/BlogsPage.tsx
import { useState, useEffect } from "react";
import { X, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogService, BlogData } from "@/services/blogService";

interface Blog {
  image: string;
  title: string;
  desc: string;
  category: string;
  content: string;
}

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogs, setBlogs] = useState<BlogData>({
    achievements: [],
    innovation: [],
    parenting: []
  });

  // Check if user is admin
  const isAdmin = localStorage.getItem('isAdmin') === 'true' || 
                  window.location.search.includes('admin=true');

  // Load blogs on component mount
  useEffect(() => {
    const blogData = blogService.getBlogData();
    setBlogs(blogData);
  }, []);

  // Listen for storage changes (when new blogs are added)
  useEffect(() => {
    const handleStorageChange = () => {
      const blogData = blogService.getBlogData();
      setBlogs(blogData);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const cardClass = "bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col h-full";
  const imageBox = "aspect-video w-full overflow-hidden bg-gray-100 flex-shrink-0";

  const handleReadMore = (blog: Blog, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  // Function to determine grid layout based on item count
  const getGridLayout = (count: number) => {
    if (count === 1) {
      return "grid-cols-1 max-w-2xl mx-auto"; // Single item centered
    } else if (count === 2) {
      return "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"; // 2 items centered
    } else {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // 3+ items normal grid
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs & Insights</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert perspectives on education, parenting, and student development
          </p>
        </div>
      </div>

      {/* Admin Button - Only show if user is admin */}
      {isAdmin && (
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <div className="flex justify-end">
            <button
              onClick={() => window.location.href = '/admin/blogs'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Manage Blogs
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="innovation" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="innovation">Innovation</TabsTrigger>
            <TabsTrigger value="parenting">Parenting</TabsTrigger>
          </TabsList>

          {/* Innovation Tab */}
          <TabsContent value="innovation" className="space-y-8">
            <div className={`grid gap-6 ${getGridLayout(blogs.innovation.length)}`}>
              {blogs.innovation.map((blog, i) => (
                <article key={i} className={cardClass}>
                  <div className={imageBox}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-primary font-semibold mb-3">{blog.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{blog.desc}</p>
                    <button 
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 mt-auto"
                      onClick={(e) => handleReadMore(blog, e)}
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <div className={`grid gap-6 ${getGridLayout(blogs.achievements.length)}`}>
              {blogs.achievements.map((blog, i) => (
                <article key={i} className={cardClass}>
                  <div className={imageBox}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-primary font-semibold mb-3">{blog.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{blog.desc}</p>
                    <button 
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 mt-auto"
                      onClick={(e) => handleReadMore(blog, e)}
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Parenting Tab */}
          <TabsContent value="parenting" className="space-y-8">
            <div className={`grid gap-6 ${getGridLayout(blogs.parenting.length)}`}>
              {blogs.parenting.map((blog, i) => (
                <article key={i} className={cardClass}>
                  <div className={imageBox}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-primary font-semibold mb-3">{blog.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{blog.desc}</p>
                    <button 
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 mt-auto"
                      onClick={(e) => handleReadMore(blog, e)}
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Blog Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-6xl max-h-[95vh] w-full overflow-hidden flex flex-col">
            {/* Modal Header with Image */}
            <div className="relative">
              <div className="h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedBlog.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">2 min read</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                  {selectedBlog.title}
                </h2>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  {selectedBlog.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-lg md:text-xl font-bold text-gray-800 mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      return (
                        <li key={index} className="text-gray-700 mb-2 ml-4 flex items-start">
                          <span className="text-primary mr-3 mt-2 flex-shrink-0">•</span>
                          <span className="flex-1">{paragraph.replace('- ', '')}</span>
                        </li>
                      );
                    } else if (paragraph.trim() === '') {
                      return <div key={index} className="h-4" />;
                    } else {
                      return (
                        <p key={index} className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
                <div className="text-sm text-gray-600">
                  Macro Vision Academy Burhanpur
                </div>
                <button
                  onClick={closeModal}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}