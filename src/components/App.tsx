import { useState, useCallback } from 'react';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

import { ModalContent } from './Modal';

import { columns, rows } from '../data/dataGrid';

const style = {
  width: '37vw',
  height: '100vh',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const handleClick = (params: GridCellParams) => {
    if (params.field === 'image') {
      setModalImageUrl(params.row.image);
      setOpenModal(true);
    }
  };

  const handleCloseModal = useCallback(() => setOpenModal(false), []);

  return (
    <Box sx={{ ...style }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={false}
        onCellClick={handleClick}
        disableRowSelectionOnClick
        getRowHeight={() => 'auto'}
        sortingOrder={['asc', 'desc']}
      />
      <ModalContent
        open={openModal}
        onClose={handleCloseModal}
        imageUrl={modalImageUrl}
      />
    </Box>
  );
};

export default App;
