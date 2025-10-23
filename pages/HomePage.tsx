
import React from 'react';
import { Link } from 'react-router-dom';
import { DatabaseIcon, ShieldCheckIcon, ChartBarIcon, ViewGridIcon } from '../components/icons';

const services = [
  {
    icon: <DatabaseIcon className="w-12 h-12 text-cyan-400" />,
    title: 'การพัฒนาระบบจัดเก็บข้อมูล',
    description: 'ออกแบบและสร้างโซลูชันการจัดเก็บข้อมูลประสิทธิภาพสูงที่ปรับขนาดได้ตามความต้องการของธุรกิจคุณ'
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-cyan-400" />,
    title: 'การป้องกันระบบจัดเก็บข้อมูล',
    description: 'ปกป้องข้อมูลอันมีค่าของคุณด้วยกลยุทธ์การสำรองข้อมูล การกู้คืน และความปลอดภัยที่แข็งแกร่ง'
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-cyan-400" />,
    title: 'การวิเคราะห์ระบบจัดเก็บข้อมูล',
    description: 'รับข้อมูลเชิงลึกเกี่ยวกับประสิทธิภาพ ความจุ และความปลอดภัยของระบบจัดเก็บข้อมูลของคุณ'
  },
  {
    icon: <ViewGridIcon className="w-12 h-12 text-cyan-400" />,
    title: 'Circle Soft ERP Visualization',
    description: 'แปลงข้อมูล ERP ที่ซับซ้อนให้เป็นภาพแดชบอร์ดที่เข้าใจง่ายและนำไปใช้ตัดสินใจได้'
  }
];

const partners = [
  { name: 'CloudProvider', logo: 'Cloud Co.' },
  { name: 'DataSecure', logo: 'Secure Inc.' },
  { name: 'InnovateERP', logo: 'ERP Solutions' },
  { name: 'TechSolutions', logo: 'Tech Corp.' },
  { name: 'FutureData', logo: 'Future Systems' },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Abstract network background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        </div>
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter animate-fade-in-down">
            Redevbionet: ผู้บุกเบิกโซลูชันระบบจัดเก็บข้อมูลและ <span className="text-cyan-400">ERP แห่งอนาคต</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            เราเชี่ยวชาญในการพัฒนาและปกป้องระบบจัดเก็บข้อมูลที่สำคัญ พร้อมนำเสนอการแสดงผลข้อมูล Circle Soft ERP ที่ทรงพลัง
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Link to="/services" className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-cyan-500/30">
              เรียนรู้เพิ่มเติมเกี่ยวกับบริการ
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-gray-700/50 text-white font-bold rounded-full hover:bg-gray-600/70 transition-transform transform hover:scale-105 duration-300 border border-gray-600">
              ขอคำปรึกษา
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">บริการหลักของเรา</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">เรานำเสนอโซลูชันที่ครอบคลุมเพื่อตอบสนองความต้องการด้านข้อมูลขององค์กรคุณ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white text-center mb-3">{service.title}</h3>
                <p className="text-gray-400 text-center text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-xl font-semibold text-gray-400 mb-8">ได้รับความไว้วางใจจากบริษัทชั้นนำ</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <div key={partner.name} className="text-gray-500 text-2xl font-bold filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
