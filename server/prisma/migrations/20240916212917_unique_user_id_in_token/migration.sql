/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Token_user_key" ON "Token"("user");