/*
  Warnings:

  - A unique constraint covering the columns `[email_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_email_id_key" ON "Users"("email_id");
