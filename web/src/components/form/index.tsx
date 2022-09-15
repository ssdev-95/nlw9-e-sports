import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'

import {
  useState,
	FormHTMLAttributes as Attributes
} from 'react'

import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

type FormProps = Omit<
  Attributes<HTMLFormElement>,
	'children'
>

const weekDaysChars = [
  { title:'Sunday', char:'S', number:0 },
	{ title:'Monday', char:'M', number:1 },
	{ title:'Tuesday', char:'T', number:2 },
	{ title:'Wednesday', char:'W', number:3 },
	{ title:'Thursday', char:'T', number:4 },
	{ title:'Friday', char:'F', number:5 },
	{ title:'Saturday', char:'S', number:6 }
]

export function Form(props:FormProps) {
  const [selectedDays, setSelectedDays] = useState<Number[]>([])

	function toggleSelectDay(day:number) {
	  if (selectedDays.includes(day)) {
		  const filtered = selectedDays.filter(
			  (iDay) => day !== iDay
			)

			return setSelectedDays(filtered)
		}

	  const updated = [...selectedDays, day]
		return setSelectedDays(updated)
	}

  return (
    <form
		  {...props}
			className="flex flex-col gap-4 text-white"
		>
		  <Label>
			  What game

			  <Input
				  placeholder="Select the game you wanna play"
				/>
			</Label>

			<Label>
			  Your name (or nickname)

				<Input
			    placeholder="How they call you in matches"
				/>
			</Label>

			<div className="grid grid-cols-2 mb:grid-cols-1 gap-2">
			  <Label>
  				Years of playing

				  <Input
					  placeholder="It'ss fine be ZERO"
					/>
				</Label>

				<Label>
				  Who's you on Discord?

					<Input
					  placeholder="you#12345"
					/>
				</Label>
			</div>

			<div className="flex gap-2 mb:flex-col">
			  <div className="grid grid-cols-4 mb:grid-cols-7 gap-1">
				  {weekDaysChars.map(day => (
					  <Button
						  key={day.number}
							title={day.title}
							active={selectedDays.includes(day.number)}
							onClick={()=>toggleSelectDay(day.number)}
						>
						  {day.char}
						</Button>
					))}
				</div>

				<Label className="flex-1">
				  Part of the day you play most

				  <div className="flex gap-1">
					  <Input type="time" placeholder="23" />

						<Input type="time" />
					</div>
				</Label>
			</div>

			<footer  className="flex gap-2 items-center justify-end">
			  <Dialog.Close
				  className="bg-zinc-500 hover:bg-zinc-600 px-4 h-12 rounded"
					type="button"
				>
					CANCEL
				</Dialog.Close>

				<button
				  className="bg-violet-500 hover:bg-violet-600 px-3 h-12 rounded flex gap-2 items-center justify-center"
					type="submit"
				>
				  <GameController size={24} />
				  Find duo
				</button>
			</footer>
		</form>
  )
}
