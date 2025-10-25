
import React from 'react';
import { DatabaseIcon, ShieldCheckIcon, ChartBarIcon } from '../components/icons';

const philosophies = [
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-cyan-400" />,
    title: "ความปลอดภัย",
    description: "เราให้ความสำคัญสูงสุดกับการปกป้องข้อมูลของลูกค้า ด้วยมาตรฐานความปลอดภัยระดับโลก"
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-cyan-400" />,
    title: "ประสิทธิภาพ",
    description: "โซลูชันของเราถูกออกแบบมาเพื่อประสิทธิภาพสูงสุด เพื่อให้ธุรกิจของคุณทำงานได้อย่างราบรื่น"
  },
  {
    icon: <DatabaseIcon className="w-10 h-10 text-cyan-400" />,
    title: "ความน่าเชื่อถือ",
    description: "เราสร้างระบบที่มีความเสถียรและพร้อมใช้งานอยู่เสมอ เพื่อให้คุณมั่นใจในทุกสถานการณ์"
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">เกี่ยวกับ Redevbionet</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            สร้างสรรค์นวัตกรรมด้านข้อมูล เพื่อขับเคลื่อนธุรกิจของคุณสู่ความสำเร็จ
          </p>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          <div className="lg:col-span-2">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Team working on a project" 
              className="rounded-xl shadow-2xl shadow-cyan-500/20"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-4">วิสัยทัศน์และพันธกิจของเรา</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              <strong>วิสัยทัศน์:</strong> เพื่อเป็นผู้นำด้านโซลูชันระบบจัดเก็บข้อมูลและ ERP Visualization ในภูมิภาคเอเชียตะวันออกเฉียงใต้ โดยนำเสนอเทคโนโลยีที่ล้ำสมัยและบริการที่เป็นเลิศ
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>พันธกิจ:</strong> เรามุ่งมั่นที่จะช่วยให้ลูกค้าของเราสามารถจัดการ, ปกป้อง, และใช้ประโยชน์จากข้อมูลได้อย่างเต็มศักยภาพ ผ่านการพัฒนาระบบที่มีประสิทธิภาพ, ปลอดภัย, และน่าเชื่อถือ พร้อมสร้างความสัมพันธ์อันดีกับลูกค้าในระยะยาว
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="text-center bg-gray-800/40 p-10 rounded-xl border border-gray-700 mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">ทีมงานผู้เชี่ยวชาญ</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ทีมงานของเราประกอบด้วย <span className="text-cyan-400 font-semibold"> Developer และผู้เชี่ยวชาญด้าน System Development และ Storage System</span> ที่มีประสบการณ์ยาวนาน เรามีความหลงใหลในการแก้ปัญหาที่ซับซ้อนและมุ่งมั่นที่จะส่งมอบผลงานที่มีคุณภาพสูงสุดให้กับลูกค้าของเราทุกคน
          </p>
        </div>

        {/* Philosophy Section */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">ปรัชญาการทำงานของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
