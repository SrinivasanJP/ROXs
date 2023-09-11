import React ,{useEffect, useState, useRef} from 'react'

function TypeWriter() {

  
    const [currentWord, setCurrentWord] = useState("");
 
    
    useEffect(()=>{
        let j = 0
        let isDeleting = false
        const words = [
            "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important. - Bill Gates",
            "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education. - Martin Luther King Jr.",
            "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. - Bill Gates",
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
            "Technology empowers people to do what they want to do. It lets people be creative. It lets people be productive. - Steve Ballmer",
            "The only thing that interferes with my learning is my education. - Albert Einstein",
            "Technology is best when it brings people together. - Matt Mullenweg",
            "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
            "It is not that I'm so smart. But I stay with the questions much longer. - Albert Einstein",
            "The art of teaching is the art of assisting discovery. - Mark Van Doren",
          ];
          let i = Math.floor(Math.random()*words.length);
        let selectedWord = words[i];
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        const type= async ()=>{
            selectedWord = words[i]
            if(isDeleting){
                setCurrentWord(selectedWord.substring(0,j-1))
                j=j-1
                if(j==0){
                    isDeleting=false
                    i=Math.floor(Math.random()*words.length)
                    await sleep(10000)
                }
            }else{
                setCurrentWord(selectedWord.substring(0,j+1))
                j=j+1
                if(j==selectedWord.length){
                    isDeleting=true
                    await sleep(10000)
                }
            }
            setTimeout(type, 100)
        }
        type()

    },[])
   
    
      return (
        <div>
            <h1 className=' md:text-3xl lg:text-5xl w-[80%] text-md font-bold inline-block font-SpaceMono lg:leading-loose'>{">> "+currentWord}<span className='inline-block ml-2 animate-blink md:h-8 h-5 w-[2px] '></span></h1>
        
        </div>
      );
}

export default TypeWriter