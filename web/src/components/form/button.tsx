import { ButtonHTMLAttributes as Attributes } from 'react'

type ButtonProps = Attributes<HTMLButtonElement> & {
  active?: boolean
}

export function Button({children, active=false, ...props}:ButtonProps) {
  return (
    <button
		  {...props}
			type="button"
			className={[
			  "flex flex-col gap-4 p-2 text-white font-semibold text-md rounded flex items-center justify-center",
				active ? 'bg-violet-500 hover:bg-volet-300' : 'bg-zinc-900 hover:bg-zinc-300'
			].join(' ')}
		>
		  {children}
		</button>
  )
}
