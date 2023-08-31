import React from 'react'

function CourseCards({setFragment, title, sDescription, rating, author, key}) {
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
    <div className='mt-10 group' >
         <img src="https://www.shutterstock.com/shutterstock/photos/2149658841/display_1500/stock-vector-concept-of-computer-programming-or-developing-software-or-game-vector-d-illustration-with-coding-2149658841.jpg" alt="cover image" className=' w-[13em] h-[8em] md:w-[16em] md:h-[10em] rounded-md absolute ml-10 cursor-pointer group-hover:scale-125 transition-all duration-500 z-10 shadow-lg shadow-gray-600' />
        
        <div className='bg-gradient-to-br from-gray-950 to-green-600 rounded-lg pt-[8em] md:pt-4 md:pl-[20em] p-5 h-[26em] md:h-[16em] mt-4 opacity-90 cursor-pointer group-hover:scale-105 transition-all duration-700 md:group-hover:pl-[22em] md:group-hover:pt-5 group-hover:pt-[9em] shadow-2xl shadow-green-800 text-white overflow-hidden'>
            <h1 className=' font-bold text-2xl '>{title}</h1>
            <p className=' font-semibold'>by{" "+author}</p>
            <div className="star-rating">
      {filledStarIcons}
      {emptyStarIcons}
    </div>
            <p className='h-[10em] text-xs md:text-sm overflow-hidden xl:text-xs'>{sDescription.length>251? sDescription.slice(0,251)+"...": sDescription}</p>
        </div>
    </div>
  )
}

export default CourseCards