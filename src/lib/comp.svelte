<script>
  // @ts-nocheck

  import { Modal, Card, Button, GradientButton } from "flowbite-svelte";
  import { ArrowRightOutline, FileImportOutline } from "flowbite-svelte-icons";
  let ModalName = false;
  export let ImgComp;
  export let TitleComp;
  export let QuoteComp;
  export let TextComp;
  export let BtnColorComp;
</script>

<div>
  <Card img={ImgComp} horizontal class="mb-4 md:h-64 bg-sky-50">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-400"
    >
      {TitleComp}
    </h5>
    <p
      class="mb-3 font-normal italic text-gray-600 dark:text-gray-400 leading-tight"
    >
      {QuoteComp}
    </p>
    <div class="mt-4 md:mt-12">
      <GradientButton
        color={BtnColorComp}
        on:click={() => (ModalName = true)}
        autoclose
      >
        Lees meer <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
      </GradientButton>
    </div>
  </Card>
</div>

<Modal title="" bind:open={ModalName} autoclose outsideclose>
  <div class="relative mt-6">
    <div class="flex justify-center items-center">
      <img src={ImgComp} alt="" class="max-w-md rounded-md" />
    </div>
    <h1
      class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"
    >
      {TitleComp}
    </h1>
  </div>
  <h2 class="italic text-3xl indent-0.5">{QuoteComp}</h2>
  {@html TextComp}
  <div class="flex justify-end">
    <GradientButton color={BtnColorComp}>Sluiten</GradientButton>
  </div>
</Modal>
