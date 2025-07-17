import { Request, Response } from "express";
import { rename } from "fs";
import { getAllUser, handleCreateUser } from "../services/user.services";

const getHomePage = async (req: Request, res: Response) => {
  //get user
  const users = await getAllUser(); // x <- y
  return res.render("home.ejs", {
    users: users,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create.user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
  const { fullName, email, address } = req.body;
  //handle create user
  handleCreateUser(fullName, email, address);
  return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser };
