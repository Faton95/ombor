import { Helmet } from 'react-helmet-async';

import UsersView from 'src/sections/users/view/users-view';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <UsersView />
    </>
  );
}
