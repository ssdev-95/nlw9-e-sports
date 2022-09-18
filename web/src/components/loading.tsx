interface Props {
  small?:boolean
}

export function Loading({ small=false }:Props) {
  return (
	  <div className="h-[200px] w-full flex items-center justify-center">
      <div className={`bg-nlw-grad-extended ${small ? 'h-6 w-6 p-1/2' : 'h-12 w-12 p-1'} rounded-full animate-spin`}>
	  	  <div className="bg-background w-full h-full rounded-full" />
		  </div>
		</div>
  )
}
