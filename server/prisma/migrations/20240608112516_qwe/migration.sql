/*
  Warnings:

  - You are about to drop the column `blockId` on the `BlockImages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BlockImages" DROP CONSTRAINT "BlockImages_blockId_fkey";

-- AlterTable
ALTER TABLE "BlockImages" DROP COLUMN "blockId";
