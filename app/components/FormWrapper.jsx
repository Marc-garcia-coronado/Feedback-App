'use client'

import CategoryForm from "@/app/components/CategoryForm";
import {Toaster} from "@/components/ui/toaster"
import {useContext, useEffect, useState} from "react";
import {FormsContext} from "@/app/feedback-form/layout";
import DialogIntroForm from "@/components/ui/dialogIntroForm";
import {Progress} from "@/components/ui/progress";


export default function FormWrapper(props) {
  const {currentForm, formId, formsLength} = props;
  const {userInfo} = useContext(FormsContext)
  const progressStepPercentage = 100 / formsLength

  const [progress, setProgress] = useState(formId === 1 ? 0 : progressStepPercentage * (formId - 1))

  return (
    <div className='container my-5 d-flex flex-column align-items-center'>
      <div className='mb-4 flex flex-col gap-2'>
        <Progress value={progress} className='dark:bg-white dark:bg-opacity-25' />
        <p className='w-fit self-end text-neutral-500 italic'>{formId} of {formsLength}</p>
      </div>
      {userInfo.person === '' && <DialogIntroForm/>}
      <CategoryForm currentForm={currentForm} formId={formId} formsLength={formsLength}/>
      <Toaster/>
    </div>
  )
}