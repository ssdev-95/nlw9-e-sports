import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { Select } from './select'

import { Check, GameController } from 'phosphor-react'

import {
  useState,
	FormEvent,
	FormHTMLAttributes as Attributes
} from 'react'

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
  const [selectedDays, setSelectedDays] = useState<string[]>([])
	const [useVoiceChannel, setUseVoiceChannel] = useState(false)

	function handleCreateNewAd(event:FormEvent) {
	  event.preventDefault()

		const target = event.target as HTMLFormElement
		const formData = new FormData(target)
		const data = Object.fromEntries(formData)	

		console.log(data)
		console.log(useVoiceChannel)
		console.log(selectedDays)
	}

  return (
    <form
		  {...props}
			onSubmit={handleCreateNewAd}
			className="flex flex-col gap-4 text-white"
		>
		  <Label>
			  What game

			  <Select name="game" />
			</Label>

			<Label>
			  Your name (or nickname)

				<Input
				  name="name"
			    placeholder="How they call you in matches"
				/>
			</Label>

			<div className="grid grid-cols-2 mb:grid-cols-1 gap-2">
			  <Label>
  				Years of playing

				  <Input
					  name="yearsPlaying"
					  placeholder="It'ss fine be ZERO"
					/>
				</Label>

				<Label>
				  Who's you on Discord?

					<Input
					  name="discord"
					  placeholder="you#12345"
					/>
				</Label>
			</div>

			<div className="flex gap-2 mb:flex-col">
			  <ToggleGroup.Root
				  className="grid grid-cols-4 mb:grid-cols-7 gap-1"
				  type="multiple"
					value={selectedDays}
					onValueChange={setSelectedDays}
				>
	  		  {weekDaysChars.map(day => (
  				  <ToggleGroup.Item
						  className={["flex flex-col gap-4 p-2 text-white font-semibold text-md rounded flex items-center justify-center",
							selectedDays.includes(String(day.number)) ? 'bg-violet-500' : 'bg-zinc-900'
						  ].join(' ')}
  					  key={day.number}
  					  value={String(day.number)}
							title={day.title}
			  		>
		  			  {day.char}
						</ToggleGroup.Item>
  				))}
			  </ToggleGroup.Root>

				<Label className="flex-1">
				  Part of the day you play most

				  <div className="flex gap-1">
					  <Input
						  type="time"
							name="hourStart"
							placeholder="23:00"
						/>

						<Input
						  type="time"
							name="hourEnd"
						/>
					</div>
				</Label>
			</div>

			<label className="mt-2 flex flex-row gap-2 text-sm items-center">
			  <Checkbox.Root
				  name="useVoiceChannel"
				  className="w-6 h-6 p-1 bg-zinc-900 rounded"
					checked={useVoiceChannel}
					onCheckedChange={(checked) => {
					  if(checked === true) {
					    setUseVoiceChannel(true)
						} else {
						  setUseVoiceChannel(false)
						}
					}}
				>
				  <Checkbox.Indicator>
					  <Check className="w-4 h-4 text-emerald-400" />
					</Checkbox.Indicator>
				</Checkbox.Root>
		    
				I prefer to use voice channel.
			</label>

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
