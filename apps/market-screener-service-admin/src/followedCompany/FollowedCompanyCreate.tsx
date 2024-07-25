import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StockTitle } from "../stock/StockTitle";

export const FollowedCompanyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
