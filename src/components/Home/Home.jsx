import "./Home.css";
import Post from "./Post";
import Stories from "./Stories";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
export default function Home() {
  const [showComments, setShowComments] = useState(false);
  let showCommentClass;
  if (!showComments) {
    showCommentClass = "hide_Comments";
  } else {
    showCommentClass = "Show_Comments";
  }

  return (
    <div className="Home">
      <div className={`${showCommentClass}`}>
        <div className="hide_comments_btn">
          <IconButton
            aria-label="Clear"
            onClick={() => {
              setShowComments(!showComments);
            }}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        <div>
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
          cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis illum neque quam ducimus ullam minus accusamus tenetur ut?
          Ducimus quo facere dolores in nihil tempora. Possimus ducimus in
          repellat maiores omnis nesciunt accusamus vel quod numquam
          reprehenderit, facilis et atque distinctio aspernatur perspiciatis
          recusandae officiis sed voluptate magni suscipit? Hic ipsa atque alias
          vitae laboriosam necessitatibus minus, assumenda vel omnis ipsum
          cupiditate adipisci pariatur iste maiores iure enim, possimus sequi
          temporibus ex ullam praesentium asperiores nam! A obcaecati nisi ipsa
          veritatis asperiores velit cupiditate libero id accusantium, numquam
          dolorum animi, dicta sunt omnis sed quod delectus natus sint
          laudantium porro tempore quisquam adipisci. Veritatis non animi minus
          quisquam in, optio amet dignissimos quis ex ipsa pariatur repellat
          architecto molestias voluptate quia consectetur ipsam eligendi.
          Sapiente eum nisi eius magni neque natus iure dolores delectus maxime
          fugiat deleniti voluptatibus, libero facilis hic qui est esse et. Sed
          facere quaerat porro quibusdam nobis ea quam in, esse voluptatibus
          reprehenderit labore eligendi deserunt quo! Soluta excepturi labore
          placeat rem nulla ipsa corrupti facere neque totam architecto
          voluptatum atque asperiores voluptatibus quidem nobis aliquam
          reiciendis repellendus eos nesciunt nemo sunt, sit amet accusamus!
          Aut, possimus perspiciatis odit numquam consectetur pariatur facilis
          praesentium ratione quidem ipsum fugit dolorem sunt id modi! Cumque,
          culpa. Odio error nemo dolorem repudiandae, id fuga et facilis. Minima
          pariatur veniam ipsam ex dolore vero aspernatur esse? Iste, quod
          nobis! Esse, rem culpa ut voluptas molestias rerum magni quo tempora?
          Dolore porro modi ratione, deleniti molestias ipsam aliquid, repellat
          saepe esse tempora impedit nemo voluptatum dolorem praesentium
          placeat, eaque sint. Veniam cum minus modi repudiandae alias.
          Assumenda velit placeat, ullam fugit voluptate earum dicta distinctio
          maxime dolores omnis voluptatem, consequatur ad iusto ipsam id eius
          delectus voluptatum ducimus sed unde amet autem possimus cupiditate
          explicabo? Quas deleniti, ut perspiciatis aut fugiat nesciunt
          reiciendis laboriosam ex quia quos fugit sapiente ullam. Voluptatem
          laudantium quasi alias? Vitae nobis, ex voluptatum totam nihil sunt
          nesciunt deleniti, excepturi architecto, ab itaque culpa ullam! Id
          pariatur maxime eius sapiente dolorum. Laboriosam ipsum possimus quasi
          quos perferendis a eos tempora dolorum itaque accusantium optio quia
          eligendi velit quaerat quisquam inventore, assumenda hic unde adipisci
          veritatis molestias! Nam error soluta quibusdam adipisci, voluptate
          dolores perferendis quis explicabo est distinctio odit voluptas
          molestiae eligendi corrupti. Fugiat modi voluptatum soluta maxime
          impedit quia, esse eum quos, natus quaerat iure autem itaque, corporis
          deleniti quo tenetur eius commodi repellendus? Minima adipisci quas,
          non dignissimos aspernatur quidem. Voluptatibus, numquam. Soluta
          perferendis exercitationem laborum nobis similique harum corporis
          deleniti sunt quod enim quia quidem tempora deserunt impedit amet vel
          explicabo voluptatem perspiciatis et voluptatibus dicta ex, recusandae
          reiciendis laboriosam? Repellendus, eaque alias quibusdam eveniet
          laudantium facilis atque, ex vel sint provident quam. Cum sequi unde
          enim assumenda esse quo rerum vero. Voluptas placeat ipsum officiis
          quasi blanditiis sapiente, molestias rem quas facilis? Repellat saepe,
          recusandae laboriosam, doloribus dolore cumque rerum omnis impedit
          quibusdam iure aperiam asperiores harum. Blanditiis optio
          necessitatibus possimus iusto animi voluptatum voluptatem dolor! Ipsam
          consequatur iure hic debitis inventore rem aspernatur culpa nesciunt
          natus reiciendis illum deleniti aliquid provident sit repellendus,
          animi tenetur, obcaecati nemo ipsa veniam quia ratione sed! Maiores
          ipsam iure illo veniam incidunt nisi cumque molestias architecto
          dolor. Cumque neque esse expedita similique reprehenderit quasi ipsum
          dolores, minus culpa quae pariatur, magnam commodi assumenda excepturi
          vel enim dicta. Itaque nam optio qui? Voluptatum ipsa recusandae
          reprehenderit doloribus possimus numquam voluptatem quaerat dolorem
          accusamus provident, sed in, expedita quisquam neque nisi porro ex
          quod laboriosam facere odio repellat commodi reiciendis tempora odit?
          Nulla maxime consequatur omnis impedit et incidunt quos accusantium in
          ut velit aut, eius optio sed autem, tempora nam ratione. Similique aut
          saepe reiciendis beatae aliquid in. Numquam earum quia dignissimos
          alias sit commodi ipsum, ipsa voluptas tenetur unde porro architecto
          cumque cupiditate rem! Ad vero quaerat ducimus, totam sit magni
          pariatur sequi tenetur illo sapiente. Expedita neque maiores in quo
          cumque. Odit molestias, tempora ullam unde asperiores similique quas
          fugit rem delectus? Aliquid numquam praesentium alias! Officia saepe
          sint repudiandae debitis aliquam ipsa voluptas in dolores rem alias
          quibusdam repellat et inventore facere ab ullam autem, sapiente
          perspiciatis nostrum recusandae. Nobis saepe suscipit fugiat quibusdam
          voluptas consectetur sunt totam, impedit nam expedita hic libero
          delectus in tempore quod nesciunt sequi deleniti iure doloremque
          aliquid. Tenetur totam maxime repudiandae impedit illo? Quae,
          officiis. Doloribus sapiente libero dolorem soluta aut, molestias
          harum magnam necessitatibus expedita cumque non, autem, voluptatum
          amet? Explicabo tenetur in voluptas quaerat expedita facilis
          perferendis illum impedit dolore doloribus rem possimus consequatur
          commodi eligendi quibusdam officiis provident sit perspiciatis sunt
          nesciunt, nam sequi placeat quasi non! Alias vero dolores in eum
          voluptate aspernatur officiis expedita quibusdam obcaecati, temporibus
          ratione neque! Minus ducimus quidem obcaecati dignissimos, quam
          reiciendis enim, aliquam nisi nemo rem ipsum voluptas aspernatur et?
          Ipsa quam non asperiores dolorum consectetur ratione voluptatem
          doloribus voluptatum. Eius illum tempora molestiae excepturi quas
          totam deserunt minus aliquam, eos similique deleniti et exercitationem
          sunt veniam officiis iste, atque vel reiciendis, suscipit ratione
          ipsam fugit distinctio ad accusantium? Ex quibusdam nam fugit nostrum
          doloremque dolore cupiditate consequuntur perferendis voluptatem quas
          odit, earum, saepe recusandae alias autem repudiandae ipsum quos quod
          ad. Enim, quis, eveniet consequatur laudantium incidunt nemo aliquid
          deleniti architecto aspernatur quo aperiam illo illum nostrum quam rem
          vero maxime commodi, molestiae numquam ad? Magnam dolorum fuga harum
          esse nisi numquam, quod voluptatem laudantium est, voluptates
          praesentium ipsum itaque quisquam deserunt eos provident nostrum sed!
          Vel corrupti iusto culpa non. Quisquam debitis delectus earum voluptas
          cupiditate possimus quae enim vero, provident nulla ipsam iusto amet
          aliquid obcaecati atque veritatis architecto blanditiis autem, nam
          iure, illo quo minus? Tempora laudantium minima impedit error unde
          enim odit officiis magni numquam voluptas. Dolor sit veniam
          repudiandae numquam et totam adipisci tempore provident perferendis
          necessitatibus! Consequuntur, fugiat. Hic nesciunt obcaecati quibusdam
          aut atque nulla, eaque nam quaerat. Voluptatem obcaecati nesciunt
          molestiae reprehenderit quos magnam enim, totam mollitia, soluta
          incidunt quod saepe nam ut labore adipisci, culpa iste! Dolorum porro
          accusamus hic eos, quam qui! Ipsa repudiandae doloribus expedita
          facere eveniet.
        </div> 
      </div>
      <Stories />
      <Post showComments={showComments} setShowComments={setShowComments} />
      <Post showComments={showComments} setShowComments={setShowComments} />
      
    </div>
  );
}
