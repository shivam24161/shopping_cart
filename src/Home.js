import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { UserContext } from "./Mycontext";
import {useContext} from "react";
function Home(props) {
  const obj=useContext(UserContext);

  return (
    <>
      <div className="mainDiv" style={{backgroundColor:obj.bgColor,height:"120vh"}}>
      {props.data.map((i) => {
        return (
          <>
            <Card sx={{ maxWidth: 600,margin:"2%",padding:"3%",backgroundColor:obj.bgColor,color:obj.color}} className="Homecard">
              <CardActionArea>
                <CardMedia className="img1" component="img" height="140" image={i.image} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className="type1">
                    {i.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{backgroundColor:obj.bgColor,color:obj.color}}>
                    Price :&#8377;{i.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="addtocart" size="medium" color="primary" sx={{fontWeight:"bold"}} id={i.id} onClick={props.add}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </>
        )
      })}
      </div>
    </>
  );
}
export default Home;
