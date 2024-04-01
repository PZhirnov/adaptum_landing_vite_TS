import { useState } from 'react'
import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import { NavBar } from '../components/NavBar'
import { SliderSection } from '../components/SliderSection'
import { ServiceSection } from '../components/ServiceSection'
import { AboutSection } from '../components/AboutSection'
import { CaseSection } from '../components/CaseSection'
import { ClientSection } from '../components/ClientSection'
import { ContactSection } from '../components/ContactSection'
import { FooterContainer } from '../components/FooterContainer'


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4
};



function Main() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className='App'>

            <div className="hero_area">
                <SliderSection handleOpenModal={handleOpen} />
            </div>
            <ServiceSection />
            <AboutSection handleOpenModal={handleOpen} />
            <CaseSection />
            <ClientSection />
            <ContactSection />

            {/* <Blog /> */}
            <div>
                {/* Модальное окно */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Оставьте свои контактные данные
                        </Typography>

                        <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '20px' }}>
                            <TextField id="standard-basic" label="Введите ваше имя" variant="standard" />
                            <TextField id="standard-basic" label="Наименование компании" variant="standard" />
                            <TextField id="standard-basic" label="Номер для связи" variant="standard" />
                            <TextField id="standard-basic" label="e-mail" variant="standard" type='email' />


                            <TextField
                                id="filled-multiline-static"
                                label="Введите сообщение"
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="filled"
                            />
                            <Button variant="contained" color="success">
                                Отправить сообщение
                            </Button>

                        </div>



                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default Main