import React, { FC } from 'react';
import { Route } from 'react-router-dom'

import routes from './routes/routes.config'
import SideDrawer from './shared/Drawer'


const App: FC = () => {
  return (
    <>
      <SideDrawer />
      {routes.map((route, index) => (
        <Route key={index} {...route} render={route.render} />
      ))}
    </>
  );
}

export default App;
