/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FollowedCompanyWhereUniqueInput } from "../../followedCompany/base/FollowedCompanyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FollowedCompanyUpdateManyWithoutStocksInput {
  @Field(() => [FollowedCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowedCompanyWhereUniqueInput],
  })
  connect?: Array<FollowedCompanyWhereUniqueInput>;

  @Field(() => [FollowedCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowedCompanyWhereUniqueInput],
  })
  disconnect?: Array<FollowedCompanyWhereUniqueInput>;

  @Field(() => [FollowedCompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FollowedCompanyWhereUniqueInput],
  })
  set?: Array<FollowedCompanyWhereUniqueInput>;
}

export { FollowedCompanyUpdateManyWithoutStocksInput as FollowedCompanyUpdateManyWithoutStocksInput };