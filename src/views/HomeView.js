import imgBeers from "../assets/beers.png";
import imgRanBeers from "../assets/random-beer.png";
import imgnewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const HomeView = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Link to="/beers" style={{marginBottom: 13, textDecoration: 'none'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgBeers}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All beers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Link>

      <Link to="/random-beer" style={{marginBottom: 13, textDecoration: 'none'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgRanBeers}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Random beers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </Link>

      <Link to="/new-beer" style={{marginBottom: 13, textDecoration: 'none'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imgnewBeer}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Add beer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default HomeView;
