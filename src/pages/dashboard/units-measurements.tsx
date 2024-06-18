import { Helmet } from 'react-helmet-async';

import UnitsMeasurementsView from 'src/sections/units-measurements/view/units-measurements-view';
// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <UnitsMeasurementsView />
    </>
  );
}
