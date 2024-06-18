import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'dashboard',
        items: [
          {
            title: 'Dashboard',
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
          {
            title: 'xabarnoma',
            path: paths.dashboard.notifications,
            icon: ICONS.ecommerce,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'asosiy',
        items: [
          {
            title: 'Kirim',
            path: paths.dashboard.enter,
            icon: ICONS.analytics,
          },
          {
            title: 'Omborxona',
            path: paths.dashboard.warehouse,
            icon: ICONS.banking,
          },
          {
            title: 'Chiqim',
            path: paths.dashboard.exit,
            icon: ICONS.booking,
          },
        ],
      },

      // DEMO MENU STATES
      {
        subheader: 'YORDAMCHILAR',
        items: [
          {
            title: 'Mahsulot nomlari',
            path: paths.dashboard.products,
            icon: ICONS.lock,
          },
          {
            title: 'Kategoriya',
            path: paths.dashboard.categories,
            icon: ICONS.blank,
          },
          {
            title: "O'lchov birliklar",
            path: paths.dashboard.units_measurements,
            icon: ICONS.folder,
          },
          // {
          //   title: 'Sabablar',
          //   path: paths.dashboard.reasons,
          //   icon: ICONS.mail,
          // },
          // {
          //   title: 'Otdel nomi',
          //   path: paths.dashboard.product_name,
          //   icon: ICONS.chat,
          // },
          {
            title: 'Mijoz',
            path: paths.dashboard.customer,
            icon: ICONS.calendar,
          },
          {
            title: 'Foydalanuvchilar',
            path: paths.dashboard.users,
            icon: ICONS.kanban,
          },
          {
            title: 'Yetkazib beruvchi',
            path: paths.dashboard.delivery,
            icon: ICONS.disabled,
          },
        ],
      },
    ],
    []
  );

  return data;
}
