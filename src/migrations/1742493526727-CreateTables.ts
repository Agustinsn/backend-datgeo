import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1742493526727 implements MigrationInterface {
    name = 'CreateTables1742493526727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_87d4226cb676b3b16518977cc7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "document_type" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_2e1aa55eac1947ddf3221506edb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "documents" ("id" SERIAL NOT NULL, "path" character varying NOT NULL, "name" character varying NOT NULL DEFAULT '', "is_active" boolean NOT NULL DEFAULT false, "type" integer, CONSTRAINT "PK_ac51aa5181ee2036f5ca482857c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "dni" integer NOT NULL, "salary" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "job_type" integer, "document_dni" integer, "document_license" integer, "document_cv" integer, "role" integer, CONSTRAINT "UQ_765bc1ac8967533a04c74a9f6af" UNIQUE ("email"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "documents" ADD CONSTRAINT "FK_66f0789287cc73ca31dcefd5e43" FOREIGN KEY ("type") REFERENCES "document_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_94f2f58679b3119fabcf8f525bc" FOREIGN KEY ("job_type") REFERENCES "job_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_836f3ec525c129e92128dc2f998" FOREIGN KEY ("document_dni") REFERENCES "documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_49d8568fb3c18522c2f288bc3d2" FOREIGN KEY ("document_license") REFERENCES "documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_7b41812d91092b4b73c982f1981" FOREIGN KEY ("document_cv") REFERENCES "documents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_369c241605122cebb937b747d44" FOREIGN KEY ("role") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_369c241605122cebb937b747d44"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_7b41812d91092b4b73c982f1981"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_49d8568fb3c18522c2f288bc3d2"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_836f3ec525c129e92128dc2f998"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_94f2f58679b3119fabcf8f525bc"`);
        await queryRunner.query(`ALTER TABLE "documents" DROP CONSTRAINT "FK_66f0789287cc73ca31dcefd5e43"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "documents"`);
        await queryRunner.query(`DROP TABLE "document_type"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "job_types"`);
    }

}
