import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      var { current_status, reserved_till, proximity, size, location } =
        req.body;
      const locker = await prisma.locker.create({
        data: {
          current_status,
          reserved_till,
          proximity,
          size,
          location,
        },
      });
      res.redirect("/");
    } catch (e) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(e);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
