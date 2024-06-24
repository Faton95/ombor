import { Helmet } from 'react-helmet-async';

import { OrderListView } from 'src/sections/order/view';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <OrderListView />
    </>
  );
}
