import * as graphql from "@nestjs/graphql";
import { FollowedCompanyResolverBase } from "./base/followedCompany.resolver.base";
import { FollowedCompany } from "./base/FollowedCompany";
import { FollowedCompanyService } from "./followedCompany.service";

@graphql.Resolver(() => FollowedCompany)
export class FollowedCompanyResolver extends FollowedCompanyResolverBase {
  constructor(protected readonly service: FollowedCompanyService) {
    super(service);
  }
}
