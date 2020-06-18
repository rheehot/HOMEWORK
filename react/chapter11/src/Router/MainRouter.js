import React from "react";
import { Route, Link, Switch, NavLink, withRouter } from "react-router-dom";
import Main from "../Main";
import Ranking from "../pages/Ranking";
import About from "../pages/About";

const MainRouter = ({ history, location }) => {
  const activeStyle = {
    color: "red",
  };
  const goBack = () => {
    history.goBack();
  };
  console.log(location);

  return (
    <>
      <NavLink to="/" activeStyle={activeStyle}>
        메인
      </NavLink>
      <NavLink to="/ranking">랭킹</NavLink>
      <NavLink to="/about">어바웃</NavLink>
      <button type="button" onClick={goBack}>
        뒤로가기
      </button>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/ranking" component={Ranking} />
        <Route
          path={["/ranking", "/ranking2", "/ranking3"]}
          component={Ranking}
        />
        <Route path="/about" component={About} />
        <Route render={() => <div>페이지가 존재하지 않습니다.</div>} />
      </Switch>
    </>
  );
};

export default withRouter(MainRouter);
