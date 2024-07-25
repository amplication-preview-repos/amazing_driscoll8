import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";

export const PortfolioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="shares" source="shares" />
        <TextField label="purchasePrice" source="purchasePrice" />
        <ReferenceField label="Stock" source="stock.id" reference="Stock">
          <TextField source={STOCK_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
