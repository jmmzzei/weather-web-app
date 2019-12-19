import React from 'react'
// import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Box, Heading, Button } from 'rebass'
import { ThemeProvider } from "theme-ui";


const Boxi = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box fontSize={4} p={3} sx={{
        p: 1,
        color: '#f1f1f1',
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        ':hover':{
            backgroundColor: 'tomato',
            color: '#fff',
            borderRadius:20
        }
      }}>

                <Heading px={5} py={5}>This is the Heading</Heading>
                <Button variant='secondary' fontSize={1}>This is a  Button</Button>
            </Box>
        </ThemeProvider>
    )
}

export default Boxi
