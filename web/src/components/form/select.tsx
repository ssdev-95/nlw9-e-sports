import { useState, useEffect, SelectHTMLAttributes as Attributes } from 'react'

import * as Radix from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

import { Game } from '../../App'

type Props = Attributes<HTMLSelectElement> & {
  options: Game[]
	onValueChanged: (value:string) => void
}

export function Select({ onValueChanged, name, options }:Props) {
  const [localValue, setLocalValue] = useState('')

	function handleChangeValue(value:string) {
	  setLocalValue(value)
	}

	useEffect(() => {
	  onValueChanged(localValue)
	}, [localValue])

  return (
    <Radix.Root
		  name={name}
			defaultValue={localValue}
			onValueChange={handleChangeValue}
		>
			<Radix.Trigger className="flex items-center justify-between bg-zinc-900 p-4 rounded">
			  <Radix.Value
				  placeholder="Select the game you wanna play"
					className="text-white placeholder:text-zinc-300"
				/>

			  <Radix.Icon className="right-0">
				  <CaretDown
					  className="h-4 w-4 text-zinc-500"
					/>
				</Radix.Icon>
			</Radix.Trigger>

			<Radix.Portal>
			  <Radix.Content className="w-[411px] max-w-[80vw] max-h-[600px] p-6 bg-zinc-600 z-12 fixed top-[18vh] left-1/2 -translate-x-1/2 rounded mt-8 overflow-y-auto">
				  <Radix.Viewport>
  				  <Radix.Item
	  				  value=""
							disabled={localValue === ''}
		  				className="text-white text-md py-4 px-2"
			  		>
				  	  <Radix.ItemText>
					  	  Select the game you wanna play
						  </Radix.ItemText>
  					</Radix.Item>

					  {options.map((option) => (
						  <Radix.Item
							  key={option.id}
							  value={option.id}
								className="text-white text-md py-4 px-2"
							>
							  <Radix.ItemText>
  							  {option.title}
								</Radix.ItemText>
							</Radix.Item>
						))}
					</Radix.Viewport>
				</Radix.Content>
			</Radix.Portal>
		</Radix.Root>
  )
}
