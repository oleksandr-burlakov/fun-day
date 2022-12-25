import { 
    Container,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    Select,
    MenuItem
} from '@mui/material';
import {
    SelectChangeEvent
} from '@mui/material/Select';
import { useState } from 'react';
import {FileUploader} from "react-drag-drop-files";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {Link} from 'react-router-dom';

const fileTypes = ['JPG', 'PNG', 'GIF'];

type Place = {
    name: string;
    value: string;
}

export const AddNewEvent = () => {
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState<string | null>(null);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [place, setPlace] = useState('');
    let places: Place[] = [];

    const handleSelect = (event: SelectChangeEvent) => {
        setPlace(event.target.value as string);
    };

    const handleFile = (file: any) => {
        setFile(file);
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function () {
            setFilePath(reader.result as any);
            };
    };

    return (
        <>    
            <Container maxWidth="xl">
                <Paper sx={{marginTop: '2em', padding:'2em'}}>
                    <Typography variant='h2' gutterBottom>Add new event</Typography>
                    <Grid container>
                        <Grid item xs={8}>
                            <Grid container gap={'1em'}>
                                <Grid item xs={5}>
                                    <TextField id="name" label="Name" variant="outlined" fullWidth={true} autoComplete='off'>
                                    </TextField>
                                </Grid>
                                <Grid item xs={5}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker 
                                            label="Time"
                                            value={date}
                                            onChange={(newValue) => {
                                                setDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField fullWidth={true} {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={5}>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <InputLabel htmlFor='price'>Price</InputLabel>
                                        <OutlinedInput 
                                            id="price"
                                            label="Price"
                                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                            type='number'
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={5}>
                                    {
                                        (places.length == 0 && 
                                            <div style={{display:'flex', alignItems:'center', height:'100%', justifyContent:'center'}}>
                                                <Typography variant='h6'>
                                                    There are no places.
                                                    <Link style={{marginLeft:'5px'}} to={'/places/new'}>Add new...</Link>
                                                </Typography>
                                            </div>
                                        ) ||
                                        (places.length != 0 && 
                                            <FormControl fullWidth={true}>
                                                <InputLabel id="places-label">Place</InputLabel>
                                                <Select
                                                    labelId='places-label'
                                                    id="places"
                                                    value={place}
                                                    label="Place"
                                                    onChange={handleSelect}
                                                    fullWidth={true}
                                                >
                                                    {places.map(p => <MenuItem value={p.value}>{p.name}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                        )
                                    }
                                </Grid>
                                <Grid item xs={5}>
                                    <Button variant='contained' fullWidth={true}>
                                        Add
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            {
                                (filePath && <img style={{width: '100%', maxHeight:"200px", objectFit: 'cover', marginBottom: '1em'}} src={filePath as string} />) ||
                                (!filePath && <div style={{width:'100%', height:'200px', backgroundColor: '#ccc', marginBottom: '1em'}}></div>)
                            }
                            <FileUploader handleChange={handleFile} name="image" types={fileTypes} />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}