import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";

export const FollowedCompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FollowedCompanies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
