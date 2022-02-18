/*
  Warnings:

  - You are about to drop the column `createAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `_OptionToPropertie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `propertie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reservation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OptionToPropertie" DROP CONSTRAINT "_OptionToPropertie_A_fkey";

-- DropForeignKey
ALTER TABLE "_OptionToPropertie" DROP CONSTRAINT "_OptionToPropertie_B_fkey";

-- DropForeignKey
ALTER TABLE "propertie" DROP CONSTRAINT "propertie_userId_fkey";

-- DropForeignKey
ALTER TABLE "reservation" DROP CONSTRAINT "reservation_propertieId_fkey";

-- DropForeignKey
ALTER TABLE "reservation" DROP CONSTRAINT "reservation_userId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "createAt",
DROP COLUMN "imageUrl",
DROP COLUMN "updateAt";

-- DropTable
DROP TABLE "_OptionToPropertie";

-- DropTable
DROP TABLE "option";

-- DropTable
DROP TABLE "propertie";

-- DropTable
DROP TABLE "reservation";
