import React from 'react';
    import { useTranslation } from 'react-i18next';
import zaki from '../assets/images/zaki.jpg';
import Nassar from '../assets/images/Nassar.jpg';
import Ragab from '../assets/images/Ragab.jpg';
import Wafaa from '../assets/images/Wafaa.jpg';

   const doctors = [
  {
    department: "Internal Medicine",
    departmentAr: "الطب الباطني",
    doctors: [
      {
        name: "Dr. Sayed Zaki",
        nameAr: "د. السيد زكي",
        image: zaki
      }
    ]
  },
  {
    department: "Dermatology",
    departmentAr: "الجلدية",
    doctors: [
      {
        name: "Dr. Essam Shaker",
        nameAr: "د. عصام شاكر",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Hala Shawky",
        nameAr: "د. هالة شوقي",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "Neurology",
    departmentAr: "المخ والأعصاب",
    doctors: [
      {
        name: "Dr. Suleiman Maghrabi",
        nameAr: "د. سليمان مغربي",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "ENT",
    departmentAr: "الأنف والأذن والحنجرة",
    doctors: [
      {
        name: "Dr. Abdel Sattar Hassan Khamis",
        nameAr: "د. عبد الستار حسن خميس",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Noman Hassan Noman",
        nameAr: "د. نعمان حسن نعمان",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "Orthopedics",
    departmentAr: "العظام",
    doctors: [
      {
        name: "Dr. Sherif Zoheir",
        nameAr: "د. شريف زهير",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Tarek Yahya",
        nameAr: "د. طارق يحيى",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Mohamed Fathy",
        nameAr: "د. محمد فتحي",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "General Surgery",
    departmentAr: "الجراحة العامة",
    doctors: [
      {
        name: "Dr. Mohamed Hossam",
        nameAr: "د. محمد حسام",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Mahmoud Nassar",
        nameAr: "د. محمود نصار",
        image: Nassar
      },
      {
        name: "Dr. Mostafa El Sheikh",
        nameAr: "د. مصطفى الشيخ",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Mohamed Hesham",
        nameAr: "د. محمد هشام",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "Obstetrics and Gynecology",
    departmentAr: "النساء والتوليد",
    doctors: [
      {
        name: "Dr. Esraa El-Bilqini",
        nameAr: "د. إسراء البلقيني",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Roqia Sayed",
        nameAr: "د. رقية سيد",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Wafaa Khaled",
        nameAr: "د. وفاء خالد",
        image: "Wafaa"
      }
    ]
  },
  {
    department: "Cardiology",
    departmentAr: "القلب",
    doctors: [
      {
        name: "Dr. Hossam Magdy",
        nameAr: "د. حسام مجدي",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Ehab El-Hefny",
        nameAr: "د. إيهاب الحفني",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "Gastroenterology",
    departmentAr: "الجهاز الهضمي",
    doctors: [
      {
        name: "Dr. Samar Kamal",
        nameAr: "د. سمر كمال",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    department: "Diet and Nutrition",
    departmentAr: "التغذية",
    doctors: [
      {
        name: "Dr. Mona Abdel Khaleq",
        nameAr: "د. منى عبد الخالق",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
      }
    ]
  }
];

const Doctors = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredDoctors = doctors.filter(dept => {
    const deptMatch = selectedDepartment === 'all' || dept.department.toLowerCase() === selectedDepartment;
    const searchMatch = searchTerm === '' || 
      dept.doctors.some(doc => 
        (isArabic ? doc.nameAr : doc.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (isArabic ? dept.departmentAr : dept.department).toLowerCase().includes(searchTerm.toLowerCase())
      );
    return deptMatch && searchMatch;
  });

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'فريقنا الطبي' : 'Our Medical Team'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? 'نخبة من الأطباء المتخصصين ذوي الخبرة في مختلف المجالات الطبية'
              : 'Our team of specialized doctors with extensive experience in various medical fields'}
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder={isArabic ? 'ابحث عن طبيب أو تخصص' : 'Search for doctor or specialty'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">{isArabic ? 'جميع التخصصات' : 'All Departments'}</option>
            {doctors.map((dept, index) => (
              <option key={index} value={dept.department.toLowerCase()}>
                {isArabic ? dept.departmentAr : dept.department}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-12">
          {filteredDoctors.map((dept, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-6">
                  {isArabic ? dept.departmentAr : dept.department}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {dept.doctors.map((doctor, docIndex) => (
                    <div
                      key={docIndex}
                      className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                        <img
                          src={doctor.image}
                          alt={isArabic ? doctor.nameAr : doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                        {isArabic ? doctor.nameAr : doctor.name}
                      </h4>
                      <p className="text-sm text-gray-600 text-center">
                        {isArabic ? dept.departmentAr : dept.department}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
