import { Button, Card } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router';

interface PCComponentProps {
    title: string;
    image: string;
}

function PCComponent(props: PCComponentProps) {
    const router = useRouter()
    return <Card style={{textAlign: 'center', height: '100%'}} sx={{p: 2}}>
       <h5>{props.title}</h5>
       <img src={props.image} style={{height: 135}}/>

       <Button variant="outlined" sx={{mr:1}} onClick={() => router.push('/montagem')}>
           Selecionar
       </Button>
       <Button variant="outlined" onClick={() => router.push('/montagem')}>
           Detalhes
       </Button>
    </Card>
}

export default PCComponent