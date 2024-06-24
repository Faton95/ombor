import { PopoverProps } from '@mui/material/Popover';

// ----------------------------------------------------------------------

export type MenuPopoverArrowValue =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface MenuPopoverProps extends Omit<PopoverProps, 'open'> {
  open: HTMLElement | null;
  arrow?: MenuPopoverArrowValue;
  hiddenArrow?: boolean;
}

// --------------------------------------------------------------
export type UsePopoverReturn = {
  open: PopoverProps['open'];
  anchorEl: PopoverProps['anchorEl'];
  onClose: () => void;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setAnchorEl: React.Dispatch<React.SetStateAction<PopoverProps['anchorEl']>>;
};

