import { ReactNode } from 'react';
import { CardMedia } from '@mui/material';

import actor from '../assets/images/actor.jpg';

type ColumnType = {
  field: string;
  headerName: string;
  width: number;
  renderCell?: (params: any) => ReactNode;
};

export const columns: ColumnType[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'image',
    headerName: 'Image',
    width: 200,
    renderCell: (params: any) => (
      <CardMedia
        component='img'
        height='100%'
        image={params.value}
        alt='item'
      />
    ),
  },
  { field: 'description', headerName: 'Description', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'numbers', headerName: 'Numbers', width: 150 },
];

type RowType = {
  id: number;
  image: string;
  description: string;
  date: string;
  numbers: number;
};

export const rows: RowType[] = [
  {
    id: 1,
    image: actor,
    description: 'Tom Hardy',
    date: '2023-05-01',
    numbers: 10,
  },
  {
    id: 2,
    image: actor,
    description: 'Tom Hardy',
    date: '2023-05-02',
    numbers: 20,
  },
  {
    id: 3,
    image: actor,
    description: 'Tom Hardy',
    date: '2023-05-03',
    numbers: 30,
  },
  {
    id: 4,
    image: actor,
    description: 'Tom Hardy',
    date: '2023-05-04',
    numbers: 40,
  },
  {
    id: 5,
    image: actor,
    description: 'Tom Hardy',
    date: '2023-05-05',
    numbers: 50,
  },
];
