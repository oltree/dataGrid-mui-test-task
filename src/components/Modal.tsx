import { FC, memo } from 'react';
import { Modal, Box, CardMedia } from '@mui/material';

interface ModalContentProps {
  open: boolean;
  imageUrl: string;
  onClose: VoidFunction;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

export const ModalContent: FC<ModalContentProps> = memo(
  ({ open, imageUrl, onClose }) => (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={{ ...style }}>
        <CardMedia
          component='img'
          height='900'
          image={imageUrl}
          alt='actor'
        />
      </Box>
    </Modal>
  )
);
