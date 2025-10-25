
import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ToastContext } from '../context/ToastContext';
import { GoogleIcon, GitHubIcon } from '../components/icons';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const auth = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  if (!auth) {
    // This should not happen if the component is rendered within AuthProvider
    return <div>Error: AuthContext not found</div>;
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await auth.login(username, password);
      // Navigation happens inside the login function on success
    } catch (err) {
      showToast('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    try {
        if (provider === 'google') {
            await auth.loginWithGoogle();
        } else {
            await auth.loginWithGitHub();
        }
    } catch (err) {
        showToast('เกิดข้อผิดพลาดในการเข้าสู่ระบบผ่านโซเชียล', 'error');
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800/50 p-10 rounded-xl border border-gray-700 shadow-2xl shadow-cyan-500/10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            เข้าสู่ระบบ
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">ชื่อผู้ใช้</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                disabled={isLoading}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm disabled:opacity-50"
                placeholder="ชื่อผู้ใช้ (admin)"
              />
            </div>
            <div className="-mt-px">
              <label htmlFor="password" className="sr-only">รหัสผ่าน</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm disabled:opacity-50"
                placeholder="รหัสผ่าน (password)"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </button>
          </div>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">
              หรือเข้าสู่ระบบด้วย
            </span>
          </div>
        </div>

        <div className="space-y-4">
            <button
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 disabled:opacity-50 transition-colors"
            >
                <GoogleIcon className="w-5 h-5 mr-3" />
                เข้าสู่ระบบด้วย Google
            </button>
            <button
                onClick={() => handleSocialLogin('github')}
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 disabled:opacity-50 transition-colors"
            >
                <GitHubIcon className="w-5 h-5 mr-3" />
                เข้าสู่ระบบด้วย GitHub
            </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;