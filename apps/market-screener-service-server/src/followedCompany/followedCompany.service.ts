import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FollowedCompanyServiceBase } from "./base/followedCompany.service.base";

@Injectable()
export class FollowedCompanyService extends FollowedCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
