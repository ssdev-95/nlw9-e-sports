import { InputHTMLAttributes as Attributes } from 'react'

type InputProps = Attributes<HTMLInputElement>

export function Input(props:InputProps) {
  return (
    <input
		  {...props}
			className="rounded text-sm bg-zinc-900 p-4 placeholder:text-zinc-300"
		/>
  )
}
