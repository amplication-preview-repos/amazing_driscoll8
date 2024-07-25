import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StrategyList } from "./strategy/StrategyList";
import { StrategyCreate } from "./strategy/StrategyCreate";
import { StrategyEdit } from "./strategy/StrategyEdit";
import { StrategyShow } from "./strategy/StrategyShow";
import { StockList } from "./stock/StockList";
import { StockCreate } from "./stock/StockCreate";
import { StockEdit } from "./stock/StockEdit";
import { StockShow } from "./stock/StockShow";
import { PortfolioList } from "./portfolio/PortfolioList";
import { PortfolioCreate } from "./portfolio/PortfolioCreate";
import { PortfolioEdit } from "./portfolio/PortfolioEdit";
import { PortfolioShow } from "./portfolio/PortfolioShow";
import { FollowedCompanyList } from "./followedCompany/FollowedCompanyList";
import { FollowedCompanyCreate } from "./followedCompany/FollowedCompanyCreate";
import { FollowedCompanyEdit } from "./followedCompany/FollowedCompanyEdit";
import { FollowedCompanyShow } from "./followedCompany/FollowedCompanyShow";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MarketScreenerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Strategy"
          list={StrategyList}
          edit={StrategyEdit}
          create={StrategyCreate}
          show={StrategyShow}
        />
        <Resource
          name="Stock"
          list={StockList}
          edit={StockEdit}
          create={StockCreate}
          show={StockShow}
        />
        <Resource
          name="Portfolio"
          list={PortfolioList}
          edit={PortfolioEdit}
          create={PortfolioCreate}
          show={PortfolioShow}
        />
        <Resource
          name="FollowedCompany"
          list={FollowedCompanyList}
          edit={FollowedCompanyEdit}
          create={FollowedCompanyCreate}
          show={FollowedCompanyShow}
        />
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
