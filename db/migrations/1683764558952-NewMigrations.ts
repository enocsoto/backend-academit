import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1683764558952 implements MigrationInterface {
    name = 'NewMigrations1683764558952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_98256272d59de0cc10af3ecdd00\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`categoriaId\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`categoriaId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`thumbnailUrl\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`duration\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`categoryId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`title\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`url\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`url\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_98256272d59de0cc10af3ecdd00\` FOREIGN KEY (\`categoriaId\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_038baf265a6504529ffb1dcff0f\` FOREIGN KEY (\`categoryId\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_038baf265a6504529ffb1dcff0f\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_98256272d59de0cc10af3ecdd00\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`url\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`url\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`title\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`categoryId\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`duration\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`thumbnailUrl\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`categoriaId\``);
        await queryRunner.query(`ALTER TABLE \`video\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`categoriaId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_98256272d59de0cc10af3ecdd00\` FOREIGN KEY (\`categoriaId\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
