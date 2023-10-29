<script>
  import { Avatar, DarkMode } from "flowbite-svelte";
  import logo from "$lib/img/penta-agora.png";
  let darkmodebtn =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 z-50";
</script>

<header>
  <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
    >
      <div class="flex items-center">
        <Avatar src={logo} border size="md" class="mr-3 ring-red-100" />
        <span
          class="self-center text-4xl font-semibold whitespace-nowrap text-gray-700 dark:text-white"
          >Sollicitatie PentAgora Docent</span
        >
      </div>
      <div class="flex items-center lg:order-2">
        <DarkMode btnClass={darkmodebtn} />
      </div>
    </div>
  </nav>
</header>
