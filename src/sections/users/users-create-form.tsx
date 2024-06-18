import * as Yup from 'yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const NewUser = Yup.object().shape({
  category: Yup.string().required('Kategoriya talab etiladi'),
});

type NewUserSchema = Yup.InferType<typeof NewUser>;

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function UsersCreateForm({ open, onClose }: Props) {
  const defaultValues = useMemo(
    () => ({
      category: '',
    }),
    []
  );

  const password = useBoolean();

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
        <DialogTitle>Yangi mahsulot yaratish</DialogTitle>

        <DialogContent>
          <Box rowGap={3} columnGap={2} display="grid" sx={{ pt: 1 }}>
            <RHFTextField name="category" label="Foydalanuvchi nomi" />
            <RHFSelect
              fullWidth
              name="role"
              label="Roli"
              PaperPropsSx={{ textTransform: 'capitalize' }}
            >
              {['Super admin', 'Omborchi', 'Yetkazib beruvchi'].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </RHFSelect>

            <RHFTextField
              name="password"
              label="Password"
              type={password.value ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={password.onToggle} edge="end">
                      <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <RHFTextField
              name="repeat-password"
              label="Password"
              type={password.value ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={password.onToggle} edge="end">
                      <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
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
