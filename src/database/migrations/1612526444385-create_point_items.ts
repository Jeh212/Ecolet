import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class createPointItems1612526444385 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: 'point_items',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true
					},
					{
						name: 'point_id',
						type: 'int',
						isNullable: false
					},
					{
						name: 'item_id',
						type: 'int',
						isNullable: false
					}
				],
                foreignKeys:[
                    {
                        name:"point_id",
                        referencedTableName:"points",
                        referencedColumnNames:["id"],
                        columnNames:["point_id"],
                        onDelete:"CASCADE",
                        onUpdate:"CASCADE"
                    }
                ]
			}),
			true
		);
		
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable('point_items');
	}
}
