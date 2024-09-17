const PrismaClient = require("@prisma/client").PrismaClient;
const client = new PrismaClient();

class BlocksModel {
  async getBlock(blockId) {
    try {
      await client.$connect();
      const block = await client.productBlocks.findUnique({
        where: {
          id: blockId,
        },
      });
      await client.$disconnect();

      return block;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async getProductsBlocks(productId) {
    try {
      await client.$connect();
      const blocks = await client.productBlocks.findMany({
        where: {
          productId: productId,
        },
        orderBy: {
            id: 'asc'
        }
      });
      await client.$disconnect();

      return blocks;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async addBlock(type, content, productId) {
    try {
      await client.$connect();
      const res = await client.productBlocks.create({
        data: {
          type: type,
          content: content,
          productId: productId,
        },
      });
      await client.$disconnect();

      return res;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async addBlocks(data, productId) {
    try {
      data.forEach((item) => {
        item.productId = productId;
      });

      await client.$connect();
      const res = await client.productBlocks.createMany({
        data: data,
        skipDuplicates: true,
      });
      await client.$disconnect();

      return res;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async deleteBlock(blockId) {
    try {
      await client.$connect();
      const block = await client.productBlocks.delete({
        where: {
          id: blockId,
        },
      });
      await client.$disconnect();

      return block;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async deleteBlocks(productId) {
    try {
      await client.$connect();
      const res = await client.productBlocks.deleteMany({
        where: {
          productId: productId,
        },
      });
      await client.$disconnect();

      return res;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async updateBlock(id, type, content, productId) {
    try {
      await client.$connect();
      const res = await client.productBlocks.update({
        where: {
          id: id,
        },
        data: {
          type: type,
          content: content,
          productId: productId,
        },
      });
      await client.$disconnect();

      return res;
    } catch (e) {
      console.error(e);
      await client.$disconnect();
    }
  }

  async updateBlocks(data) {
    try {
      const promiseBlocks = [];
      data.forEach((cur) => {
        let block = null;

        if (cur.id) {
          block = this.updateBlock(
            parseInt(cur.id),
            cur.type,
            cur.content,
            cur.productId
          );
        } else {
          block = this.addBlock(cur.type, cur.content, cur.productId);
        }

        promiseBlocks.push(block);
      });

      const res = await Promise.all(promiseBlocks);

      return res.length;
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new BlocksModel();
