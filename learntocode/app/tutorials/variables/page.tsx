'use client'
import TutorialTab from '@/app/_components/TutorialTab';
import { useState } from 'react';
import TutorialContent from '@/app/_components/TutorialContent';
import Image from 'next/image';

export default function Variables() {

  const [exerciseSelected, setExerciseSelected] = useState(1);

  function selectExercise(id:number) {
    console.log(id);
    setExerciseSelected(id);
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="float-left font-bold text-2xl">
          Variables
        </h1>
        <div className="float-right">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://www.markcubanai.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/cuban-logo.png"
                alt="Mark Cuban Foundation Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
      </div>
      
      {/* 
        The idea here is to have an unequal, 2-column layout.
        The left, smaller column will house a number of tabs to allow for navigation between exercises.
        The right, larger column will house the code editor.
      */}
      <div className="grid grid-cols-5 w-full">
        <div className="bg-transparent mr-5">
          <div onClick={() => selectExercise(1)}>
            <TutorialTab tabTitle="Exercise 1" />
          </div>
          <div onClick={() => selectExercise(2)}>
            <TutorialTab tabTitle="Exercise 2" />
          </div>
          <div onClick={() => selectExercise(3)}>
            <TutorialTab tabTitle="Exercise 3" />
          </div>
          <div onClick={() => selectExercise(4)}>
            <TutorialTab tabTitle="Exercise 4" />
          </div>
        </div>
        <div className="col-span-4">

          <div style={{display: exerciseSelected === 1 ? "block" : "none"}}>
            <TutorialContent 
              prompt="This is exercise 1!" 
              codeSkeleton="# Write your code for exercise 1 below."
              />
          </div>

          <div style={{display: exerciseSelected === 2 ? "block" : "none"}}>
            <TutorialContent 
              prompt="This is exercise 2!" 
              codeSkeleton="# Write your code for exercise 2 below."
              />
          </div>

          <div style={{display: exerciseSelected === 3 ? "block" : "none"}}>
            <TutorialContent 
              prompt="This is exercise 3!" 
              codeSkeleton="# Write your code for exercise 3 below."
              />
          </div>

          <div style={{display: exerciseSelected === 4 ? "block" : "none"}}>
            <TutorialContent 
              prompt="This is exercise 4!" 
              codeSkeleton="# Write your code for exercise 4 below."
            />
          </div>
        </div>
      </div>
    </div>
  )
}