import React, { useState } from "react";
import "./Profile.css";
import ProfilePost from "./ProfilePost";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
export default function Profile() {
  const [viewFull, setViewFull] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [editingPost, setEditingPost] = useState(false);
  const textArea = <textarea name="" id=""></textarea>;
  const bio = (
    <div>
      <div>User_Name</div>
      <div>Actual Name</div>
      <div>bio ......</div>
    </div>
  );
  const editform = (
    <div className="editPostForm">
      <div>
        <button>Delete Post</button>
      </div>
      <div className="editFormInput">
        <label htmlFor="">Caption</label>
        <textarea name="" id=""></textarea>
        <button>Save</button>
      </div>
    </div>
  );

  const comments = (
    <div className="Profile_comments">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ipsa
      doloribus illo, aspernatur vel amet, nesciunt obcaecati dolorem nihil
      officia praesentium quos quaerat. Dolores incidunt inventore facilis nihil
      pariatur voluptates sint labore iste omnis. Itaque reiciendis, eveniet
      quis nulla perspiciatis voluptate officia ipsam impedit ipsum veniam,
      quidem possimus laudantium accusantium suscipit! Adipisci voluptatem
      minima dicta animi quidem. Voluptates reiciendis consequatur sunt labore
      nihil. Error, neque eum enim consectetur aliquam deleniti unde itaque
      officia ad dignissimos ex deserunt alias quas voluptatem repellat nemo
      vitae exercitationem, ducimus porro non id nostrum esse odio sit. Odit
      illum quas aspernatur minima modi nemo enim repellendus tempore nostrum
      iure architecto, ratione mollitia, id necessitatibus magni perferendis,
      sint itaque culpa dolores molestias velit consectetur veniam rem ipsum?
      Assumenda quisquam a iure iusto voluptas repellat praesentium, et alias
      pariatur exercitationem eos asperiores reiciendis perferendis ad. Itaque
      officia ex a sed non iusto nostrum velit rerum corrupti vitae? Ut, unde
      deserunt sint sit aspernatur asperiores suscipit, quisquam culpa omnis,
      dolor voluptates nemo. Amet, praesentium corporis! Aspernatur, pariatur.
      Nostrum saepe ea facere minima numquam tempore aspernatur harum nemo
      eligendi, molestias omnis asperiores maiores voluptas repellat ut quod
      recusandae quia sunt quaerat, porro, delectus totam. Error rem sequi quam
      sunt ratione cum delectus ipsa mollitia minima? Iste excepturi, quod quae
      aperiam libero beatae nulla provident quisquam quibusdam eum blanditiis
      soluta modi facilis perspiciatis quos quidem porro architecto, fugiat
      veniam. Accusamus reprehenderit sequi tempora ut enim sapiente vitae
      libero nostrum odio atque, iusto quae maiores nam sint modi consequuntur
      cum ipsam iure nobis sit aperiam architecto? Unde doloribus facere impedit
      natus dicta voluptatem alias fugiat rem quis, fugit reprehenderit quo
      doloremque. Aliquid voluptatem sunt repellendus provident reiciendis
      adipisci dicta, earum molestiae libero quo omnis ratione, reprehenderit,
      voluptas quam totam maiores facere fugit aut cumque consectetur assumenda
      eum. Hic soluta numquam quam officia voluptatem ex et vel temporibus
      harum, saepe expedita quisquam laboriosam eos pariatur sapiente doloribus?
      Necessitatibus quae est accusamus eaque possimus soluta. Sapiente odit
      numquam ratione iure voluptatum ea tempora expedita aliquam? Nesciunt
      officiis officia commodi eveniet. Non, iste sint? Laudantium magnam soluta
      amet fugiat, aperiam quidem distinctio, quisquam cum sunt, doloremque at
      ab illum sint temporibus itaque eos velit harum commodi? Sit cupiditate
      neque ipsam beatae, ipsum vero, molestias asperiores voluptas perferendis,
      reiciendis deserunt blanditiis illo. Dolorum doloremque numquam possimus
      eum exercitationem et, quas rerum, tempora sit esse inventore provident
      perferendis pariatur harum! Adipisci consectetur magni incidunt ut, unde
      iste, praesentium soluta suscipit sit quidem cupiditate deleniti aperiam a
      commodi. Reiciendis vitae dolore tempora expedita quisquam pariatur,
      asperiores sequi neque, alias animi error? Commodi, assumenda ad, ut
      pariatur natus ullam distinctio consequuntur maxime reprehenderit
      accusamus sequi nulla quod quia dolores beatae, deleniti obcaecati
      incidunt. Ipsa ab nam incidunt laborum, consectetur praesentium commodi
      quasi officia exercitationem corporis voluptatem illo ullam repellendus
      pariatur hic sint eaque quae dolore iste quidem expedita! Ducimus labore
      nisi quae ipsam, temporibus eum iste. Quasi a magnam amet nobis quibusdam,
      sed delectus provident eos, minus sit dolore quod ad minima consequuntur
      ea voluptates autem impedit dolor nemo ex. Inventore minima labore dolore
      error. Neque, dicta voluptatum explicabo delectus quam laboriosam
      laudantium ad magni perspiciatis harum? Quibusdam aliquam ut voluptates
      quis iste animi ratione excepturi est accusantium maiores. Sunt esse
      delectus exercitationem a, pariatur at assumenda dolorem labore maxime
      similique laudantium fuga facilis! Accusamus quidem incidunt qui aliquam
      architecto nam fugit, ut explicabo nobis ea voluptate laborum. Maxime
      dolorem, natus esse ducimus eum ad in ut laboriosam, aliquid quae iste,
      nesciunt vel temporibus. Dolore vero hic reprehenderit voluptates
      provident consequatur laudantium neque maxime modi fugiat, quod et quo
      delectus molestias est excepturi aspernatur. Deserunt placeat,
      perspiciatis id consequuntur aliquid facere asperiores? A delectus autem
      nulla recusandae sint cupiditate repellat ratione commodi perspiciatis
      eius doloremque esse, dolores culpa dolorem velit ipsam, iusto libero
      dolorum nihil eveniet unde sequi deleniti, sunt est. Dolorum quos iure
      numquam eaque et, laborum tempora accusantium quas suscipit placeat
      recusandae quia nisi cumque perspiciatis est doloremque explicabo deleniti
      dolores ex corrupti ab rerum! Inventore ex repellat quasi tempore
      recusandae quisquam, natus illum blanditiis veritatis quia incidunt?
      Repellat iste a voluptate, fugit aspernatur rem provident commodi nobis
      temporibus reiciendis nemo eius assumenda sit repudiandae odio at cumque
      quidem. Id ratione optio veritatis fugiat accusantium vel, quaerat natus
      eveniet, sunt non molestiae recusandae ipsam dolorem quasi quis quo
      impedit ut ex. Dignissimos dolor fugit neque ratione quod accusantium
      necessitatibus. Modi mollitia quod inventore esse minus nostrum dicta
      adipisci debitis aliquid beatae? Repellat ad sed ipsum sit possimus
      provident magnam inventore ipsam quae. Error ad cupiditate facere vitae
      cum quis. Debitis provident iusto nobis praesentium amet aliquid
      reprehenderit. Natus ipsum, voluptate magnam velit inventore distinctio
      odit tenetur atque sapiente, delectus animi, recusandae quae assumenda
      voluptatem pariatur iusto numquam vitae cumque? Sapiente inventore error
      dolores pariatur, consequatur itaque perferendis deserunt hic eaque omnis
      cupiditate. Inventore corporis voluptas eveniet quia neque vero vitae
      odit, ut minima autem natus quo repudiandae, omnis nemo praesentium harum
      voluptatibus consequuntur nisi cupiditate tenetur maxime eum incidunt
      error! Perferendis praesentium error at id. Debitis, recusandae atque?
      Dicta sed veniam, unde ea recusandae enim nisi culpa harum ab distinctio
      sapiente id totam iure excepturi ipsam cumque suscipit odio nobis tempore
      quos velit at pariatur aut laudantium. Eum eos dicta dolorum aspernatur
      incidunt totam nisi cum, architecto sequi commodi esse earum temporibus
      distinctio quas sint? Earum ab accusamus consectetur perspiciatis
      recusandae, sed corporis atque explicabo numquam repellendus eaque
      reprehenderit incidunt iusto aliquid ducimus esse hic neque? Numquam nobis
      repellendus facilis molestias blanditiis amet. Quaerat, iste. Quod
      consectetur corrupti ut, fuga aliquam molestias, expedita similique
      officiis ex ad quaerat et numquam amet sapiente earum optio voluptate
      placeat voluptatum sequi deleniti, dolorum sunt ipsam possimus? Ea quod
      natus omnis exercitationem dolorem ab aliquam commodi debitis facere unde
      voluptatibus earum doloribus, veniam dignissimos sunt ex voluptate sequi
      voluptates? Quos, facere ut quod dolores beatae temporibus, cupiditate
      sint praesentium sequi laboriosam doloribus nisi! Inventore temporibus
      praesentium totam enim minima ea, tempora sed architecto adipisci harum
      dolores fugit ipsam libero reiciendis eaque at! Porro perspiciatis
      possimus nobis fuga nostrum, dicta nisi similique aperiam? Iste odio
      cumque aliquid voluptatem, corporis sit nobis fugiat facilis laboriosam
      recusandae distinctio voluptatum in consectetur ullam sunt a doloremque
      eius natus deserunt repellendus cupiditate fugit. Excepturi id neque
      reprehenderit, earum saepe provident quis laborum quaerat animi assumenda
      accusantium. Beatae fuga dolor porro labore pariatur, excepturi quae illum
      adipisci ducimus a odio nostrum ea maxime dicta corporis. Quam reiciendis
      dolor nihil deserunt vel quae minus voluptatem nulla illo itaque commodi,
      illum odio numquam, tenetur officiis ducimus alias voluptate labore. Quis,
      dicta incidunt. Perspiciatis ipsam eos nam quasi saepe non ullam corrupti
      minus veritatis reprehenderit, itaque repellat magni amet quae incidunt
      consectetur, deleniti eaque sed. Placeat, ipsam dicta temporibus illum id
      nulla impedit tenetur maiores inventore, ab reprehenderit. Dolorum beatae
      delectus facere nihil adipisci, vitae repellat dolores distinctio
      voluptate doloribus laborum sint similique aperiam excepturi nulla totam
      recusandae incidunt nemo reiciendis optio! Ex rem rerum quasi neque ullam
      pariatur quam doloribus sint eveniet magni accusantium molestiae
      aspernatur voluptas, dolorem adipisci debitis tenetur, voluptatum maiores
      repellendus deleniti alias laudantium est. Natus deserunt dicta ut
      deleniti, quisquam porro suscipit recusandae quae alias modi
      necessitatibus nobis minima. Perspiciatis sed est fugiat vero. Blanditiis
      dolores dolor repudiandae ipsum, at alias quidem? Commodi aperiam vel
      quidem expedita libero. Atque, dolor sed! Odio, nemo dolorem? Aliquid
      perspiciatis fugiat voluptatum laboriosam voluptate eos vel officia neque,
      saepe delectus a ea hic, ullam quos, ut sunt veniam optio mollitia
      consectetur ad? Reiciendis maiores sed dignissimos eius expedita sint
      facilis neque pariatur, tempore rem adipisci molestiae beatae
      reprehenderit quod, quaerat consequuntur nemo dolore perspiciatis
      recusandae obcaecati accusantium repellat magni? Cupiditate, tenetur earum
      possimus perspiciatis ea eius iste doloribus, laboriosam qui omnis culpa
      architecto eveniet quis excepturi voluptatem odit, velit dignissimos?
      Dolorum enim similique, exercitationem ipsum natus vero ipsam
      necessitatibus tenetur consequatur quae eaque corrupti porro corporis odio
      minus quidem ut impedit suscipit, voluptas maiores architecto dolor omnis
      delectus. Facilis quam quod cupiditate ipsam possimus incidunt minus
      placeat ducimus sapiente adipisci, fugiat vero animi odio? Sapiente
      explicabo saepe dolor provident, a nesciunt soluta consequatur autem eos
      ducimus voluptatem quidem, maxime vel aut. Consequuntur magni veniam et
      labore enim vel laboriosam repellat quisquam, id voluptas natus quod saepe
      exercitationem, corrupti cupiditate debitis, quis facilis. Corporis
      voluptatibus nihil tempore quod consequatur fuga delectus eaque. Sit
      expedita, corrupti repellendus numquam commodi excepturi molestiae aliquam
      quia velit, facere, recusandae sint illum doloremque dignissimos fugit
      dolores pariatur porro. Quas quibusdam accusamus cumque, repudiandae
      reiciendis laboriosam repellat ab itaque maxime? Excepturi beatae iste
      dignissimos consequatur quo, soluta earum facilis reprehenderit molestiae,
      dolorem, voluptas explicabo ducimus error tempora saepe. Veritatis est nam
      unde ullam porro doloremque, ratione dignissimos nesciunt neque temporibus
      maiores officiis consequuntur. Impedit labore, nesciunt ipsa voluptates
      magni quam vero tempora iste sunt vel enim possimus atque, blanditiis ad
      assumenda facere! Tempora illo aliquam temporibus excepturi aspernatur
      ducimus autem delectus nulla eos architecto fuga facilis sequi enim qui
      nemo voluptatum iste itaque quae, et odio voluptate magni. Ipsum delectus
    </div>
  );

  if (!viewFull) {
    return (
      <div className="Profile">
        <div className="Profile_photo"></div>
        <div className="Profile_stats">
          <div>{10} Post</div>
          <div>{129} Followers</div>
          <div>{23} Following</div>
        </div>
        <div className="Profile_bio">
          {editingBio ? textArea : bio}
          <button
            className="bio_edit_btn"
            onClick={() => {
              setEditingBio(!editingBio);
            }}
          >
            {editingBio ? "Save" : "Edit"}
          </button>
        </div>
        <div className="Profile_post">
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
          <div
            className="post_review"
            onClick={() => {
              setViewFull(true);
            }}
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Profile_P">
        <div className="clear_btn_Profile">
          <IconButton
            aria-label="Clear"
            onClick={() => {
              setViewFull(false);
            }}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="Profile_Po">
          <ProfilePost editing={editingPost} setEditing={setEditingPost} />
        </div>
        {!editingPost ? comments : editform}
      </div>
    );
  }
}
