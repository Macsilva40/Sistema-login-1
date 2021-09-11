import { Router } from "express";
import { UsuariosController } from "./controlles/UsuariosController";

const routes = Router();

const usuariosController = new UsuariosController();

routes.get("/login", usuariosController.login);

export { routes };
