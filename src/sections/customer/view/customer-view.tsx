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

import UserTableRow from '../customer-table-row';
import UserCreateForm from '../customer-create-form';

// ----------------------------------------------------------------------

const data = [
  {
    id: 1,
    customer: 'Mirjalil',
    organization: 'Artel',
    phone: '+99893 123 12 12',
  },
  {
    id: 2,
    customer: 'Abbos',
    organization: 'Inha',
    phone: '+99893 123 12 12',
  },
  {
    id: 3,
    customer: 'Kamron',
    organization: 'Orient group',
    phone: '+99893 123 12 12',
  },
];

const TABLE_HEAD = [
  { id: 'N', label: '№', width: 20 },
  { id: 'customer', label: 'Mijoz', width: 400 },
  { id: 'organization', label: 'Tashkilot', width: 400 },
  { id: 'phone', label: 'Telefon nomeri', width: 300 },
  { id: '', width: 10 },
];

// ----------------------------------------------------------------------

export default function CustomerView() {
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
          heading="Mijoz"
          action={
            <Button
              variant="contained"
              onClick={quickEdit.onTrue}
              startIcon={<Iconify icon="mdi:user-add" />}
            >
              Yangi yaratish
            </Button>
          }
          links={[{ name: 'Yordamchilar', href: '#' }, { name: 'Mijoz' }]}
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
