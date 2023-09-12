import React, { useRef, useState } from 'react'
import Navigation from '../Navigation'
import bgImg from '../../assets/svgs/homeMan.jpg'
import s1SVG from '../../assets/svgs/s1.png'
import planet from '../../assets/svgs/3dPlanet.png'
import woman3d from '../../assets/svgs/3dWomanLaptop.png'
const Home = ({setPage}) => {

  return (
    <div id="home" className="mt-[66px]"
    >
      <Navigation setPage={setPage}/>
      <img src={planet} alt="" className='absolute left-52  opacity-70 w-screen animate-orbit' />
      <section className=' w-screen h-screen bg-[#0c1015] md:mt-[10em]' id='home'>
        
        <div className='text-white w-[85%] h-[80%] backdrop-blur-sm backdrop-filter bg-opacity-70 rounded-2xl mx-auto z-10 shadow-gray-700 flex justify-center sm:items-center items-start shadow-inner flex-col p-10'>
          <div className='flex flex-col md:flex-row justify-center md:items-center'>
          <h1 className='bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-4xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem] lg:text-left' >Welcome to <br /> <span className=' font-SpaceMono text-orange-400'>ROXs</span> Academy</h1>
          <img src={woman3d} alt="" width={500} height={500} className='w-25 h-25'/>
          </div>
          
          <p className=' text-xl bg-clip-text bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] tracking-tighter text-transparent sm:text-center sm:text-[2rem] sm:leading-[4.75rem] lg:text-left'>Ignite Your Potential: Where Reading Become Learning  - Welcome to a World of Knowledge at ROXs</p>
        </div>

      </section>
      <section id='courses' className=' h-full w-screen text-gray-100  flex justify-center flex-col md:w-[60%] mx-auto'>
        <h1 className=' text-3xl font-bold text-center bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent my-14'>Categorires of Courses</h1>
        <ol className=' flex flex-col w-[80%] mx-auto'>
          <li className='mb-10'>
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>General</h1>
            <ul>
              <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Mathematics</li>
              <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Computer Science</li>
              <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Biology</li>
              <li  className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Chemistry</li>
              <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Physics</li>
              
            </ul>
          </li>
          <li className='mb-10'>
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>Technology</h1>
            <ul>
              <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Web Development</li>
              <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Android Development</li>
              <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Block Chain</li>
              <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>AI</li>
              <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Data Science</li>
              <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Machine Learning</li>
            </ul>
          </li>
          <li className='mb-10' >
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>Programming</h1>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>C</li>
            <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>C++</li>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Python</li>
            <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Java</li>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Ruby</li>
            <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>HTML, CSS, JavaScript</li>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>PHP</li>
            <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>Perl</li>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>SQL</li>
            <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>No SQL</li>
          </li>
          <li className='mb-10'>
            <h1 className=' bg-gradient-to-r from-[#4D78EF] p-3 text-center rounded-2xl font-bold'>Frameworks</h1>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>ReactJS</li>
            <li className=' bg-gradient-to-r  from-slate-950 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>ExpressJS</li>
            <li className=' bg-gradient-to-r  from-slate-900 px-10 py-3 rounded-2xl mt-3'><span className='w-2 h-2 bg-[#4D78EF] inline-block rounded-full mr-10 animate-pulse'></span>MERN Stack</li>
          </li>
        </ol>
      </section>
      <section id="about" className=' text-gray-100 p-10 md:w-[60%] mx-auto'>
        <h1 className=' text-3xl font-bold text-center bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-transparent my-14'>About Our Academy</h1>
        <p className=' text-justify mb-5'>
          ROXs Academy is dedicated to providing high-quality education
          and empowering individuals to achieve their academic and career goals.
          Established in 2020, we have been serving Offline/Online for 3
          years, consistently delivering exceptional learning experiences.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Our Mission</h2>
        <p className=' text-justify'>
          Our mission is to make every one to execute their knowledge. We are committed to
          fostering a learning environment that empower every grownups to build their dreams.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Our Team</h2>
        <p className=' text-justify'>
          At ROXs Academy, we take pride in our team of experienced and
          dedicated educators. Our faculty members are experts in their fields
          and are passionate about imparting knowledge and nurturing the
          potential within each student.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Why Choose Us</h2>
        <p className=' text-justify'>
          - Comprehensive Course Offerings: We offer a wide range of courses in
          Programming, catering to learners of all levels. <br />
          - Flexible Learning: Our online/offline programs are designed to
          accommodate diverse schedules and learning preferences.
        </p>

        <h2 className=' font-bold text-2xl text-indigo-500 my-2'>Get in Touch</h2>
        <p className=' text-justify'>
          We are here to answer any questions you may have. Feel free to
          contact us at <a href="mailto:jpsrinivasan38@gmail.com" className='hover:text-orange-300 hover:border-b-2'>help@roxs.com</a>
        </p>
      </section>
    </div>
    
  )
}

export default Home