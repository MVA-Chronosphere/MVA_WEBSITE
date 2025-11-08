// src/components/AdminLogin.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Change 'admin123' to your desired password
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      onLogin();
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Admin Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter admin password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate('/blogs')}
          className="w-full mt-4 text-gray-600 py-2 rounded-lg font-medium hover:text-gray-800 transition-colors"
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
}