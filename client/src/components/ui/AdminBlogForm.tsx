// src/components/AdminBlogForm.tsx
import React, { useState } from 'react';
import { Save, X, Download, Upload } from 'lucide-react';
import { blogService, Blog, BlogData } from '@/services/blogService';
import { useNavigate } from 'react-router-dom';

export default function AdminBlogForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Blog>({
    image: '',
    title: '',
    desc: '',
    category: '',
    content: ''
  });

  const [selectedCategory, setSelectedCategory] = useState<keyof BlogData>('innovation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showImportExport, setShowImportExport] = useState(false);
  const [importData, setImportData] = useState('');

  const categories: { value: keyof BlogData; label: string }[] = [
    { value: 'achievements', label: 'Achievements' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'parenting', label: 'Parenting' }
  ];

  // Default placeholder images for each category
  const getDefaultImage = (category: keyof BlogData) => {
    const defaultImages = {
      achievements: 'MVA 02.jpg',
      innovation: 'MVA 05.jpg', 
      parenting: 'screentime.jpeg'
    };
    return defaultImages[category];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use default image if no image provided
      const blogToAdd = {
        ...formData,
        image: formData.image || getDefaultImage(selectedCategory)
      };

      blogService.addBlogPost(selectedCategory, blogToAdd);
      
      // Reset form
      setFormData({
        image: '',
        title: '',
        desc: '',
        category: '',
        content: ''
      });

      alert('Blog post added successfully!');
      
      // Refresh the main blogs page
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error adding blog post:', error);
      alert('Error adding blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof Blog, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExport = () => {
    const data = blogService.exportBlogData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'macrovision-blogs-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (blogService.importBlogData(importData)) {
      alert('Blog data imported successfully!');
      setShowImportExport(false);
      setImportData('');
      window.dispatchEvent(new Event('storage'));
    } else {
      alert('Error importing blog data. Please check the format.');
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all added blogs? This will keep only the original blogs.')) {
      blogService.resetToDefault();
      alert('Blog data reset successfully!');
      window.dispatchEvent(new Event('storage'));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/blogs');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setShowImportExport(!showImportExport)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Import/Export
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                Reset Added Blogs
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
          <p className="text-gray-600">Add new blog posts. Changes are saved automatically and persist across sessions.</p>
        </div>

        {/* Import/Export Section */}
        {showImportExport && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Import/Export Blog Data</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Export Data</h3>
                <p className="text-sm text-gray-600 mb-3">Download all blog data as a backup.</p>
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Export Blog Data
                </button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Import Data</h3>
                <p className="text-sm text-gray-600 mb-3">Restore blog data from a backup file.</p>
                <textarea
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  placeholder="Paste your JSON data here..."
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none text-sm"
                />
                <button
                  onClick={handleImport}
                  disabled={!importData.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  <Upload className="w-4 h-4" />
                  Import Blog Data
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="grid gap-6">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as keyof BlogData)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Image URL - Now Optional */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => handleInputChange('image', e.target.value)}
                placeholder="e.g., MVA 02.jpg or https://example.com/image.jpg"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Leave empty to use default image for this category
              </p>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter blog post title"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.desc}
                onChange={(e) => handleInputChange('desc', e.target.value)}
                placeholder="Enter a short description"
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                required
              />
            </div>

            {/* Category Tag */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Tag *
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                placeholder="e.g., Academic Excellence, Innovation & Skills"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Enter the full blog content. Use ## for headings, ### for subheadings, and - for list items."
                rows={15}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono text-sm"
                required
              />
              <div className="mt-2 text-sm text-gray-500">
                <p><strong>Formatting tips:</strong></p>
                <p>## Heading → Creates a main heading</p>
                <p>### Subheading → Creates a subheading</p>
                <p>- List item → Creates a bullet point</p>
                <p>Empty line → Creates a paragraph break</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" />
                {isSubmitting ? 'Adding...' : 'Add Blog Post'}
              </button>
            </div>
          </div>
        </form>

        {/* Current Blog Stats */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6">
          <h2 className="text-lg font-semibold mb-4">Current Blog Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const data = blogService.getBlogData();
              const count = data[cat.value]?.length || 0;
              return (
                <div key={cat.value} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{count}</div>
                  <div className="text-sm text-gray-600">{cat.label} Posts</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}