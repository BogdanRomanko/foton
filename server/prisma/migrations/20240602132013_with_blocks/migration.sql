-- CreateTable
CREATE TABLE "ProductBlocks" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductBlocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockImages" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "blockId" INTEGER NOT NULL,

    CONSTRAINT "BlockImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductBlocks" ADD CONSTRAINT "ProductBlocks_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockImages" ADD CONSTRAINT "BlockImages_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "ProductBlocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
