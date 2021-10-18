import React, { FC } from "react";
// import * as ROUTES from "../constants/routes";
// import { Route, Redirect } from "react-router-dom";

// interface Props {
//     user:any;
//     loggedInPath:any;
//     children:any;
// }

// export function IsUserRedirect: FC<Props> ({ user, loggedInPath, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (!user) {
//           return children;
//         }

//         if (user) {
//           return (
//             <Redirect
//               to={{
//                 pathname: loggedInPath,
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
// }

// export function ProtectedRoutes({ user, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user) {
//           return children;
//         }

//         if (!user) {
//           return (
//             <Redirect
//               to={{
//                 pathname: ROUTES.SIGN_IN,
//                 state: { from: location },
//               }}
//             />
//           );
//         }
//         return null;
//       }}
//     />
//   );
// }