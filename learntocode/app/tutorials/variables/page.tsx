'use client'
import TutorialTab from '@/app/_components/TutorialTab';
import { useState } from 'react';
import TutorialContent from '@/app/_components/TutorialContent';

export default function Variables() {

  const [exerciseSelected, setExerciseSelected] = useState(1);

  function selectExercise(id:number) {
    console.log(id);
    setExerciseSelected(id);
  }

  return (
    /* 
      The idea here is to have an unequal, 2-column layout.
      The left, smaller column will house a number of tabs to allow for navigation between exercises.
      The right, larger column will house the code editor.
    */
    <div className="grid grid-cols-5 w-full">
      <div className="bg-transparent">
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
  )
}