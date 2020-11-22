import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class payments1606081676757 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payments',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isUnique: true,
            type: 'uuid',
            default: 'uuid_generate_v4()',
            generationStrategy: 'uuid',
          },
          {
            name: 'referenceId',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'float',
          },
          {
            name: 'expiresAt',
            type: 'varchar'
          }
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('payments');
  }
}
