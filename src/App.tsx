import React from 'react';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import SearchBox from './components/searchBox';
import theme from './theme';


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> 
            <div>
                <Typography variant="h4" align="center" sx={{ mt: 5 }}>Dog Finder</Typography>
                <SearchBox />
            </div>
        </ThemeProvider>
    );
};

export default App;

