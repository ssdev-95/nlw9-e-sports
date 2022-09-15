import {
	Table,
	MigrationInterface,
	QueryRunner
} from "typeorm"

const TABLE_NAME = 'games'

export class gameTableCreation1663163526464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: TABLE_NAME,
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						isGenerated: true,
						isUnique: true
					},
					{
						name: 'title',
						type: 'varchar',
						isUnique: true,
						isNullable: false
					},
					{
						name: 'banner_url',
						type: 'varchar',
						isUnique: false,
						isNullable: false
					}
				]
			}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable(TABLE_NAME)
    }

}
