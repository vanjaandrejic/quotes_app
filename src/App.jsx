import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import QuoteDetail from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
