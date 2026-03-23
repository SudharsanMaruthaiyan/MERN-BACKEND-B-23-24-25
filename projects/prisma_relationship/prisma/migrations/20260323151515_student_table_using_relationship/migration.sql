-- CreateEnum
CREATE TYPE "ProofType" AS ENUM ('AADHARCARD', 'PANCARD');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH', 'NEFT', 'BANKTRANSFER');

-- CreateTable
CREATE TABLE "Student" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StrudentProof" (
    "student_proof_id" TEXT NOT NULL,
    "proof_type" "ProofType" NOT NULL,
    "proof_link" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StudentFees" (
    "student_fees_id" TEXT NOT NULL,
    "payment_id" TEXT NOT NULL,
    "payment_mode" "PaymentType" NOT NULL,
    "payment_amount" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_roll_no_key" ON "Student"("roll_no");

-- CreateIndex
CREATE UNIQUE INDEX "StrudentProof_student_proof_id_key" ON "StrudentProof"("student_proof_id");

-- CreateIndex
CREATE UNIQUE INDEX "StrudentProof_roll_no_key" ON "StrudentProof"("roll_no");

-- CreateIndex
CREATE UNIQUE INDEX "StudentFees_student_fees_id_key" ON "StudentFees"("student_fees_id");

-- AddForeignKey
ALTER TABLE "StrudentProof" ADD CONSTRAINT "StrudentProof_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentFees" ADD CONSTRAINT "StudentFees_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;
