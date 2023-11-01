/*
  Warnings:

  - Added the required column `variation` to the `Blood` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blood" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "variation" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Blood" ("comments", "createdAt", "group", "id", "name", "stock") SELECT "comments", "createdAt", "group", "id", "name", "stock" FROM "Blood";
DROP TABLE "Blood";
ALTER TABLE "new_Blood" RENAME TO "Blood";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
