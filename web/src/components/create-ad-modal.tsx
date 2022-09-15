import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Form } from './form'

interface ModalProps {
  children:ReactNode
}

export function CreateAdModal(props:ModalProps) {
  return (
    <Dialog.Root>
		  {props.children}
		  <Dialog.Portal>
			  <Dialog.Overlay
				  className="bg-black/60 fixed inset-0 z-3"
				/>

				<Dialog.Content
				  className="bg-zinc-800 fixed top-1/2 left-1/2 w-[480px] max-w-[90vw] mb:min-h-[50vh] flex flex-col gap-6 px-6 py-8 -translate-y-1/2 -translate-x-1/2"
				>
				  <Dialog.Title
					  className="text-2xl font-bold"
					>
					  Publish an Ad
					</Dialog.Title>

					<Form />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
  )
}
