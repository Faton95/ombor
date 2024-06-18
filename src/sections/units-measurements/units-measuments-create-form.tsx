import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const NewUser = Yup.object().shape({
  category: Yup.string().required('Kategoriya talab etiladi'),
});

type NewUserSchema = Yup.InferType<typeof NewUser>;

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function UnitsMeasurementsCreateForm({ open, onClose }: Props) {
  const defaultValues = useMemo(
    () => ({
      category: '',
    }),
    []
  );

  const methods = useForm<NewUserSchema>({
    resolver: yupResolver(NewUser),
    defaultValues,
  });

  const {
    reset,

    formState: { isSubmitting },
  } = methods;

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { maxWidth: 720 },
      }}
    >
      <FormProvider methods={methods} onSubmit={() => console.log('click')}>
        <DialogTitle>Yangi o&apos;lchov birligini yaratish</DialogTitle>

        <DialogContent>
          <Box rowGap={3} columnGap={2} display="grid" sx={{ pt: 1 }}>
            <RHFTextField name="category" label="O'lchov birligi nomi" />
          </Box>
        </DialogContent>

        <DialogActions>
          <LoadingButton
            variant="contained"
            loading={isSubmitting}
            onClick={() => {
              onClose();
              reset();
            }}
          >
            Yaratish
          </LoadingButton>
          <Button
            variant="outlined"
            onClick={() => {
              onClose();
              reset();
            }}
          >
            Bekor qilish
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
