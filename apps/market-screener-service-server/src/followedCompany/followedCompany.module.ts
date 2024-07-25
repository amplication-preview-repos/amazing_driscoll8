import { Module } from "@nestjs/common";
import { FollowedCompanyModuleBase } from "./base/followedCompany.module.base";
import { FollowedCompanyService } from "./followedCompany.service";
import { FollowedCompanyController } from "./followedCompany.controller";
import { FollowedCompanyResolver } from "./followedCompany.resolver";

@Module({
  imports: [FollowedCompanyModuleBase],
  controllers: [FollowedCompanyController],
  providers: [FollowedCompanyService, FollowedCompanyResolver],
  exports: [FollowedCompanyService],
})
export class FollowedCompanyModule {}
