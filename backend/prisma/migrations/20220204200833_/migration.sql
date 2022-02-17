/*
  Warnings:

  - You are about to drop the column `star` on the `reservation` table. All the data in the column will be lost.
  - Added the required column `start` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservation" DROP COLUMN "star",
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
