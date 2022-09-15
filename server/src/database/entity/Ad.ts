import {
	Entity,
	Column,
	ManyToOne,
	PrimaryGeneratedColumn,
	JoinColumn
} from "typeorm"

import { Game } from './Game'

@Entity('ads')
export class Ad {
	@PrimaryGeneratedColumn('uuid')
	public id: string

	@Column()
  public name: string

	@Column()
  public yearsPlaying: number

	@Column()
  public discord: string

	@Column()
  public weekDays: string
	
	@Column()
	public hourStart: number

	@Column()
  public hourEnd: number

	@Column({ default: false })
  public useVoiceChannel: boolean

	@Column({ default: Date.now() })
	public createdAt: Date

	@ManyToOne(() => Game, (game) => game.id)
	@JoinColumn()
	public gameId: string
}
