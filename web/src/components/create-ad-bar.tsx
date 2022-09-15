import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { CreateAdModal } from './create-ad-modal'

export function CreateAdBar() {
  return (
	  <div className="w-full max-w-[95vw] bg-nlw-gradient pt-1 mx-auto rounded-lg overflow-hidden">
		  <div className="w-full bg-zinc-800 flex mb:flex-col items-center justify-between gap-8 px-8 py-4">
			  <div>
				  <strong className="mb:text-center block text-xl">Didn't found your duo?</strong>

					<span className="mb:text-center mb:text-sm text-zinc-500">Publish and appointment to meet new players.</span>
				</div>

				<CreateAdModal>
  				<Dialog.Trigger className="bg-violet-500 hover:bg-violet-700 p-4 rounded-md font-bold flex items-center justify-center gap-2">
  				  <MagnifyingGlassPlus size={16} />

  					<span>Find duo</span>
  				</Dialog.Trigger>
				</CreateAdModal>
			</div>
		</div>
	)
}
