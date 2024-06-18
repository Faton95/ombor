// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    notifications: `${ROOTS.DASHBOARD}/notifications`,
    enter: `${ROOTS.DASHBOARD}/enter`,
    warehouse: `${ROOTS.DASHBOARD}/warehouse`,
    exit: `${ROOTS.DASHBOARD}/exit`,
    products: `${ROOTS.DASHBOARD}/products`,
    categories: `${ROOTS.DASHBOARD}/categories`,
    units_measurements: `${ROOTS.DASHBOARD}/units_measurements`,
    reasons: `${ROOTS.DASHBOARD}/reasons`,
    product_name: `${ROOTS.DASHBOARD}/product_name`,
    customer: `${ROOTS.DASHBOARD}/customer`,
    users: `${ROOTS.DASHBOARD}/users`,
    delivery: `${ROOTS.DASHBOARD}/delivery`,
  },
};
