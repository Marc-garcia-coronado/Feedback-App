'use client'

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

export default function RatingComponent(props) {

  const {setScore, score, nextButtonIsClicked, defaultScore} = props
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [isSelected, setIsSelected] = useState(defaultScore)

  useEffect(() => {
    setScore(defaultScore || null)
    setIsSelected(defaultScore - 1)
  }, [defaultScore]);


  return (
    <>
      {score === null && nextButtonIsClicked && <p className='text-red-600 italic'>Select a score *</p>}
      <div className='grid grid-cols-5 md:flex flex-row gap-0.5 mt-4'>
        {Array.isArray(scores) && scores.map((score, i) => {
          return <Button key={'score_' + i}
                         type='button'
                         className={`flex-auto py-6 rounded-none ${isSelected === i ? 'bg-primary dark:bg-white dark:text-black text-secondary hover:bg-primary/90 hover:text-secondary' : 'bg-transparent'}`}
                         variant='outline'
                         onClick={() => {
                           if (isSelected !== i) {
                             setIsSelected(i)
                             setScore((i + 1))
                           } else {
                             // If the user clicks again the same score button
                             setIsSelected(null)
                             setScore(null)
                           }
                         }}
          >
            {score}
          </Button>
        })}
      </div>
      <div className='flex flex-row justify-between mt-3 italic'>
        <p>1. Completely junior</p>
        <p>10. Amazing Rock Star</p>
      </div>
    </>
  )
}