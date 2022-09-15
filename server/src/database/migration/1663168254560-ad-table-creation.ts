import { MigrationInterface, QueryRunner, Table } from "typeorm"

const TABLE_NAME = 'ads'

export class adTableCreation1663168254560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: TABLE_NAME,
				columns: [
					{
						name:'id',
						type:'varchar',
						isGenerated: true,
						isNullable:false,
						isUnique:true,
						isArray:false,
						isPrimary:true
					},
					{
						name:'name',
						type:'varchar',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false
					},
					{
						name:'years_playing',
						type:'integer',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false
					},
					{
						name:'discord',
						type:'varchar',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false
					},
					{
						name:'week_days',
						type:'varchar',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false
					},
					{
						name:'hour_start',
						type:'integer',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false
					},
					{
						name:'hour_end',
						type:'integer',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false
					},
					{
						name:'use_voice_channel',
						type:'boolean',
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false,
						default:false
					},
					{
						name:'created_at',
						type:'datetime', 
						isNullable:false,
						isUnique:false,
						isArray:false,
						isPrimary:false,
						default:'NOW()'
					},
					{
						name: 'game_id',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
						foreignKeyConstraintName: 'fk_game_id'
					}
				]
			}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable(TABLE_NAME)
    }

}
