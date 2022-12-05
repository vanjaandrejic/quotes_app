import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./Pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./Pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const AllQuotes = React.lazy(() => import("./Pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
