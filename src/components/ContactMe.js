import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        > 
            <div>
            <TextField
                    id="filled-textarea"
                    label="Name"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                />
            </div>
            <div>
            <TextField
                    id="filled-textarea"
                    label="Email Address"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                />
            </div>
            <div>
            <TextField
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="filled"
                />
            </div>
        </Box>
    );
}