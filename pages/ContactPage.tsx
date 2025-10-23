
import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">ติดต่อเรา</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            เราพร้อมให้คำปรึกษาและตอบทุกคำถามของคุณ
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-8 md:p-12 bg-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">ข้อมูลการติดต่อ</h2>
              <p className="text-gray-400 mb-8">
                ติดต่อเราผ่านช่องทางด้านล่าง หรือกรอกแบบฟอร์มเพื่อส่งข้อความถึงเราโดยตรง
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <LocationMarkerIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">ที่อยู่</h3>
                    <p className="text-gray-400">123 Tech Avenue, Silicon Valley, Bangkok 10110</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">โทรศัพท์</h3>
                    <p className="text-gray-400">(+66) 12-345-6789</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MailIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">อีเมล</h3>
                    <p className="text-gray-400">contact@redevbionet.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">ส่งข้อความถึงเรา</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">ชื่อ</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">อีเมล</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">ข้อความ</label>
                  <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:ring-cyan-500 focus:border-cyan-500 transition"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={status === 'sending'} className="w-full px-6 py-3 bg-cyan-500 text-white font-bold rounded-md hover:bg-cyan-600 transition-colors duration-300 disabled:bg-cyan-800 disabled:cursor-not-allowed">
                    {status === 'sending' ? 'กำลังส่ง...' : 'ส่งข้อความ'}
                  </button>
                </div>
                {status === 'sent' && <p className="text-green-400 text-center">ข้อความของคุณถูกส่งเรียบร้อยแล้ว!</p>}
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
