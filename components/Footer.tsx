
import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon, LinkedInIcon, FacebookIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Redevbio<span className="text-cyan-400">net</span>
            </h3>
            <p className="mt-4 text-gray-400">
              ผู้บุกเบิกโซลูชันระบบจัดเก็บข้อมูลและ ERP แห่งอนาคต
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><FacebookIcon className="w-6 h-6"/></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><TwitterIcon className="w-6 h-6"/></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><LinkedInIcon className="w-6 h-6"/></a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider">ติดต่อเรา</h4>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <LocationMarkerIcon className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="ml-3 text-gray-400">123 Tech Avenue, Silicon Valley, Bangkok 10110</span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-cyan-400" />
                  <span className="ml-3 text-gray-400">(+66) 12-345-6789</span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <span className="ml-3 text-gray-400">contact@redevbionet.com</span>
                </li>
              </ul>
            </div>
             <div>
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider">ลิงค์ด่วน</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">เกี่ยวกับเรา</a></li>
                <li><a href="#/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">บริการ</a></li>
                <li><a href="#/contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">ติดต่อเรา</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">นโยบายความเป็นส่วนตัว</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Redevbionet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
