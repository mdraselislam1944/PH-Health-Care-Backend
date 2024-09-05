import { Request, Response } from "express";
import userService from "./userService";

const createUser = async (req: Request, res: Response) => {
  try {
    const info = req.body;
    const userServiceInfo = await userService.createUser(info);
    res.status(201).json({
      message: "Data saved successfully",
      status: true,
      statusCode: 201,
      data: userServiceInfo,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
      status: false,
      statusCode: 500,
      data: null,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const userServiceInfo = await userService.getUsers();
    res.status(200).json({
      message: "Data retrieved successfully",
      status: true,
      statusCode: 200,
      data: userServiceInfo,
    });
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
      status: false,
      statusCode: 500,
      data: null,
    });
  }
};

export default { createUser, getUser };
