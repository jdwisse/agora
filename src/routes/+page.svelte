<script>
  import Header from "$lib/header.svelte";
  import Comp from "$lib/comp.svelte";
  let ImgComp = "";
  import imgUrlMens from "$lib/img/mens.png";
  import imgUrlMicheal from "$lib/img/micheal.png";
</script>

<div class="container px-5 pt-5 pb-14 mx-auto font-lato text-lg">
  <Header />
  <main class="flex justify-center items-center mb-20">
    <div class="grid gap-3 grid-cols-1 lg:grid-cols-2">
      <Comp ImgComp={imgUrlMens} />
      <Comp ImgComp={imgUrlMicheal} />
    </div>
  </main>
</div>
