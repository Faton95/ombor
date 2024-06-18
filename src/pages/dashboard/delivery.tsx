import { Helmet } from 'react-helmet-async';

import DeliveryView from 'src/sections/delivery/view/delivery-view';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <DeliveryView />
    </>
  );
}
