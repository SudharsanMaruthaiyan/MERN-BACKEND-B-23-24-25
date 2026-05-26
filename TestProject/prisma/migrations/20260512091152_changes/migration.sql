/*
  Warnings:

  - You are about to drop the column `blood_group` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `std` on the `Students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "blood_group",
DROP COLUMN "std";
