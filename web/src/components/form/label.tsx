import { LabelHTMLAttributes as Attributes } from 'react'

type LabelProps = Attributes<HTMLLabelElement>

export function Label({ children, ...props }:LabelProps) {
  return (
    <label {...props} className="flex flex-col gap-2">
		  {children}
		</label>
  )
}
