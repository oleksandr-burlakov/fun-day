import React from "react";
import "./SearchBar.css";
import {useRecoilState} from 'recoil';
import { orderState, searchState, sortState } from "../../atoms/searchBarStates";
import {
    MenuItem, 
    Select, 
    FormControl, 
    InputLabel, 
    SelectChangeEvent, 
    ToggleButtonGroup, 
    ToggleButton, 
    InputBase,
    IconButton,
    Paper,
    Box,
    Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { userState } from "../../atoms/userStates";
import { Link } from 'react-router-dom';

export const SearchBar = () => {
    const [search, setSearch] = useRecoilState(searchState);
    const [sortBy, setSortBy] = useRecoilState(sortState);
    const [orderBy, setOrderBy] = useRecoilState(orderState);
    const [user] = useRecoilState(userState);

    const handleSortChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
    };

    const handleOrderChange = (event: React.MouseEvent<HTMLElement>, newOrder: string | null) => {
        if (newOrder)
            setOrderBy(newOrder);
    };

    return (
        <div className="search-bar-component">
            <div className="sort-by">
                {user != null &&
                    (<Box sx={{mr:2, display: 'flex', alignItems: 'center'}}>
                        <Link to={'new'}>
                            <Button variant="contained" size="large" endIcon={<AddIcon />}>
                                Add
                            </Button>
                        </Link>
                    </Box>)}
                <div className="category">
                    <FormControl fullWidth>
                        <InputLabel id="sort-by-select-label">Sort by:</InputLabel>
                        <Select
                            labelId="sort-by-select-label"
                            id="sort-by-select"
                            value={sortBy}
                            label="SortBy"
                            onChange={handleSortChange}
                        >
                            <MenuItem value={'name'} selected>Name</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="order">
                    <ToggleButtonGroup
                        value={orderBy}
                        exclusive
                        onChange={handleOrderChange}
                        aria-label="Order type"
                    >
                        <ToggleButton value="asc" aria-label="asc">
                            Asc
                        </ToggleButton>
                        <ToggleButton value="desc" aria-label="desc">
                            Desc
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div className="search-input">
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:400}}
                >
                    <InputBase
                        sx={{ ml:1, flex: 1}}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search...' }}
                        onChange={(event) => {setSearch(event.target.value)}}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    );
}