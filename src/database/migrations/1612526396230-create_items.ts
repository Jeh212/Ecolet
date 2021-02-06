import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createItems1612526396230 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(
			new Table({
				name: 'items',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true
					},
					{
						name: 'image',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'title',
						type: 'varchar',
						isNullable: false
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable('items');
	}
}
