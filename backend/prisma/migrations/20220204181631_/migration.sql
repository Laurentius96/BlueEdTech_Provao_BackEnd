-- CreateTable
CREATE TABLE "reservation" (
    "id" TEXT NOT NULL,
    "star" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "propertieId" TEXT,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_propertieId_fkey" FOREIGN KEY ("propertieId") REFERENCES "propertie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
