import React from 'react';
import { Link } from 'react-router-dom';
import { type CourseData } from './data/CourseData';
import { AiFillStar } from 'react-icons/ai';

const CourseCard: React.FC<CourseData> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  price,
  duration,
  level,
  rating,
  reviews,
}) => {
  return (
    <div className="group flex flex-col bg-background rounded-none border-b-2 border-r-2 border-l border-t border-border transition-all duration-300 overflow-hidden hover:bg-[#e6ddcf]">
      {/* Image Container with Badge */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-50">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageSrc}
        />
        {level && (
          <div className="absolute top-4 right-4 bg-background border border-border text-xs font-semibold px-4 py-1 uppercase tracking-widest text-headline">
            {level}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 relative">

        {/* Rating and Duration Row */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          {rating ? (
            <div className="flex items-center gap-1 text-yellow-500 font-medium">
              <AiFillStar /> <span>{rating}</span> <span className="text-gray-400 font-normal ml-1">({reviews})</span>
            </div>
          ) : (
            <div></div> // Spacing placeholder
          )}
          {duration && <div className="font-medium text-gray-600">{duration}</div>}
        </div>

        <h3 className="text-xl sm:text-2xl uppercase font-bold mb-4 text-headline leading-tight line-clamp-2 transition-colors">{title}</h3>
        <p className="text-subtext font-nobile text-sm sm:text-base mb-6 flex-1 line-clamp-3 leading-relaxed">{description}</p>

        {/* Bottom Row: Price & Button */}
        <div className="mt-auto pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-bold text-xl text-headline">
            {price ? `₹${price.toLocaleString('en-IN')}` : 'Free'}
          </div>
          <Link
            className="flex items-center justify-center border border-headline text-headline hover:bg-headline hover:text-white px-6 py-2 uppercase text-xs tracking-widest font-semibold transition-all duration-300"
            to={link}
          >
            Explore Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;