-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PickupRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" TEXT,
    "place" TEXT,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "PickupRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PickupRequest" ("address", "createdAt", "date", "id", "phone", "place", "quantity", "status", "updatedAt", "user_id") SELECT "address", "createdAt", "date", "id", "phone", "place", "quantity", "status", "updatedAt", "user_id" FROM "PickupRequest";
DROP TABLE "PickupRequest";
ALTER TABLE "new_PickupRequest" RENAME TO "PickupRequest";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
