import "./Stories.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useRef, useState } from "react";

export default function Stories() {
  const [storyClass, setStoryClass] = useState("story_hide");
  let story_timeout_id = useRef(undefined);
  return (
    <div className="Stories">
      <div className={`${storyClass}`}>
        <div className="clear_btn">
          <IconButton
            aria-label="Clear"
            onClick={() => {
              clearTimeout(story_timeout_id.current);
              setStoryClass("story_hide");
            }}
          >
            <ClearIcon fontSize="large" />
          </IconButton>
        </div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint deserunt
        praesentium consectetur. Tempore doloremque ad eum beatae doloribus
        deleniti ipsum repudiandae iure blanditiis hic! Deleniti, assumenda
        iure? Provident, consectetur consequatur, similique corrupti officiis
        praesentium dolorum nam harum natus rem fuga laboriosam suscipit atque
        tenetur quos distinctio labore delectus soluta aut minus animi repellat
        perferendis. Soluta dignissimos reiciendis odio perspiciatis velit fuga
        adipisci voluptate consequatur tempora tenetur? Quibusdam distinctio
        debitis non nesciunt suscipit odio expedita, recusandae ex dolor
        reiciendis laudantium quisquam sequi odit explicabo est eligendi quo
        incidunt error temporibus laborum minima libero quidem nulla et?
        Pariatur amet repellat possimus dolore asperiores, consequuntur laborum
        ad quibusdam hic magnam rem mollitia aut, nemo debitis deleniti quasi
        corporis, nam unde quia quae? Ratione corporis modi sequi omnis? Non
        similique, omnis at labore vel vero quae dolores aspernatur distinctio
        architecto aliquid sapiente doloribus provident doloremque iusto porro
        ipsam earum corporis debitis soluta alias illo maxime culpa accusantium?
        Deserunt quia rem dignissimos quod provident quam reiciendis sunt
        eveniet dolorum voluptates. Dolor placeat, quisquam recusandae suscipit
        aliquid ipsum! Rerum consequatur repellat inventore doloremque dolorum
        incidunt quibusdam suscipit error quas quae fuga, at architecto, dolor
        odit modi, nisi soluta accusamus. Blanditiis deserunt tenetur quis
        perspiciatis error excepturi omnis obcaecati, dolorum placeat ut
        praesentium autem voluptates, iste consequatur non modi libero aut. A
        necessitatibus hic repellat magni distinctio nobis, ut, laudantium
        dolorem, laborum at facilis aspernatur sapiente tenetur maxime ipsam
        incidunt magnam quasi perspiciatis dolor vero. Officiis numquam porro
        accusamus cum, velit corporis vel, a, at ipsam dolor itaque omnis.
        Voluptatibus ratione veritatis, maxime vero dolorem iusto aspernatur
        quas nam quasi incidunt officiis cum eaque voluptas earum culpa velit
        quisquam eum unde dolores esse laudantium omnis? Laudantium nam quod
        aliquid. Dolorem, debitis modi aspernatur vero, aliquam neque
        perferendis temporibus deserunt explicabo et dolorum id dicta
        exercitationem, autem minima ullam? Labore voluptate, quos, maiores
        placeat perspiciatis natus quis, molestias soluta voluptas ut officia
        rerum culpa quisquam excepturi explicabo quia. Provident aliquid illum
        veniam necessitatibus, sequi, debitis accusamus aspernatur expedita
        vitae animi dolor quisquam velit soluta reiciendis, dolore veritatis
        facere voluptatibus illo at consectetur corrupti beatae ipsa! Culpa
        veniam cumque vel, mollitia voluptatibus corrupti repellendus eius
        dignissimos necessitatibus a? Perspiciatis unde saepe eaque laboriosam
        recusandae eius dolores at incidunt, hic sed. Velit quos corrupti
        ducimus iste vero sit eum tenetur molestias optio beatae maxime,
        quibusdam assumenda saepe sunt ad at aliquid vel repudiandae! Esse
        mollitia consequuntur deleniti ipsa animi atque facilis minima error
        veniam voluptate fuga maxime tenetur, consectetur unde magnam
        perspiciatis at officia? Necessitatibus eius tenetur cumque nulla
        quisquam aspernatur quas iure quaerat maxime aliquid totam doloribus
        asperiores libero, labore quibusdam consequatur eaque at in? Aspernatur
        veniam ipsum ab voluptatum in. Illum reprehenderit quam excepturi
        repellat iste cum dignissimos explicabo officiis, perferendis
        perspiciatis vel omnis tempora dolorem quo provident, voluptatum iure
        hic exercitationem placeat ullam laborum! Repellendus quibusdam
        voluptatum alias rem consequatur, molestiae adipisci, excepturi, culpa
        optio ex ab eaque unde at officiis! Omnis veritatis delectus odit
        pariatur, eligendi consequatur minima dicta in quo debitis, nostrum
        quidem, id ab? Officiis beatae quo tempore et debitis sed quibusdam
        adipisci eum eveniet. Nisi quibusdam architecto voluptatum pariatur
        officiis magnam, magni ex eveniet laboriosam sapiente. Quasi dolor,
        ipsum nihil consectetur nisi nobis, minus odio deserunt itaque aperiam
        ad expedita iure tempora, dolorem labore facere vel sint! Laborum totam
        deleniti quidem quasi officiis animi molestiae aliquam? Saepe quidem
        vero dolores nam repellat, recusandae enim accusamus tempora hic, qui
        officiis. Quia voluptates sed atque sint dolorem magnam tenetur repellat
        illum cum reiciendis, aliquid, quae rerum iure deleniti veniam quasi?
        Rerum libero facere, distinctio possimus vel laboriosam temporibus,
        eveniet nisi architecto nihil aspernatur officiis? Nulla quos quod
        officia architecto ducimus ipsam, laboriosam suscipit assumenda
        corrupti, distinctio, tempora voluptates praesentium quidem amet.
        Voluptate beatae ab architecto deleniti corrupti at dicta suscipit
        cupiditate amet eum dolorum, repellat molestias. Mollitia quod dolores
        rerum ab, praesentium earum rem quisquam perspiciatis architecto
        doloribus exercitationem qui repellendus, facilis voluptatibus
        cupiditate numquam dolore, ducimus consequatur quos neque ad quae
        recusandae ipsa! Itaque voluptates nemo dignissimos totam ullam,
        deleniti accusantium delectus enim quam id iste fuga repellendus labore
        omnis repudiandae. Voluptatum quisquam architecto omnis vel tempore
        debitis inventore ab provident laudantium accusantium. Dolore delectus
        tenetur sapiente repudiandae corporis distinctio, iste sequi, quod
        commodi voluptates provident fugit amet? Consequatur laudantium velit,
        voluptatem animi culpa neque minus corporis nulla unde alias. Provident
        totam, aliquid quam ratione sunt quas, fuga hic pariatur adipisci
        similique, iure libero harum aspernatur? Quasi, necessitatibus
        repellendus aspernatur similique aut nihil quisquam ut fugiat obcaecati
        vitae doloremque voluptatibus excepturi, nostrum sapiente adipisci modi
        aliquid accusamus id. Eius possimus, hic aliquid minima a ullam omnis
        libero quaerat repellendus facilis. Illum consequuntur itaque saepe
        explicabo placeat? Tempora pariatur cupiditate, ab impedit incidunt
        commodi dolore. Illum error illo porro soluta, est explicabo quasi quod
        officiis maxime sint. Corporis perspiciatis totam fugiat magni voluptate
        odio, quo ullam delectus, consectetur est quidem nostrum molestias
        iusto! Similique incidunt, modi exercitationem nesciunt omnis inventore
        aut error provident! At nisi, hic ad nesciunt officia amet reprehenderit
        vitae voluptate, incidunt facilis distinctio? Dolorem quibusdam minima
        deleniti ducimus eius? Enim ipsam, dolore maiores error eaque rerum a
        nesciunt laudantium quidem alias qui repellendus, molestias officia,
        magni itaque facilis sunt quasi voluptas impedit cumque quia. A amet
        pariatur quisquam illum, debitis necessitatibus aspernatur ullam
        temporibus consequuntur deserunt magnam. Fuga repudiandae non iusto at
        libero, laborum animi explicabo dolorem nam totam ullam ipsum cumque,
        neque numquam. Commodi amet dolorem nihil alias pariatur architecto
        itaque odio, numquam, sunt quia soluta possimus saepe, autem obcaecati
        beatae quidem natus temporibus fuga perspiciatis porro repellendus vero
        sit provident nulla? Iste, dolores omnis quidem possimus dicta, illo
        ullam totam sit repellat consectetur eos sint, cupiditate error optio.
        Ipsam, fugit earum illum, quam ab perferendis odit quasi delectus
        necessitatibus laboriosam quaerat non! Consectetur facilis expedita modi
        architecto sequi possimus iste nobis accusamus corporis quisquam sit eos
        impedit, fuga reprehenderit explicabo enim maxime hic quibusdam fugiat.
        Facere ratione officia in fuga et dolorum illum, consequatur perferendis
        repellendus, veniam asperiores odit natus pariatur? Optio molestias enim
        cumque, dignissimos dicta consequatur ratione iusto.
      </div>
      <Stack direction="row" spacing={2} className="Stories_stack">
        <div
          onClick={() => {
            setStoryClass("story");
            story_timeout_id.current = setTimeout(() => {
              setStoryClass("story_hide");
            }, 5000);
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: "70px", height: "70px" }}
            style={{ marginBottom: "10px" }}
          />
        </div>
      </Stack>
    </div>
  );
}
