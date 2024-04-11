import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Button } from "@nextui-org/react";

const Colorchange = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [textColor, setColor] = useState('text-primary-beige');
  const [cafe, setCafe] = useState('Southern Stories');
  const [bgColor, setBgColor] = useState('bg-primary-beige');
  const [rotation, setRotation] = useState("rotate-[0deg]"); // Initial rotation of 0 degrees
  const colors = ['primary-beige', 'primary-green', 'primary-red', 'primary-orange'];
  const cafes = ['Southern Stories', 'Quench', 'Maggi Hotspot', 'Chai OK'];
  const photos = ["./src/assets/Italian.png", "./src/assets/south.png", "./src/assets/salad.png", "./src/assets/mexican.png"];
  const [photo, setPhoto] = useState("./src/assets/Italian.png");
  const handleClick = (direction) => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
    const newTextColor = `text-${colors[nextIndex]}`;
    const newBgColor = `bg-${colors[nextIndex]}`;
    const newRotation = direction === "clockwise" ? `rotate-[${34 * (nextIndex + 1)}deg]` : `rotate-[-${34 * (nextIndex + 1)}deg]`;
    setColor(newTextColor);
    setBgColor(newBgColor);
    setRotation(newRotation);
    setCafe(cafes[nextIndex]);
    setPhoto(photos[nextIndex]);

    console.log(rotation);
    console.log("Color:", bgColor);
  };

  return (
    <div className='overflow-hidden'>
      <nav className='mt-8 flex justify-between items-center w-[80%] mx-auto'>
        <div className='flex justify-between items-center gap-4'>
          <img src="./src/assets/logo.png" className='w-12 border-2 border-red-900 rounded-2xl' />
          <div className='font-Poppins font-semibold text-2xl text-center'>
            Q-Buster
          </div>
        </div>
        <div className='w-[50%] ml-36'>
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50",
              input: [
                "bg-transparent",
                "text-center",
                "text-black/90",
                "placeholder:text-default-700/50",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "group-data-[focused=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="Search your favorite food"
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-secondary pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className='flex justify-between align-center gap-16 text-2xl cursor-pointer'>
          <div className='hover:bg-white rounded-full p-2 pr-3 pl-3'>
            <i className="ri-shopping-cart-2-line hover:[transition-all]"></i>
          </div>
          <div className='hover:bg-white rounded-full p-2 pr-3 pl-3'>
            <i className="ri-shopping-bag-line hover:[transition-all]"></i>
          </div>
        </div>
      </nav>

      <div className="main-container flex">
        <div className="left w-[50%] h-screen flex justify-center items-center">
          <div className="text-container w-[70%] font-Poppins">
            <div className={`${textColor} text-7xl font-semibold`}>Delicious.</div>
            <div className='text-secondary text-4xl pt-4 pb-12 font-medium'>One Stop Destination</div>
            <div className='text-black text-lg'>Beat the Queue: Get a wait time & unique token - track your order live & plan your time</div>
            <div className='w-fit flex flex-center flex-col items-center'>
              <div className=' pt-16 text-3xl font-medium italic pb-7 w-fit'>" Wait Less, Eat Fresh "</div>
              <Button className={`${bgColor} rounded-full px-16 text-black font-medium w-fit`} variant="shadow">Order Now!</Button>
            </div>
          </div>   
        </div>

        <div className="right w-[50%]">
          <div className={`${bgColor} w-[160vh] h-[160vh] rounded-full absolute -top-[85vh] -right-[22vh] -z-20 flex flex-end items-end overflow-hidden`}>
            <img
              src="./src/assets/rounded-food.png"
              alt=""
              className={`${rotation} w-[70%] relative -bottom-[30%] -right-[15%] duration-500`}
            />
          </div>
          <div className='h-fit w-fit relative top-[50vh] -right-[26vh]'>
            <img src={photo} alt="" />
          </div>

          <div className='mt-[53vh] text-center mr-[24vh] flex justify-center items-center'>
            <img
              onClick={() => handleClick("anti-clockwise")}
              src="./src/assets/spoon.png"
              alt=""
              className='-mr-2 drop-shadow-lg cursor-pointer hover:rotate-12 transition-transform duration-300'
            />
            <span className={`${bgColor} pt-2 pb-2 pl-28 pr-28 rounded-full h-fit font-light z-10`}>{cafe}</span>
            <img
              onClick={() => handleClick("clockwise")}
              src="./src/assets/spoon-2.png"
              alt=""
              className='-ml-2 drop-shadow-lg cursor-pointer hover:rotate-12 transition-transform duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorchange;