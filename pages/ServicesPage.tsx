
import React, { ReactNode } from 'react';
import { CheckCircleIcon } from '../components/icons';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, features, reverse = false }) => {
  return (
    <div className="mb-24">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        <div className={`p-4 ${reverse ? 'lg:col-start-2' : ''}`}>
          <img src={imageSrc} alt={title} className="rounded-xl shadow-2xl shadow-cyan-500/20 object-cover w-full h-auto aspect-video" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">{title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


const ServicesPage: React.FC = () => {
  const services = [
    {
      imageSrc: "https://picsum.photos/800/600?random=10",
      title: "การพัฒนาระบบจัดเก็บข้อมูล (Storage Systems Development)",
      description: "เราออกแบบและสร้างสถาปัตยกรรมระบบจัดเก็บข้อมูลที่ทันสมัย, มีประสิทธิภาพสูง, และสามารถขยายตัวได้ เพื่อรองรับการเติบโตของข้อมูลในองค์กรของคุณ",
      features: [
        "การออกแบบสถาปัตยกรรม (SAN, NAS, Object, Cloud)",
        "โซลูชันการจัดการข้อมูล (Software-Defined Storage - SDS)",
        "การปรับแต่งประสิทธิภาพ (High-Performance Storage)",
        "การผสานรวมระบบคลาวด์ (Hybrid & Multi-Cloud Integration)"
      ]
    },
    {
      imageSrc: "https://picsum.photos/800/600?random=11",
      title: "การป้องกันระบบจัดเก็บข้อมูล (Storage System Protection)",
      description: "ความปลอดภัยของข้อมูลคือหัวใจสำคัญ เรานำเสนอโซลูชันการป้องกันข้อมูลที่ครอบคลุม เพื่อให้คุณมั่นใจได้ว่าข้อมูลของคุณจะปลอดภัยและพร้อมใช้งานเสมอ",
      features: [
        "ความปลอดภัยของข้อมูล (การเข้ารหัส, การควบคุมการเข้าถึง, การจัดการกุญแจ)",
        "การสำรองและกู้คืน (Backup & Recovery, DRP, BCP)",
        "ความทนทานต่อความผิดพลาด (Fault Tolerance: RAID, Replication, High Availability)",
        "การป้องกัน Ransomware และภัยคุกคามทางไซเบอร์"
      ],
      reverse: true
    },
    {
      imageSrc: "https://picsum.photos/800/600?random=12",
      title: "การวิเคราะห์ระบบจัดเก็บข้อมูล (Storage System Analysis)",
      description: "เปลี่ยนข้อมูลการทำงานของระบบให้เป็นข้อมูลเชิงลึกที่นำไปใช้งานได้จริง เราช่วยคุณตรวจสอบ, วิเคราะห์, และวางแผนการใช้ทรัพยากรอย่างมีประสิทธิภาพ",
      features: [
        "การตรวจสอบประสิทธิภาพ (I/OPS, Latency, Throughput)",
        "การวิเคราะห์ความปลอดภัย (Vulnerability Assessment, Penetration Testing)",
        "การวิเคราะห์ความจุและการวางแผน (Capacity Planning)",
        "การวิเคราะห์ Log เพื่อตรวจจับสิ่งผิดปกติ (Anomaly Detection)"
      ]
    },
    {
      imageSrc: "https://picsum.photos/800/600?random=13",
      title: "Circle Soft ERP System Visualization",
      description: "ปลดล็อกศักยภาพข้อมูล ERP ของคุณด้วยระบบ Visualization ที่ทรงพลัง เราช่วยแปลงข้อมูลที่ซับซ้อนให้เป็นแดชบอร์ดที่สวยงาม, โต้ตอบได้ และเข้าใจง่าย",
      features: [
        "แดชบอร์ดสำหรับผู้บริหารที่ปรับแต่งได้",
        "การวิเคราะห์ข้อมูลการขาย, การเงิน, และสินค้าคงคลัง",
        "การแสดงผลข้อมูลแบบเรียลไทม์",
        "ช่วยให้การตัดสินใจทางธุรกิจรวดเร็วและแม่นยำยิ่งขึ้น"
      ],
      reverse: true
    }
  ];

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">บริการของเรา</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            โซลูชันที่ครอบคลุมและปรับแต่งได้เพื่อตอบสนองความต้องการด้านข้อมูลที่ซับซ้อนที่สุด
          </p>
        </div>
        
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
