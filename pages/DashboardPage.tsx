
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { UserCircleIcon } from '../components/icons';

const DashboardPage: React.FC = () => {
  const auth = useContext(AuthContext);

  if (!auth || !auth.user) {
    // This should be handled by ProtectedRoute, but as a fallback:
    return null; 
  }

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">แดชบอร์ด</h1>
          <p className="mt-4 text-lg text-gray-400">ยินดีต้อนรับสู่พื้นที่ของคุณ</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl border border-gray-700 p-8 text-center shadow-2xl shadow-cyan-500/10">
            <UserCircleIcon className="w-24 h-24 mx-auto text-cyan-400 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-2">
              สวัสดี, {auth.user.name}!
            </h2>
            <p className="text-gray-300">
              นี่คือหน้าแดชบอร์ดส่วนตัวของคุณ คุณสามารถดูข้อมูลและจัดการการตั้งค่าต่างๆได้ที่นี่
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <Link to="/profile/edit" className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 hover:border-cyan-500 hover:bg-gray-700 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">ข้อมูลโปรไฟล์</h3>
                    <p className="text-gray-400">ดูและแก้ไขข้อมูลส่วนตัวของคุณ</p>
                </Link>
                <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">การตั้งค่า</h3>
                    <p className="text-gray-400">จัดการการตั้งค่าบัญชีและความปลอดภัย</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;