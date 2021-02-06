import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createPoints1612526325526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        return await queryRunner.createTable(new Table({
            name:'points',
            columns:[
                {
                    name:'id',
                    type:'int',
                    isPrimary:true
                },
                {
                    name:'image',
                    type:'varchar',
                    isNullable: false,
                },
                {
                    name:'name',
                    type:'varchar',
                    isNullable: false,

                },
                {
                    name:'email',
                    type:'varchar',
                    isNullable: false,
                },
                {
                    name:'whatsapp',
                    type:'varchar',
                    isNullable: false,
                },
                {
                    name:'latitude',
                    type:'decimal',
                    isNullable: false,
                },
                {
                    name:'longitude',
                    type:'decimal',
                    isNullable: false,
                },
                {
                    name:'city',
                    type:'varchar',
                    isNullable: false,
                },
                {
                    name:'uf',
                    type:'varchar',
                    isNullable: false
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('points')
    }

}
