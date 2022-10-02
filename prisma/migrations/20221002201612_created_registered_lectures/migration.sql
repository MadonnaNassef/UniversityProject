-- CreateTable
CREATE TABLE `RegisteredLectures` (
    `userId` INTEGER NOT NULL,
    `lectureId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `lectureId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RegisteredLectures` ADD CONSTRAINT `RegisteredLectures_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegisteredLectures` ADD CONSTRAINT `RegisteredLectures_lectureId_fkey` FOREIGN KEY (`lectureId`) REFERENCES `Lecture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
