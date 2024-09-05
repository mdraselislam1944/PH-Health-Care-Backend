-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "isDeleted" SET DEFAULT true;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
