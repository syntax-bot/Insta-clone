import "./Post.css";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";

export default function Post(){
  const [showComments,setShowComments]=useState(false);
  let showCommentClass;
  if(!showComments){
    showCommentClass="Show_Comments";
  }
  return (
    <div className="Post">
      <div className="Post_Head">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </div>
      <div className="Post_Content">
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="add to favorites">
            <CommentIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
      <div className="Post_Caption">
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </div>
      <div className="Post_Comments">
        <div>
          <button className="comment_Button"  onClick={()=>{
            setShowComments(!showComments);
          }}>{showComments?"Hide comments":"View all comments"}</button>
        </div>
        <div className={`${showCommentClass}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          temporibus molestias ex itaque doloremque? Vitae eaque dolorum
          doloremque. Sequi deleniti fuga unde vel dolorem in, exercitationem
          temporibus aliquid odio quod Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolorem omnis placeat possimus, dignissimos aut
          eligendi cum aspernatur quam aperiam officiis debitis laudantium hic
          sapiente consectetur velit at reprehenderit quae harum consequatur
          quas aliquid! Facere sequi fuga accusamus iusto nobis delectus id quas
          ipsum inventore sint laborum dolorum voluptates esse reiciendis minus
          dolore, suscipit laboriosam cum officiis nihil incidunt. Magni
          doloremque eligendi repudiandae accusamus saepe tempora harum sequi
          consequuntur, distinctio fugiat obcaecati quas. Consectetur, optio sed
          molestias, explicabo nesciunt esse accusantium laboriosam error
          tempora, in eum reiciendis voluptatem obcaecati magnam tenetur quod?
          Suscipit commodi assumenda illo dignissimos, maxime est reiciendis
          odio accusantium incidunt inventore voluptate quia sed dolore vitae.
          Dolore facere repellendus totam accusantium quae. Ut accusamus
          exercitationem, ad vero dicta iusto quibusdam ducimus. Rerum saepe
          neque ullam nemo perferendis voluptatem, vero ad cupiditate culpa est,
          aspernatur assumenda sequi ex temporibus nam quibusdam tempore
          praesentium in quidem eum corrupti? Similique aliquid perferendis
          magni porro repellendus quaerat perspiciatis ab nam dolorum labore
          accusantium nulla distinctio ut dolor, nobis, eligendi asperiores
          recusandae voluptatibus earum. Voluptates dolore consequuntur eos iure
          ullam, esse fugiat in animi suscipit quia. Dolorum accusantium enim
          amet, provident perspiciatis aut officiis commodi laboriosam modi
          odit, consectetur quos est distinctio fugit rem qui expedita ad
          repudiandae. Dolorem id, tempore facere aliquid aperiam iste eos harum
          omnis cum aspernatur dicta dolores, obcaecati modi pariatur porro
          quasi itaque voluptates quam iusto. Dolores, dignissimos maiores
          repudiandae veniam aperiam nisi quidem sequi voluptatibus incidunt rem
          voluptas corrupti voluptates velit officia accusantium laudantium est
          ut quaerat. Labore, dolore rerum nam velit voluptatem quae vel
          assumenda possimus dolorem veniam atque libero nulla esse et quod.
          Pariatur unde fugit illo. Tenetur ducimus laborum earum cum libero
          accusamus voluptatem a sint esse corporis odit, non aperiam? Numquam
          hic dolor distinctio architecto facilis dicta aspernatur odio magni
          illo. Impedit animi error repellat vero est vitae nihil magnam
          temporibus, aspernatur illo debitis perferendis quam quos reiciendis
          quisquam eos quo eligendi ipsum officia quasi odio delectus dolores?
          Pariatur dolorem sed nam voluptate officia facilis commodi doloremque
          et minima ipsum harum, magnam debitis corporis quia dolorum, vitae
          illum, nisi atque. Nam laboriosam laborum repellendus ea aliquid nihil
          consequatur harum! Sit voluptate obcaecati id doloribus doloremque ut
          ipsa neque eos, fugiat autem aliquam iste velit consectetur accusamus
          sequi deserunt eveniet quia officia vero rerum consequatur? Sit
          repudiandae enim amet doloribus exercitationem accusamus eos delectus
          illo non voluptate, inventore error perferendis qui cumque consectetur
          cupiditate.
        </div>
      </div>
    </div>
  );
}
