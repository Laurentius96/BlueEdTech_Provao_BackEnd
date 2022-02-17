/*
  Warnings:

  - You are about to drop the column `optionId` on the `propertie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "propertie" DROP CONSTRAINT "propertie_optionId_fkey";

-- AlterTable
ALTER TABLE "propertie" DROP COLUMN "optionId";

-- CreateTable
CREATE TABLE "_OptionToPropertie" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OptionToPropertie_AB_unique" ON "_OptionToPropertie"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionToPropertie_B_index" ON "_OptionToPropertie"("B");

-- AddForeignKey
ALTER TABLE "_OptionToPropertie" ADD FOREIGN KEY ("A") REFERENCES "option"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionToPropertie" ADD FOREIGN KEY ("B") REFERENCES "propertie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
