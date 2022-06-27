import React from 'react';
import {Box} from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
      <Box flex={4} p={2}>
          <Post urlImage="https://images.pexels.com/photos/700535/pexels-photo-700535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Post urlImage="https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&w=400"/>
          <Post urlImage="https://images.pexels.com/photos/2041832/pexels-photo-2041832.jpeg?auto=compress&cs=tinysrgb&w=400"/>
          <Post urlImage="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </Box>
  );
}

export default Feed;