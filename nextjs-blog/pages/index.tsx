import { AppBar } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
const router = useRouter()

  return (
     <div>
           <Typography variant='h1'>
             <center>
             Hardware
             </center>
      </Typography>
      <center>
      <Button variant='contained' onClick={() => router.push('/formulario')}>
        Monte Já
      </Button>
      </center>
     </div>
  )
}

export default Home
