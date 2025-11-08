// src/pages/AdminBlogPage.tsx
import { useState, useEffect } from 'react';
// import AdminBlogForm from '@/components/AdminBlogForm';
// import AdminLogin from '@/components/AdminLogin';
import AdminBlogForm from '@/components/ui/AdminBlogForm';
import AdminLogin from '@/components/ui/AdminLogin';

export default function AdminBlogPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if already authenticated on component mount
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    setIsAuthenticated(isAdmin);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminBlogForm />;
}