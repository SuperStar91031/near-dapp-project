import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Container } from '@mui/system';

import backgroundLeft from "../assets/img/stakingbgd.jpg";
import backgroundRight from "../assets/img/stakingbgd2.png";
import rankImg from "../assets/img/rank.png";

import tokenImg from "../assets/img/token.png";

import { Button, FormControl, Grid, Input, InputLabel, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Staking = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: "6em" }}>
                    <Box fontSize="3em"><b>STAKING</b></Box>
                    <Box sx={{
                        color: "#3ce531", cursor: "pointer", animationName: "colorAnimation",
                        animationDuration: "4s",
                        animationIterationCount: "infinite"
                    }} onClick={() => { navigate("/") }}>
                        <ArrowBackIosIcon />
                        <ArrowBackIosIcon />
                        <ArrowBackIosIcon />
                        <ArrowBackIosIcon />
                    </Box>
                    <Grid container sx={{
                        display: "grid",
                        mt: "3em",
                        gridAutoColumns: "1fr",
                        gridColumnGap: "2em",
                        gridRowGap: "2em",
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: "1fr 1fr",
                    }} >
                        <Grid item xs={6} sx={{
                            background: `url(${backgroundLeft})`, gridRowStart: "span 2",
                            gridRowEnd: "span 2",
                            gridColumnStart: "span 1",
                            gridColumnEnd: "span 1",
                            position: "relative",
                            overflow: "hidden",
                            maxWidth: "100% !important",
                            padding: "3.2em 2em 4em 3.6em",
                            borderRadius: "2.4em",
                            backgroundPosition: "50% 50%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                            <Box >
                                <Box component="img" src={tokenImg} sx={{
                                    position: "absolute",
                                    left: "auto",
                                    top: "8em",
                                    right: "-4.7em",
                                    bottom: "auto",
                                    width: "15.4em",
                                }} />
                                <Box sx={{ fontSize: "2em" }}>SLETH Token</Box>
                                <Stack sx={{ mt: "2.2em", mb: "2.7em" }}>
                                    <Box fontSize="1em">Soft Long on ETH</Box>
                                    <Box fontSize="6em" fontWeight="bold">27.4%</Box>
                                    <Box fontSize="1em" color="#ffffff8f">Start Date:<spen style={{ color: "#b8ffc4" }}>9/18/2022</spen>  &nbsp;
                                        End Date:<spen style={{ color: "#b8ffc4" }}>9/20/2022</spen></Box>
                                </Stack>
                                <Stack>
                                    <Box fontSize="1em" fontWeight="bold">
                                        Lockup Period: <spen style={{ color: "#b8ffc4" }}>10 Days</spen><br />
                                        Eligible for quarterly payouts: <spen style={{ color: "#b8ffc4" }}>Yes</spen><br />
                                        Pool Capacity: <spen style={{ color: "#b8ffc4" }}>1000 Test</spen> <br />
                                        Maximum Deposit: <spen style={{ color: "#b8ffc4" }}>100 Test</spen><br />
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sx={{
                            pb: "4em", pt: "2.4em", pl: "2.4em", pr: "2.4em", backgroundImage: `url(${backgroundRight})`, backgroundColor: `#ffffff0a`, borderRadius: "2.4em", maxWidth: "100% !important", backgroundPosition: "50% 100%",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat",
                            transition: " background-color 200ms"
                        }}>
                            <Box sx={{ mb: "0.3em", letterSpacing: "-0.04em", fontSize: "1em" }}>
                                <b>Balance: </b>
                                <strong >-</strong>
                            </Box>
                            <Box>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">MAX</InputLabel>
                                    <Input id="my-input" type='number' aria-describedby="my-helper-text" />
                                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                                </FormControl>
                                <Button variant="contained" sx={{
                                    bgcolor: "#6D4AFE",
                                    transition: "0.4S",
                                    textTransform: "uppercase",
                                    fontFamily: `"Russo One", sans-serif`,
                                    ml: "30px",
                                    padding: "10px",
                                    color: "white",
                                    fontSize: "20px",
                                    width: "170px",
                                }}>
                                    STAKE
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sx={{
                            pb: "4em", pt: "2.4em", pl: "2.4em", pr: "2.4em", backgroundColor: `#ffffff0a`, borderRadius: "2.4em", maxWidth: "100% !important",
                            transition: " background-color 200ms"
                        }}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Box fontSize="1.75rem">
                                        0 Test
                                    </Box>
                                    <span>Total Tokens Locked</span>
                                    <Box component="img" src={rankImg}></Box>

                                </Grid>
                                <Grid item xs={4}>
                                    <Box fontSize="1.75rem">
                                        100%
                                    </Box>
                                    <span>APY</span>
                                    <Box component="img" src={rankImg}></Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box fontSize="1.75rem">
                                        0
                                    </Box>
                                    <span>Pool Users</span>
                                    <Box component="img" src={rankImg}></Box>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Staking;