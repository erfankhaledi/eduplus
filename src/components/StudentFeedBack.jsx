'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star, Facebook, Instagram, Twitter, WebcamIcon as Skype, Quote } from 'lucide-react';

interface StudentCardProps {
  name: string;
  role: string;
  feedback: string;
  imageSrc: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, role, feedback, imageSrc }) => (
  <div className="student-card">
    <h4 className="title">{name}/ <span>{role}</span></h4>
    <p className="para">{feedback}</p>
    <ul className="star">
      {[...Array(5)].map((_, i) => (
        <li key={i}><Star className="text-yellow-400" size={18} /></li>
      ))}
    </ul>
    <ul className="social">
      {[Facebook, Instagram, Twitter, Skype].map((Icon, i) => (
        <li key={i}><a href="#"><Icon size={16} /></a></li>
      ))}
    </ul>
    <div className="user-img">
      <img src={imageSrc} alt={`${name} avatar`} />
    </div>
    <div className="student-card-icon">
      <Quote size={44} />
    </div>
  </div>
);

const StudentFeedback: React.FC = () => {
  const students = [
    { name: "DR.kasime", role: "Student", feedback: "Education is a crucial field of study, as it helps us understand the impact of human activities", imageSrc: "/placeholder.svg?height=68&width=68" },
    { name: "DR.William", role: "Student", feedback: "Education is a crucial field of study, as it helps us understand the impact of human activities", imageSrc: "/placeholder.svg?height=68&width=68" },
    { name: "DR.Sarah", role: "Student", feedback: "Education is a crucial field of study, as it helps us understand the impact of human activities", imageSrc: "/placeholder.svg?height=68&width=68" },
    { name: "DR.Michael", role: "Student", feedback: "Education is a crucial field of study, as it helps us understand the impact of human activities", imageSrc: "/placeholder.svg?height=68&width=68" },
  ];

  return (
    <section className="student-feedback v2 py-20">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h4 className="sub-title text-primary text-lg font-semibold mb-2">Student feedback</h4>
          <h2 className="big-title text-white text-4xl font-bold">Our Student Feedback</h2>
        </div>
        <div className="student-cards">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {students.map((student, index) => (
              <SwiperSlide key={index}>
                <StudentCard {...student} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;

