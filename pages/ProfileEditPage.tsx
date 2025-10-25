
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ToastContext } from '../context/ToastContext';
import { UserCircleIcon } from '../components/icons';

const ProfileEditPage: React.FC = () => {
  const auth = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (auth?.user) {
      setName(auth.user.name);
    }
  }, [auth?.user]);

  if (!auth || !auth.user) {
    return null; // Should be handled by ProtectedRoute
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    try {
      await auth.updateUser(name);
      showToast('บันทึกข้อมูลโปรไฟล์เรียบร้อยแล้ว!', 'success');
    } catch (error) {
      console.error("Failed to update profile", error);
      showToast('ไม่สามารถอัปเดตโปรไฟล์ได้', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800/50 p-10 rounded-xl border border-gray-700 shadow-2xl shadow-cyan-500/10">
        <div>
            <UserCircleIcon className="w-20 h-20 mx-auto text-cyan-400" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            แก้ไขโปรไฟล์
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">ชื่อ</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={isLoading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm disabled:opacity-50"
              placeholder="ชื่อของคุณ"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลง'}
            </button>
          </div>
        </form>
         <div className="text-center">
            <Link to="/dashboard" className="font-medium text-cyan-400 hover:text-cyan-300">
                &larr; กลับไปที่แดชบอร์ด
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;