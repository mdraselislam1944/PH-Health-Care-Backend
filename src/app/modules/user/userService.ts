import { PrismaClient, UserStatus } from "@prisma/client";
import { IUser } from "./userType";

const prisma = new PrismaClient();

const createUser = async (info: IUser) => {
  const userData = {
    email: info.email,
    password: info.password,
    role: info.role,
    status: UserStatus.ACTIVE,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createUserData = await transactionClient.user.create({
      data: userData,
    });
    let createAdminData = null;
    if (info.admin) {
      createAdminData = await transactionClient.admin.create({
        data: {
          ...info.admin,
          email: createUserData.email,
        },
      });
    }

    return { createUserData, createAdminData };
  });

  return result;
};

const getUsers = async () => {
  const result = await prisma.user.findMany({ include: { admin: true } });
  return result;
};

export default { createUser, getUsers };
