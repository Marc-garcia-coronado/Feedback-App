import forms from '@/app/forms.json'
import FormWrapper from "@/app/components/FormWrapper";

export async function generateStaticParams() {
  return forms.map((form) => ({
    formId: form.id.toString()
  }))
}

export default function Page(props) {
  const currentForm = forms.find((form) => form.id.toString() === props.params.formId.toString())

  return <FormWrapper currentForm={currentForm} formId={props.params.formId} formsLength={forms.length}/>

}
