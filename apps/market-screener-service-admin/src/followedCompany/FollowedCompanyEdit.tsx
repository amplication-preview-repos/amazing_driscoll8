import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StockTitle } from "../stock/StockTitle";

export const FollowedCompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
