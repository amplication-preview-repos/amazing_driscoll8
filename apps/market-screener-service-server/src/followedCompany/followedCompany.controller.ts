import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FollowedCompanyService } from "./followedCompany.service";
import { FollowedCompanyControllerBase } from "./base/followedCompany.controller.base";

@swagger.ApiTags("followedCompanies")
@common.Controller("followedCompanies")
export class FollowedCompanyController extends FollowedCompanyControllerBase {
  constructor(protected readonly service: FollowedCompanyService) {
    super(service);
  }
}
