import { SelectHTMLAttributes as Attributes } from 'react'

import * as Radix from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

type Props = Attributes<HTMLSelectElement>

export function Select(props:Props) {
  const options:any[] = [{
	  id: 'op_j2f8h3fkdmwwdn',
		title: 'Salame',
		value: 'salame'
	}]

  return (
    <Radix.Root name={props.name}>
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
			  <Radix.Content className="w-[411px] max-w-[80vw] min-h-[400px] p-6 bg-zinc-600 z-[666] fixed top-[20vh] left-1/2 -translate-x-1/2 rounded mt-8">
				  <Radix.Viewport>
					  {options.map((option) => (
						  <Radix.Item
							  key={option.id}
							  value={option.value}
								className="text-white text-md"
							>
							  {option.title}
							</Radix.Item>
						))}
					</Radix.Viewport>
				</Radix.Content>
			</Radix.Portal>
		</Radix.Root>
  )
}
