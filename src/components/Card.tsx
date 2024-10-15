import React from 'react'
import Image from "next/image";

interface propsType {
    title:string;
    decs:string;
    img:string;
    tags:string[];
}

const Card: React.FC<propsType> = ({ title, decs, img, tags}) => {
  return (
    <div className="border before-accent w-[250px] sm:w-[350px]" data-aos="zoom-in-up" >
      <div>
        <Image className="w-[300px] sm:w-[350px] h-60" 
        src={img}
        width={300}
        height={300}
        alt={title}
        />
      </div>
        <div className='p-4 space-y-2'>
            <div className='text-4xl font-extralight'>{title}</div>
      
        <div className="text-center p-2">{decs}</div>
        <div>
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}

            </div>))}
        </div>
      </div>
      </div>
  )
}

export default Card
