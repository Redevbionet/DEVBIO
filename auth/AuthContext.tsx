
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (username: string, pass: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGitHub: () => Promise<void>;
  logout: () => void;
  updateUser: (name: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('user');
    }
  }, []);

  const handleLoginSuccess = (userData: { name: string }) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/dashboard');
  };
  
  const login = async (username: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (username === 'admin' && pass === 'password') {
                handleLoginSuccess({ name: 'Admin User' });
                resolve();
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
  };

  const loginWithGoogle = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        handleLoginSuccess({ name: 'Google User' });
        resolve();
      }, 500);
    });
  };

  const loginWithGitHub = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        handleLoginSuccess({ name: 'GitHub User' });
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const updateUser = async (name: string) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            if (user) {
                const updatedUser = { ...user, name };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
            resolve();
        }, 500);
    });
  };


  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loginWithGoogle, loginWithGitHub, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};