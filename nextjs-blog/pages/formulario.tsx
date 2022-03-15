import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react'
import PCComponent from '../components/PCComponent';
import data from '../utils/data.json'

const componentTypes = [
    {
        value: 'gab',
        label: 'Gabinete'
    },
    {
        value: 'power',
        label: 'Fonte'
    },
    {
        value: 'gpu',
        label: 'Placa de video'
    },
    {
        value: 'motherboard',
        label: 'Placa mãe'
    },
    {
        value: 'memory',
        label: 'Memória'
    },
    {
        value: 'harddisk',
        label: 'HD'
    },

    {
        value: 'cpu',
        label: 'Processador'
    },

    {
        value: '',
        label: 'Todos'
    },
]

function Formulario() {
    const [componentType, setComponentType] = useState('');

    return <div>
        <Box py={2}>
        {componentTypes.map(ct => <Button variant="outlined" onClick={() => setComponentType(ct.value)}>
            {ct.label}
        </Button>
        )}
        </Box>


       <Grid container spacing={2}>
       {data.filter(item => componentType ? item.type === componentType ? item : null : item).map(item => <Grid item xs={3}>
        <PCComponent title={item.name} image={item.image}/>
       </Grid>)}
       </Grid>
    </div>
}

export default Formulario