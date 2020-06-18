import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import SubRanking1 from "../pages/SubRanking1";
import SubRanking2 from "../pages/SubRanking2";
import SubRanking3 from "../pages/SubRanking3";

const SubRouter = () => {
  return (
    <>
      <NavLink to="/ranking/subRanking1">서브랭킹1</NavLink>
      <NavLink to="/ranking/subRanking2">서브랭킹2</NavLink>
      <NavLink to="/ranking/subRanking3">서브랭킹3</NavLink>
      <Switch>
        <Route path="/ranking/subRanking1" component={SubRanking1} />
        <Route path="/ranking/subRanking2" component={SubRanking2} />
        <Route path="/ranking/subRanking3" component={SubRanking3} />
      </Switch>
    </>
  );
};

export default SubRouter;
