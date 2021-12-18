import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardImage from '../assets/images/2.jpg'

interface Props {
    // mobileMenuId: string
    // showDropDown: () => void
    // mobileMoreAnchorEl?: Element
    // handleMobileMenuClose: () => void
    // isMobileMenuOpen: boolean
    imagePath: string
    title: string
    description: string
}


export default function MultiActionAreaCard({ imagePath, title, description }: Props) {

    return (

        <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`require(${CardImage})`}
                    alt="Car"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
            {console.log(imagePath)}
        </Card>

    );
}