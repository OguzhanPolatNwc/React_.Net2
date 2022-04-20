import { ComponentType } from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router";
import { toast } from "react-toastify";
import { useAppSelector } from "../store/configureStore";

interface Props extends RouteProps {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  roles?: string[];
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ component: Component, roles, ...rest }: Props) {
  const { user } = useAppSelector(state => state.account);
  return (
    <Route {...rest} render={props => {
        if (!user) {
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }

        if (roles && !roles?.some(r => user.roles?.includes(r))) {
          toast.error('Not authorised to access this area')
          return <Redirect to={{ pathname: "/catalog"}} />
        }

        return <Component {...props} />
      }
      }
    />
  );
}
