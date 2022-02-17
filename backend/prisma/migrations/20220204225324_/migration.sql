-- AlterTable
ALTER TABLE "propertie" ADD COLUMN     "optionId" INTEGER;

-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "propertie" ADD CONSTRAINT "propertie_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE SET NULL ON UPDATE CASCADE;
