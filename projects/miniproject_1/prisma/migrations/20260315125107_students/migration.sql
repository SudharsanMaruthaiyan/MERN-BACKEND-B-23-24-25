-- CreateTable
CREATE TABLE "Students" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "std" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_roll_no_key" ON "Students"("roll_no");
