import { PrismaClient } from "@prisma/client";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const lockers = await prisma.Locker.findMany();
  return {
    props: {
      lockers: JSON.parse(JSON.stringify(lockers)),
    },
  };
}

export default function Locker(props) {
  var locker = props.lockers;
  console.log(locker);
}
