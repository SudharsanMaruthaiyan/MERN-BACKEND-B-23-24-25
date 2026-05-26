-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "std" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_roll_no_key" ON "Students"("roll_no");
