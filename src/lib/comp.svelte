<script>
  // @ts-nocheck

  import { Modal, Card, Button, GradientButton } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  let ModalName = false;
  export let ImgComp;
  let TitleComp = "Mens";
  let QuoteComp = "Je bent niet voor jezelf op de wereld, maar voor de ander";
  let TextComp =
    "<p>Graag wil ik mij voorstellen: ik ben Jeroen geboren in Vlaardingen en opgegroeid in Spijkenisse. Ik ben echtgenote van Anja en vader van een tweeling Jelke en Meie en een zoon Noek. Ik ben van jongs af aan al veel met sport en bewegen bezig. Op dit moment doe ik zelf graag hardlopen, doe ik aan golfsurfen, snowboarden, wielrennen en skaten.</p><p>Mijn interesse ligt verder bij maatschappelijk kwesties, hou ik van technologische ontwikkelingen, video editing, maken van websites. Ik ben iemand die van een uitdaging houdt en open staat om nieuwe dingen te leren. </p><p>Ik ben vooral die aardige gast die openstaat, makkelijk connectie maakt, interesse toont, mensen probeert te inspireren en te verbinden.</p>";
  let BtnColorComp = "cyan";
</script>

<div>
  <Card img="./src/img/{ImgComp}" horizontal class="mb-4 h-64">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-400"
    >
      {TitleComp}
    </h5>
    <p
      class="mb-3 font-normal italic text-gray-600 dark:text-gray-400 leading-tight"
    >
      “{QuoteComp}”
    </p>
    <GradientButton
      color={BtnColorComp}
      on:click={() => (ModalName = true)}
      autoclose
    >
      Lees Meer <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
    </GradientButton>
  </Card>
</div>

<Modal title="" bind:open={ModalName} autoclose outsideclose>
  <div class="relative mt-2">
    <div class="flex justify-center items-center">
      <img src="./src/img/{ImgComp}" alt="" class="max-w-md rounded-md" />
    </div>
    <h1
      class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"
    >
      {TitleComp}
    </h1>
  </div>
  <h2 class="italic text-3xl indent-0.5">“{QuoteComp}”</h2>
  {@html TextComp}
  <div class="flex justify-end">
    <GradientButton color={BtnColorComp}>Sluiten</GradientButton>
  </div>
</Modal>
