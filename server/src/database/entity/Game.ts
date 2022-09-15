import {
	Entity,
	Column,
	BaseEntity,
	PrimaryGeneratedColumn
} from "typeorm"

//import {Ad} from "./Ad"

@Entity('games')
export class Game extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	public id:string

	@Column()
	public title: string

	@Column()
	public bannerUrl: string

	/*@OneToMany(() => Ad, (ad) => ad.gameId)
	ads: Ad[]*/
}
