import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StockTitle } from "../stock/StockTitle";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
