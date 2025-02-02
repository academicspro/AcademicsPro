import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function main() {
  const email = "admin1@gmail.com";
  const password = "12345";
  const name = "Rajneesh Rana";
  const phone = "1234567890";
  const address = "Delhi, India";
  const city = "Delhi";
  const state = "Delhi";
  const country = "India";
  const pincode = "110001";
  const profilePic = "https://www.google.com";

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      profilePic,
      sex:"MALE",
      bloodType:"A+",
      email,
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("Super Admin created successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => process.exit());
