import React from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";


const Post = ({urlImage}) => {
    return (
        <Card sx={{margin:3}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "primary" }} aria-label="recipe">
                        AC
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Happy Moments..."
                subheader="Junio 27, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image={urlImage}
                alt="snowing"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: "red"}} />}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;