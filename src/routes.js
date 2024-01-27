import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function Router({mode, isdarkmode}) {
    const routes = useRoutes([
        {
            path: '/',
            element: <Layout mode={mode} isdarkmode={isdarkmode}/>,
            children: [
              { index: true, element: <Dashboard isdarkmode={isdarkmode}/> },
            //   { path: 'employee', element: <Notfound/> },
            //   { path: 'document', element: <Notfound/> },
            //   { path: 'report', element: <Notfound/> },
            ],
        },
    ]);
    
  
    return routes;
  }