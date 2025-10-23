
import React from 'react';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 sm:py-24 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">กรณีศึกษา</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          เรากำลังรวบรวมเรื่องราวความสำเร็จของลูกค้าของเรา โปรดกลับมาตรวจสอบอีกครั้งเร็วๆ นี้!
        </p>
        <div className="mt-12">
            <div className="animate-pulse bg-gray-800/50 rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto">
                <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-full mx-auto mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
