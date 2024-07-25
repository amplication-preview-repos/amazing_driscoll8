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

export const PortfolioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="userId" source="userId" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput label="purchasePrice" source="purchasePrice" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
