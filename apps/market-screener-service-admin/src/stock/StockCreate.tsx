import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FollowedCompanyTitle } from "../followedCompany/FollowedCompanyTitle";
import { NewsTitle } from "../news/NewsTitle";
import { PortfolioTitle } from "../portfolio/PortfolioTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="symbol" source="symbolField" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput label="marketCap" source="marketCap" />
        <ReferenceArrayInput
          source="followedCompanies"
          reference="FollowedCompany"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FollowedCompanyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="newsItems"
          reference="News"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NewsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="portfolios"
          reference="Portfolio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PortfolioTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
