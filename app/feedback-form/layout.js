'use client'

import {createContext, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {toast} from "@/components/ui/use-toast";

export const FormsContext = createContext(null)

export default function FormLayout({children}) {

  const router = useRouter()
  const [categories, setCategories] = useState([])
  const [userInfo, setUserInfo] = useState({
    person: '',
    role: '',
    feedbackProvider: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateUserInfo = (newUserInfo) => {
    setUserInfo({
      ...userInfo,
      ...newUserInfo,
    })
  }

  const updateCategories = (newCategory, score, formId) => {
    let isUpdated = false
    setCategories(categories.map((c, index) => {
      if (index !== parseInt(formId) - 1) {
        return c
      }
      isUpdated = true
      return {...newCategory, score: score}
    }))

    if (!isUpdated) {
      setCategories([...categories, {...newCategory, score: score}])
    }
  }

  const postFeedback = async () => {
    const obj = {}
    obj.person = userInfo.person
    obj.feedbackProvider = userInfo.feedbackProvider
    obj.role = userInfo.role
    obj.projectSpecificKnowledge = {...categories[0]}
    obj.communication = {...categories[1]}
    obj.devOpsInfrastructure = {...categories[2]}
    obj.generalWebDevelopment = {...categories[3]}
    obj.proactivityContinousLearning = {...categories[4]}
    obj.programming = {...categories[5]}
    obj.resillianceReliability = {...categories[6]}
    obj.teamWork = {...categories[7]}

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    };

    const response = await fetch('https://kindred-360-evaluation-functions.azurewebsites.net/api/postFeedback', requestOptions)
    return response.status
  }

  useEffect( () => {
    async function submit() {
      return await postFeedback()
    }

    if (isSubmitting) {
      submit().then(status => {
        if(status < 200 || status > 299) {
          toast({
            status: "error",
            title: "A server error occurred",
            description: "Something went wrong when trying to submit the feedback",
          })
          return;
        }
        router.push('/feedback-form/success')
      })
    }
  }, [isSubmitting])

  return (
    <FormsContext.Provider value={{userInfo, categories, isSubmitting, updateUserInfo, updateCategories, setIsSubmitting}}>
      {children}
    </FormsContext.Provider>
  )
}
