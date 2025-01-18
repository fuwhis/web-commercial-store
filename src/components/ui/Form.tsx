import { ReactElement } from 'react'

interface IForm {
  action: string | ''
}

export function Form(props: IForm): ReactElement<HTMLElement> {
  const { action } = props

  return (
    <form action={action}>
      <input
        type='text'
        name='title'
      />
      <input
        type='text'
        name='content'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
