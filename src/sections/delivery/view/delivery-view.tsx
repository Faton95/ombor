import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import FormProvider from 'src/components/hook-form';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
} from 'src/components/table';

import UserTableRow from '../delivery-table-row';
import UserCreateForm from '../delivery-create-form';

// ----------------------------------------------------------------------

const data = [
  {
    id: 1,
    delivery_name: 'Mirjalil',
    address: 'Maksim-Gorkiy',
    phone: '+99893 123 12 12',
    comment: 'Iltimos tezro obkelila'
  },
  {
    id: 2,
    delivery_name: 'Abbos',
    address: 'Inha',
    phone: '+99893 123 12 12',
    comment: 'Iltimos tezro obkelila 123 123'
  },
  {
    id: 3,
    delivery_name: 'Kamron',
    address: 'Yoshlar saroyiga',
    phone: '+99893 123 12 12',
    comment: 'Iltimos tezro obkelila yonvotti'
  },
];

const TABLE_HEAD = [
  { id: 'N', label: '№', width: 20 },
  { id: 'delivery_name', label: 'Yetkazib beruvchi nomi', width: 300 },
  { id: 'address', label: 'Manzil', width: 200 },
  { id: 'phone', label: 'Telefon nomeri', width: 200 },
  { id: 'comment', label: 'Izoh', width: 400 },
  { id: '', width: 10 },
];

// ----------------------------------------------------------------------

export default function DeliveryView() {
  const table = useTable();

  const defaultValues = useMemo(
    () => ({
      category: '',
    }),
    []
  );

  const notFound = false;

  const quickEdit = useBoolean();

  const methods = useForm({
    defaultValues,
  });

  return (
    <Container maxWidth={false}>
      <FormProvider methods={methods}>
        <CustomBreadcrumbs
          sx={{ mb: 3 }}
          heading="Yetkazib berish"
          action={
            <Button
              variant="contained"
              onClick={quickEdit.onTrue}
              startIcon={<Iconify icon="mdi:user-add" />}
            >
              Yangi yaratish
            </Button>
          }
          links={[{ name: 'Yordamchilar', href: '#' }, { name: 'Yetkazib berish' }]}
        />

        <Card>
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <Scrollbar>
              <Table sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                />

                <TableBody>
                  {data.map((row) => (
                    <UserTableRow key={row.id} row={row} />
                  ))}
                  <TableEmptyRows emptyRows={emptyRows(table.page, table.rowsPerPage, 4)} />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
        </Card>
      </FormProvider>

      <UserCreateForm open={quickEdit.value} onClose={quickEdit.onFalse} />
    </Container>
  );
}

// ----------------------------------------------------------------------
