import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'


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

export default function AdDetail(props:any){

    const {navigation} = props;
    useEffect(()=>{
        console.log(props.match.params.id)
    })
    return(
        <>
        <Box
        component='div'
        >


        Hello {props.parmas}
        </Box>
        </>
    )
}

