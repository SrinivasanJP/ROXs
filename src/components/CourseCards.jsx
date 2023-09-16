import React from 'react'

function CourseCards({setFragment, title, sDescription="", rating="", author, id, thumbnail, cFragment}) {
  const defaultD = ' rounded-[.5em] pt-[8em] md:pt-4 md:pl-[20em] p-5 h-[26em] md:h-[16em] mt-4 opacity-90 cursor-pointer group-hover:scale-105 transition-all duration-700 md:group-hover:pl-[22em] md:group-hover:pt-5 group-hover:pt-[9em] shadow-2xl text-white overflow-hidden';
  const pD = 'h-[10em] text-xs md:text-sm overflow-hidden xl:text-xs'
  const maxRating = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;
  const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
    <span key={index} className="star-icon">
      ★
    </span>
  ));

  const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
    <span key={index} className="star-icon">
      ☆
    </span>
  ));
  return (
    <div className='mt-10 group' onClick={cFragment=="courses"?()=>setFragment(["courseView",id]):()=>setFragment(["performanceTracker", id])} key={id} >
         <img src={thumbnail} alt="cover image" className=' w-[13em] h-[8em] md:w-[16em] md:h-[10em] rounded-[.5em] absolute ml-10 cursor-pointer group-hover:scale-125 transition-all duration-500 z-10 shadow-lg shadow-gray-600' />
        
        <div className={cFragment=="courses"?defaultD+" bg-gradient-to-br from-gray-950 to-green-600 shadow-green-800":defaultD+' bg-gradient-to-br from-gray-900 to-[#4D78EF] h-full shadow-[#4D78EF]'}>
            <h1 className=' font-bold text-2xl '>{title}</h1>
            <p className=' font-semibold'>by{" "+author}</p>
            <div className="star-rating">
      {filledStarIcons}
      {emptyStarIcons}
    </div>
            <p className={cFragment=="courses"?pD:pD+' hidden'}>{sDescription.length>251? sDescription.slice(0,251)+"...": sDescription}</p>
        </div>
    </div>
  )
}

export default CourseCards