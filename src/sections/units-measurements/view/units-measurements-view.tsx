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

import UnitsMeasurementsTableRow from '../units-measurements-row';
import UnitsMeasurementsCreateForm from '../units-measuments-create-form';

// ----------------------------------------------------------------------

const data = [
  {
    id: 1,
    category: 'Kg',
  },
  {
    id: 2,
    category: 'Litr',
  },
  {
    id: 3,
    category: 'Dona',
  },
  {
    id: 4,
    category: 'MM',
  },
  {
    id: 5,
    category: 'Tonna',
  },
  {
    id: 6,
    category: 'Qop',
  },
  {
    id: 7,
    category: 'Korobka',
  },
];

const TABLE_HEAD = [
  { id: 'N', label: '№', width: 20 },
  { id: 'category', label: 'O\'lchov birligi', width: 1100 },
  { id: '', width: 10 },
];

// ----------------------------------------------------------------------

export default function UnitsMeasurementsView() {
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
          heading="O'lchov birliklari"
          action={
            <Button
              variant="contained"
              onClick={quickEdit.onTrue}
              startIcon={<Iconify icon="mdi:user-add" />}
            >
              Yangi yaratish
            </Button>
          }
          links={[{ name: 'Yordamchilar', href: '#' }, { name: 'O\'lchov birliklari' }]}
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
                    <UnitsMeasurementsTableRow key={row.id} row={row} />
                  ))}
                  <TableEmptyRows emptyRows={emptyRows(table.page, table.rowsPerPage, 4)} />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
        </Card>
      </FormProvider>

      <UnitsMeasurementsCreateForm open={quickEdit.value} onClose={quickEdit.onFalse} />
    </Container>
  );
}

// ----------------------------------------------------------------------
