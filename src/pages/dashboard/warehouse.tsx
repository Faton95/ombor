import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Six</title>
      </Helmet>

      <div>Warehouse env change</div>
    </>
  );
}
