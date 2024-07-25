/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FollowedCompanyListRelationFilter } from "../../followedCompany/base/FollowedCompanyListRelationFilter";
import { NewsListRelationFilter } from "../../news/base/NewsListRelationFilter";
import { PortfolioListRelationFilter } from "../../portfolio/base/PortfolioListRelationFilter";

@InputType()
class StockWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  symbolField?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  marketCap?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FollowedCompanyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FollowedCompanyListRelationFilter)
  @IsOptional()
  @Field(() => FollowedCompanyListRelationFilter, {
    nullable: true,
  })
  followedCompanies?: FollowedCompanyListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => NewsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NewsListRelationFilter)
  @IsOptional()
  @Field(() => NewsListRelationFilter, {
    nullable: true,
  })
  newsItems?: NewsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PortfolioListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PortfolioListRelationFilter)
  @IsOptional()
  @Field(() => PortfolioListRelationFilter, {
    nullable: true,
  })
  portfolios?: PortfolioListRelationFilter;
}

export { StockWhereInput as StockWhereInput };