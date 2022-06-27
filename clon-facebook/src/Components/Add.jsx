import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";
import RecommendIcon from '@mui/icons-material/Recommend';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import SendIcon from '@mui/icons-material/Send';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display:"flex",
    alignItems: "center",
    gap:"10px",
    marginBottom:"20px"
});

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
      <>
          <Tooltip
              title="New Post"
              sx={{
                  position:"fixed",
                  bottom:20,
                  left: {xs: "calc(50% - 25px)", md:30}
                }}
              onClick={e=>setOpen(true)}
          >
              <Fab color="primary" aria-label="add">
                  <AddIcon />
              </Fab>
          </Tooltip>
          <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Box
                width={400}
                height={280}
                bgcolor={"background.default"} color={"text.primary"}
                p={3}
                borderRadius={2}
              >
                  <Typography
                    variant="h6"
                    color="gray"
                    textAlign="center"
                  >
                    Create Post
                  </Typography>
                  <UserBox>
                      <Avatar
                          sx={{width:"30", height:"30"}}
                          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          onClick={e=>setOpen(true)}
                      />
                      <Typography
                          fontWeight={500} variant="span"
                      >
                          Alejo C.
                      </Typography>
                  </UserBox>
                  <TextField
                      sx={{width:"100%"}}
                      id="standard-multiline-static"
                      multiline
                      rows="4"
                      placeholder="What's on your mind?"
                      variant="standard"
                  />
                  <Stack
                    direction="row"
                    gap={1}
                    mt={2}
                    mb={3}
                  >
                    <RecommendIcon color="primary"/>
                    <ImageIcon color="secondary"/>
                    <VideocamIcon color="success"/>
                    <SendIcon color="error"/>
                  </Stack>
                  <ButtonGroup
                      fullWidth
                      variant="contained"
                      aria-label="outlined primary button group"
                  >
                      <Button>Post</Button>
                      <Button color="secondary"><CalendarMonthIcon/></Button>
                  </ButtonGroup>
              </Box>
          </StyledModal>
      </>
    );
    }

export default Add;