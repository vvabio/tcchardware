import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EasyHardware.net
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const router = useRouter()
  const itemData = [
    {
      img: 'https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/1/_/1_122_1.jpg',
      title: 'PC FODIDO',
    },
    {
      img: 'https://static.meupc.net/produto/gabinete-deepcool-matrexx-50-matrexx50-mZZs74-L.jpg',
      title: 'PC DO DEMO',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '50vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.hardware.com.br/static/wp/2020/06/27/memory.jpg?fm=pjpg&ixlib=php-3.3.0)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5}  >
        <center>
    <ImageList sx={{ width: 500, height: 500}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="top"
          />
        </ImageListItem>
      ))}
      <Grid>
     <Button variant='contained' onClick={() => router.push('/config1')}>
        Veja
      </Button>
      </Grid>
      <Grid>
      <Button variant='contained' onClick={() => router.push('/config2')}>
        Veja
      </Button>
      </Grid>
    </ImageList>

    </center>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}











































