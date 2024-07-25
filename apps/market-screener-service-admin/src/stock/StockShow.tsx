import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STOCK_TITLE_FIELD } from "./StockTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="symbol" source="symbolField" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="marketCap" source="marketCap" />
        <ReferenceManyField
          reference="FollowedCompany"
          target="stockId"
          label="FollowedCompanies"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userId" source="userId" />
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="News" target="stockId" label="NewsItems">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="content" source="content" />
            <TextField label="publishedAt" source="publishedAt" />
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Portfolio"
          target="stockId"
          label="Portfolios"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="userId" source="userId" />
            <TextField label="shares" source="shares" />
            <TextField label="purchasePrice" source="purchasePrice" />
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
