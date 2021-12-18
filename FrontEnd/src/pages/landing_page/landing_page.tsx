import Navbar from '../../components/Navbar'
import AdCard from '../../components/AdCard'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';



export default function LandingPage() {

    const [imagePath, setImagePath] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setImagePath("assets/images/2.jpg")
        setTitle("Mercedez Benc C12")
        setDescription("A very Super fast car . 2000 cc 450 hp and mny more")

    });

    return (<>
        <Navbar />

        <Grid container sx={{ mt: 7 }} spacing={2}
            justifyContent="center"
            alignContent="center" >

            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>
            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>
            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>
            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>
            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>
            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>
            <Grid item>
                <AdCard imagePath={imagePath} title={title} description={description} />
            </Grid>

        </Grid>
    </>)
}