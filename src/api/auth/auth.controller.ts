import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./local-auth.guard";
import { Request as ExpressRequest } from "express";

@Controller("auth")
export class AuthController {
  @UseGuards(LocalAuthGuard) @Post("login")
  async login(@Request() req: ExpressRequest) {
    return req.user;
  }

  @Get("logout")
  async logout(@Request() req: ExpressRequest) {
    req.logout();
  }
}
