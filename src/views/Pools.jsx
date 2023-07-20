import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Container } from '@mui/system';

import Card from '@mui/material/Card';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import title from "../assets/img/title.svg";
import SlethIcon from "../assets/img/sl.svg";
import DftflpIcon from "../assets/img/dt.svg";
import SsethIcon from "../assets/img/ss.svg";
import GlpIcon from "../assets/img/glp.png";

import lowIcon from "../assets/img/lowicon.svg";
import mediumIcon from "../assets/img/mediumicon.svg";

import { Button, Grid, Icon, Stack } from '@mui/material';

const Pools = () => {
    const navigate = useNavigate();

    const tokenIcon = {
        SlethIcon, DftflpIcon, SsethIcon, GlpIcon
    }

    function createData(icon, name, fullname, ROI, perPercent, perDollar, risk, state) {
        return { icon, name, fullname, ROI, perPercent, perDollar, risk, state };
    }

    const rows = [
        createData("SlethIcon", "SLETH", "Soft Long on ETH", 45.0, -13.57, -0.14, 1, false),
        createData("DftflpIcon", "DFTFLP", "DeFi token farming LPs", 40.0, 25.95, 0.26, 2, true),
        createData("SsethIcon", "SSETH", "Soft Short on ETH", 25.0, -4.48, -0.04, 2, true),
        createData("GlpIcon", "GLP", "GLP Index token", 27.0, 2.54, 0.02, 2, true),
    ];

    const stateRender = (state) => {
        return (
            <Button sx={{ textTransform: 'capitalize' }} variant="contained" disabled={!state}>{state ? "Open" : "Closed"}</Button>
        )
    }

    const goStaking = () => {
        navigate('pool');
    }

    return (
        <>
            <Box >
                <Container maxWidth="lg">
                    <Box>
                        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Box className="investment-box">New investment tool</Box>
                            <Box component='img' src={title} sx={{
                                position: "absolute",
                                zIndex: -1,
                            }} />
                            <Box className='pools-box'>
                                Pools
                            </Box>
                        </Stack>
                    </Box>

                    <Box sx={{ pt: 10, gridRowGap: '0.8em', display: "flex", flexDirection: "column" }}>
                        {rows.map((row) => (
                            <Card key={row.name} className="pools-card" onClick={goStaking} >
                                <Grid container >
                                    <Grid item md={4} sx={{
                                        display: "grid",
                                        gridTemplateColumns: "auto auto", gridColumnGap: "1em", WebkitBoxPack: "start",
                                        WebkitJustifyContent: "start"
                                    }}>
                                        <Box component='img' src={tokenIcon[row.icon]} sx={{
                                            width: "2.3em",
                                            height: "2.3em",
                                            borderRadius: "10em",
                                            boxShadow: "0 4px 1.6em 0 rgb(100 87 240 / 24%)",
                                            gridRowEnd: "span 2",
                                            alignItems: "center"
                                        }} />
                                        <Box>
                                            {row.name}
                                        </Box>
                                        <Box sx={{ fontSize: "0.9em", color: "#ffffff5c" }}>
                                            {row.fullname}
                                        </Box>
                                    </Grid>

                                    <Grid item md={2} >
                                        <Box sx={{ fontSize: "0.9em", color: "#ffffff5c" }}>
                                            Expected 1y ROI
                                        </Box>
                                        <Box>
                                            {row.ROI.toFixed(1)}%
                                        </Box>
                                    </Grid>

                                    <Grid item md={3} >
                                        <Box sx={{ fontSize: "0.9em", color: "#ffffff5c" }}>
                                            All time performance
                                        </Box>
                                        <Box sx={{ color: row.perPercent < 0 ? "#ffffff5c" : "#2dec6e" }}>
                                            {row.perPercent < 0 ? "" : "+"}{row.perPercent}% {row.perPercent < 0 ? (<ArrowDownwardIcon fontSize='15px' />) : (<ArrowUpwardIcon fontSize='15px' />)} $ {row.perPercent < 0 ? "" : "+"}{row.perDollar}
                                        </Box>
                                    </Grid>

                                    <Grid item md={2} >
                                        <Box sx={{ fontSize: "0.9em", color: "#ffffff5c" }}>
                                            Risk level
                                        </Box>
                                        <Box sx={{ color: "#ffffff5c", color: row.perPercent < -5 ? "#b4ff99" : "#ffd978" }}>
                                            <Box component="img" src={row.perPercent < -5 ? lowIcon : mediumIcon} sx={{ width: "15px" }} /> {row.perPercent < -5 ? "Low" : "Medium"}
                                        </Box>
                                    </Grid>

                                    <Grid item md={1} >
                                        {stateRender(row.state)}
                                    </Grid>
                                </Grid>

                            </Card>
                        ))}

                    </Box>
                </Container>
            </Box >
        </>
    )
}

export default Pools;