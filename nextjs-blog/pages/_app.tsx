import type { AppProps } from 'next/app'
import { AppBar, Container, CssBaseline } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <div>
    <CssBaseline/>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => router.push('/')}>
            EasyHardware.net
          </Typography>
          <Button variant='contained' onClick={() => router.push('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Container>
    <Component {...pageProps} />
    </Container>
  </div>
}

export default MyApp
