import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const query = req.query;
  const { id } = query;
  const { key } = query;
  try {
    const Locker = await prisma.Locker.findUnique({
      where: {
        id: id,
      },
    });
    console.log(Locker);
  } catch (err) {
    res.status(500).json({ errora: err });
  }

  try {
    const validation = await prisma.Reservation.findMany({
      where: {
        _id: { in: { key } },
      },
    });
    console.log(validation);
  } catch (err) {
    res.status(500).json({ errorb: err });
  }

  // res.status(200).json({ Locker });
}
