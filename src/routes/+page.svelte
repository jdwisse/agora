<script>
  import Header from "$lib/header.svelte";
  import Comp from "$lib/comp.svelte";
  let ImgComp = "";
  import imgUrlMens from "$lib/img/mens.png";
  import imgUrlMicheal from "$lib/img/micheal.png";
  import imgUrlCoach from "$lib/img/coach.png";
  import imgUrlPedagoog from "$lib/img/pedagoog.png";
  import imgUrlDidactiek from "$lib/img/didactiek.png";
  import imgUrlOnderwijzer from "$lib/img/onderwijzer.png";
  import imgUrlEinstein from "$lib/img/einstein.png";
</script>

<div
  class="container px-5 pt-5 pb-14 mx-auto font-lato text-lg bg-sky-50 dark:bg-gray-800 rounded-sm"
>
  <Header />
  <div
    class="bg-sky-100 dark:bg-sky-900 p-10 rounded-lg m-10 text-xl text-slate-900 dark:text-slate-400"
  >
    <p>
      Dit is mijn sollicitatie. Ik heb gekozen voor een site omdat dit bij mij
      past. Onder de motorkap van deze site zit de laatste nieuwe code. Ik heb
      deze challenge aangepakt om meteen iets nieuws te leren.
    </p>
    <p class="pt-4">"Agoriaanse Meesters zijn nooit uitgeleerd."</p>
    <p class="pt-4">
      Ik heb een verdeling gemaakt in 7 onderdelen. Klik op de knop "lees meer"
      om meer te weten te komen.
    </p>
  </div>
  <main class="flex justify-center items-center mb-20">
    <div class="grid gap-3 grid-cols-1 lg:grid-cols-2">
      <Comp
        ImgComp={imgUrlMens}
        TitleComp="Mens"
        QuoteComp="“Je bent niet voor jezelf op de wereld, maar voor de ander”"
        TextComp="<p>Graag wil ik mij voorstellen: ik ben Jeroen, geboren in Vlaardingen en opgegroeid in Spijkenisse. Ik ben echtgenoot van Anja en vader van een tweeling Jelke en Meie en een zoon Noek. Ik ben van jongs af aan al veel met sport en bewegen bezig. Op dit moment doe ik zelf graag aan hardlopen, golfsurfen, snowboarden, wielrennen en skaten.</p> 

        <p>Mijn interesse ligt verder bij maatschappelijke kwesties, ik hou van technologische ontwikkelingen, video editing en maken van websites. Ik ben iemand die een uitdaging niet uit de weg gaat en open staat om nieuwe dingen te leren. </p> 
        
        <p>Ik ben vooral die aardige gast die openstaat, makkelijk connectie maakt, interesse toont, mensen probeert te inspireren en te verbinden.</p> 
        "
        BtnColorComp="cyan"
      />
      <Comp
        ImgComp={imgUrlCoach}
        TitleComp="Coach"
        QuoteComp="“Het is in eerste instantie niet belangrijk wat je leert, maar dat je leert”"
        TextComp="<p>In mijn verschillende rollen op de Charles de Foucauld ben ik vaak aan het coachen.</p> 

        <p>Afgelopen schooljaar heb ik mijn eerste groep leerlingen succesvol laten doorgroeien naar het vervolgonderwijs. Nu ben ik coach van een groep van 22 leerlingen in het eerste leerjaar. Soms vervul ik de mentor gerelateerde taken in een groepsgesprek. Ik maak afspraken met een leerling voor een individueel gesprek. Wat ik ook heel waardevol vind is het ouder-, leerling- en coachgesprek. De leerling kan daar het proces wat hij/zij heeft doorgemaakt presenteren.</p> 
        
        <p>Ik ben Teamcoach van de First Lego League Challenge. Afgelopen jaar hebben wij de eerste en tweede plek behaald, daar waren wij allen echt heel trots op.</p>  
        
        <p>Tijdens de lessen L.O. ben ik voortdurend in een coachende rol bezig. Ik vind het super leuk om leerlingen 
        uit te dagen, te motiveren en gezamenlijk doelen te stellen en te reflecteren.</p> 
        "
        BtnColorComp="pink"
      />
      <Comp
        ImgComp={imgUrlPedagoog}
        TitleComp="Pedagoog"
        QuoteComp="“Als een leerling elke dag lachend naar school gaat en elke dag lachend thuis komt hoef je hem niks te leren” - Sjef Drummen"
        TextComp="<p>Het lesgeven in een gymzaal is iets anders dan in een traditioneel klaslokaal. Als docent L.O. ben ik constant bezig met het behoud van een veilig klimaat voor leerlingen.</p>  

        <p>Je wordt in het onderwijs na de basisschool op cognitief niveau ingedeeld. Motorisch en fysiek zijn de verschillen binnen de groep veel groter dan op cognitief niveau, daarbij is het beweegniveau ook nog eens heel erg zichtbaar voor de andere groepsleden.</p>  
        
        <p>Je durven te uiten en kwetsbaar op te stellen, dat is wat ik vraag van mijn leerlingen. Rekening houden met elkaar is wat ik mijn leerlingen leer. Iedereen moet zich op zijn of haar niveau kunnen ontwikkelen, dat vind ik erg belangrijk.</p>
        "
        BtnColorComp="green"
      />
      <Comp
        ImgComp={imgUrlDidactiek}
        TitleComp="Didacticus"
        QuoteComp="“Kinderen zijn autodidactische leermachines: je hoeft alleen maar van de uitknop af te blijvenc. - Robbert Dijkgraaf"
        TextComp="<p>Toen ik de opleiding tot snowboardleraar volgde had ik twee leraren. De ene was een type zoals Louis van Gaal die mij haarfijn kon uitleggen hoe je technisch een bocht aan kan leren. De andere docent was meer een type zoals Guus Hiddink, die stelde de vraag: “Waarom maak je eigenlijk een bocht bij snowboarden?”.  De eerste leraar legde mij de techniek uit maar de tweede leraar leerde mij zelf na te denken. </p> 

        <p>Hoe iemand zijn leerproces (autodidactisch) het beste kan inrichten is de reis die je als docent richting kan geven. De voorwaarde scheppen, leerstrategieën aanbieden, ideeën aandragen, de bronnen beschikbaar maken, dat is wat onderwijs mooi maakt. Een individu inspireren en gebruik te laten maken van mijn expertise en levenservaring is wat ik bij mijn eigen kinderen elke dag doe en ook graag deel met mijn leerlingen.</p> 
        "
        BtnColorComp="purple"
      />
      <Comp
        ImgComp={imgUrlOnderwijzer}
        TitleComp="Onderwijzer"
        QuoteComp="“Yes we Can” - Barack Obama"
        TextComp="<p>“Een persoon die overdracht van kennis of vaardigheden verzorgt” - van Dale</p>

        <p>Wat is in deze tijd nu echt belangrijk: Kennis of vaardigheden? Met de opkomst van het internet, YouTube en AI is kennis voorhanden. Een onderwijzer is naar mijn mening meer iemand die er is voor de leerling, het goede voorbeeld geeft en weet wanneer hij of zij iets nodig heeft voor een optimaal leerproces. Die balans vindt tussen zijn persoonlijkheid, de coach, de pedagoog en de didacticus om de leerling zich prettig te laten voelen en de ruimte te bieden om zichzelf te kunnen ontwikkelen.</p> 
        
        <p>Geef het jonge mens het vertrouwen dat die het gaat maken.</p>
        "
        BtnColorComp="blue"
      />
      <Comp
        ImgComp={imgUrlMicheal}
        TitleComp="Teamspeler"
        QuoteComp="“Talent wins games, but teamwork and intelligence win championships.” - Michael Jordan"
        TextComp="<p>Ik werk graag samen. Eén ding dat ik heb ervaren tijdens het thuiswerken is dat het minder bij mij past. Ik heb interactie nodig en ga graag een goed gesprek aan. Samenwerken is ook leren van elkaar om elke dag een beetje beter te worden.
        </p>
        <p>Ik vind het zeer waardevol dat de coaches bij Agora ruim de tijd krijgen aan het begin en einde van de dag zodat je van elkaar kan leren.</p>
        "
        BtnColorComp="red"
      />
      <Comp
        ImgComp={imgUrlEinstein}
        TitleComp="Agoriaanse meesters"
        QuoteComp="“Als je niet wakker ligt van je dromen, zijn ze niet groot genoeg”"
        TextComp="<p>Waarom Agora onderwijs ook wel iets voor mij als kind was.</p>
        <p>Toen ik zelf op het voortgezet onderwijs zat deed ik Havo op de Blaise Pascal (nu Scala Molenwatering). Ik was niet zo van de talen totdat ik een cassettebandje kreeg van mijn vrienden met Amerikaanse hiphop. Naast dat het erg stoer klonk wilde ik toch eigenlijk wel weten wat er verteld werd en ging dan ook zelf op onderzoek uit. Ik kopieerde de songteksten vol straattaal en vertaalde deze zelf. Mijn Engels ging met sprongen vooruit maar niet door mijn docent Engels, ik wilde het zelf leren.</p>
        
        <p>Later in de tijd dat ik op de Halo in Kijkduin met vrienden zat, hadden wij het idee om dit in navolging van Wednesday Night Skate van Rotterdam op vrijdag te organiseren in Spijkenisse. Ik heb daar heel wat van geleerd, zoals sponsorcontracten afsluiten, vergunningen regelen, subsidie aanvragen, verkeersregelaars op laten leiden op het politiebureau en websites maken. Soms was het stressvol en waren er tegenslagen maar we hadden vooral veel lol, het voelde niet als leren.</p>
        
        <p>Tien jaar geleden wilde ik zelf een dynamische website kunnen maken. Ik ben toen een eigen bedrijf begonnen en niet zonder succes, meer dan 300 sportscholen hebben mijn diensten afgenomen. Ik onderhield contact (in het Engels dankzij Hiphop Tapes) met een jongen in Madagaskar die voor mij 3D afbeeldingen maakte van fitness houdingen. De afbeeldingen diende als voorbeeld voor klanten die met mijn programma een schema volgden. Bij het eigen bedrijf hoorden vele taken zoals marketing, verkoopgesprekken, administratie en samenwerken met zzp'ers. Maar ook vele dagen en nachten code leren. Dit allemaal vanuit een intrinsieke motivatie en autodidactisch geleerd. Ik leerde veel van wat klanten nodig hadden, ik dacht met ze mee,  stond open voor ideeën en wilde nieuwe dingen leren.</p>
        
        <p>Bovenstaande voorbeelden hebben mij ervan overtuigd dat Agora onderwijs leerlingen kan laten zijn wie ze willen worden.</p> 
        
        <p>Het lijkt mij dan ook een mooie uitdaging om te mogen werken voor Agora onderwijs.</p>
        "
        BtnColorComp="teal"
      />
    </div>
  </main>
  <footer>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex justify-center text-gray-600 dark:text-gray-400">
      j.wisse@penta.nl
    </div>
  </footer>
</div>
