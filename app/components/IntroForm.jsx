'use client'
import {Form, ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Combobox from "@/components/ui/combobox";
import {useContext, useEffect, useState} from "react";
import {FormsContext} from "@/app/feedback-form/layout";

export default function IntroForm(props) {

  const {setOpen} = props

  const {updateUserInfo, userInfo} = useContext(FormsContext)
  const [value, setValue] = useState(null)
  const [feedbackProvider, setFeedbackProvider] = useState(null)
  const [employees, setEmployees] = useState([])

  const handleSubmit = (values) => {
    updateUserInfo({...values, person: value, feedbackProvider: feedbackProvider})
  }

  useEffect(() => {
    fetch("https://kindred-360-evaluation-functions.azurewebsites.net/api/getUsers")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={Yup.object({
        person: Yup.string(),
        role: Yup.string().required("Role is required"),
        feedbackProvider: Yup.string(),
      })}
      onSubmit={(values, {setSubmitting}) => {
        handleSubmit(values)
        setSubmitting(false)
        setOpen(!value)
      }}
    >
      {({isSubmitting}) => (
        <Form className='flex flex-col gap-5'>
          <div className="flex flex-col gap-1">
            <Field name="person" className='border border-black'>
              {() => {
                return (
                  <Combobox value={value} setValue={setValue} employees={employees}/>
                )
              }}
            </Field>
          </div>
          <div className="flex flex-col items-start gap-3" role="radiogroup">
            <ErrorMessage name="role" render={msg => <div className='text-red-600'>{msg}</div>}/>
            <div className='flex flex-row gap-2'>
              <Field type="radio" name="role" id="isTeamMate" value="teamMate"/>
              <Label htmlFor="isTeamMate">Are you his/her team mate</Label>
            </div>
            <div className='flex flex-row gap-2'>
              <Field type="radio" name="role" id="isTechLead" value="techLead"/>
              <Label htmlFor="isTechLead">Are you his/her tech lead</Label>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="feedbackProvider" className='w-fit'>Whats your name<span
              className='text-neutral-500'> (optional)</span></label>
            <Field name="feedbackProvider" id="feedbackProvider" className='border border-black'>
              {() => {
                return (
                  <Combobox value={feedbackProvider} setValue={setFeedbackProvider} employees={employees.filter(e => e.email !== value)}/>
                )
              }}
            </Field>
          </div>
          <Button type='submit' className='mt-3 bg-primary dark:border-white dark:text-white dark:bg-secondary'
                  disabled={!value && !isSubmitting || value === feedbackProvider}>Save</Button>
        </Form>
      )}
    </Formik>
  )
}
