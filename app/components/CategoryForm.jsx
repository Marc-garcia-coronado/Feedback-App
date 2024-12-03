'use client'

import {Form, Field, Formik} from "formik";
import * as Yup from "yup";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import RatingComponent from "@/app/components/RatingComponent";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useToast} from "@/components/ui/use-toast";
import {FormsContext} from "@/app/feedback-form/layout";
import {Textarea} from "@/components/ui/textarea";

export default function CategoryForm(props) {

  const {currentForm, formId, formsLength} = props
  const {title, info, highlightedCompetencies, competenciesToImprove,} = currentForm
  const {categories, updateCategories, setIsSubmitting, isSubmitting} = useContext(FormsContext)
  const [score, setScore] = useState(null)
  const [nextButtonIsClicked, setNextButtonIsClicked] = useState(false)
  const [defaultValues, setDefaultValues] = useState(null)
  const router = useRouter()
  const {toast} = useToast()

  const initialValues = {
    title: title,
    score: null,
    extraInfo: ''
  }

  const getCategoryData = (formId) => {
    const _formId = parseInt(formId) - 1
    return categories.find((category, index) => index === _formId)
  }

  const handleSave = (values, isPrevious) => {
    if (score === null && !isPrevious) {
      return toast({
        status: "error",
        title: "Error when saving",
        description: "The score is not entered",
      })
    }
    updateCategories(values, score, formId)

    if (!isPrevious) {
      setNextButtonIsClicked(null)
      router.push(`/feedback-form/${parseInt(formId) + 1}`)
    } else {
      setNextButtonIsClicked(null)
      router.push(`/feedback-form/${parseInt(formId) - 1}`)
    }
  }

  const handleSubmit = (values) => {
    updateCategories(values, score, formId)
  }

  useEffect(() => {
    if (categories.length !== 8 && parseInt(formId) === 8) {
       toast({
        status: "error",
        title: "All steps are requiered",
        description: "Please fulfill all the scores from the feedback",
      })

      return;
    }
    if(categories.length !== 8) {
      return;
    }

    let flag =  !categories.some(category => category.score === null)

    if (flag === false ) {
       toast({
        status: "error",
        title: "Error when submitting the feedback",
        description: "Something went wrong when trying to submit the feedback",
      })
    } else {
      setIsSubmitting(true)
    }
  }, [categories])

  useEffect(() => {
    setDefaultValues(getCategoryData(formId) || null)
  }, [])

  return (
    <Formik
      initialValues={{...initialValues, ...getCategoryData(formId) || null}}
      validationSchema={Yup.object({
        highlightCompetencies: Yup.array(),
        competenciesToImprove: Yup.array(),
        extraInfo: Yup.string().optional(),
      })}
      onSubmit={(values, {setSubmitting}) => {
        handleSubmit(values)
        setSubmitting(false)
      }}
    >
      {(formik) => (
        <Form className='flex flex-col gap-2'>
          <section>
            <h1 className='text-primary dark:text-white mt-7 mb-10 text-5xl font-semibold'>{title}</h1>
            {info && <p className='mb-10'>{info}</p>}

            <Label className='text-[1.3rem] font-semibold'>How much does the person know</Label>
            <RatingComponent setScore={setScore} score={score} nextButtonIsClicked={nextButtonIsClicked}
                             defaultScore={defaultValues?.score}/>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between mt-14">
              <div className="flex flex-col gap-5 md:w-1/2">
                <h3 className='text-primary dark:text-white text-2xl font-semibold'>Select competencies that highlight this person</h3>
                <div role='group' className="flex flex-col gap-1">
                  {Array.isArray(highlightedCompetencies) && highlightedCompetencies.length > 0 && highlightedCompetencies.map((c, i) =>
                    <label key={`${title}-highlightedCompetencies-${i}`} className='cursor-pointer w-fit'>
                      <Field type='checkbox' name='highlightedCompetencies' value={c} className='mr-2 cursor-pointer'/>
                      {c}
                    </label>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5 md:w-1/2">
                <h3 className='text-primary dark:text-white text-2xl font-semibold'>Where could this person improve</h3>
                <div role='group' className="flex flex-col gap-1">
                  {Array.isArray(competenciesToImprove) && competenciesToImprove.length > 0 && competenciesToImprove.map((c, i) =>
                    <label key={`${title}-competenciesToImprove-${i}`} className='cursor-pointer w-fit'>
                      <Field type='checkbox' name='competenciesToImprove' value={c} className='mr-2 cursor-pointer'/>
                      {c}
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 mt-14'>
              <Label className='text-2xl font-light'>Something else to mention <span
                className='text-neutral-500'>(Optional)</span></Label>
              <Field as={Textarea} rows={6} name='extraInfo' placeholder='Add Information'
                     value={formik.values.extraInfo}/>
            </div>
          </section>
          <div
            className={`flex flex-row ${formId && parseInt(formId) !== 1 ? 'justify-between' : 'justify-end'} mt-10`}>
            {formId && parseInt(formId) !== 1 &&
              <Button type='button' variant='outline' className='justify-self-end' disabled={formik.isSubmitting}
                        onClick={() => {
                          handleSave(formik.values, true)
                        }}>
                Previous Category
              </Button>
            }
            { parseInt(formId) === formsLength
              ? (
                <Button type='submit' variant='outline' className='justify-self-end' disabled={formik.isSubmitting}>
                  Send Feedback
                </Button>
              )
              : <Button type='button' variant='outline' className='justify-self-end' disabled={formik.isSubmitting}
                        onClick={() => {
                          setNextButtonIsClicked(true)
                          handleSave(formik.values)
                        }}>
                Next Category
              </Button>
            }
          </div>
        </Form>
      )}
    </Formik>
  )
}