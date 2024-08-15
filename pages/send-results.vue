<script setup>
import Swal from "sweetalert2";

definePageMeta({
  middleware: ["auth"],
});
const exercises = ref(null);
const titles = ["Talents", "Top Skills", "Disciplines", "Industries"];
onMounted(async () => {
  getUserData()
    .then((res) => {
      exercises.value = res.exercises;
    })
    .catch(() => {
      useRouter().push(`/`);
    });
});

const maxSelections = computed(() => {
  if (exercises.value) {
    return Math.max(
      ...Object.values(exercises.value).map((item) =>
        Array.isArray(item.selected) ? item.selected.length : 0,
      ),
    );
  }
});

const handleSendEmail = () => {
  Swal.fire({
    icon: "success",
    text: "Email send successfully.",
    confirmButtonColor: "#14b8a6",
  }).then(() => {
    navigateTo("/");
  });
};
</script>
<template>
  <ExerciseLayout
    :title="'Your progress based on your selection'"
    :objective="''"
  >
    <div
      class="flex flex-col justify-between w-full md:min-h-[calc(100vh-176px)] min-h-[90vh] relative overflow-y-scroll no-scrollbar"
    >
      <div class="px-2">
        <h2 class="text-slate-700 text-2xl capitalize font-semibold">
          Results
        </h2>
        <div class="relative md:my-8 my-6 overflow-x-auto">
          <table class="rounded w-full">
            <thead>
              <tr>
                <th
                  :id="index"
                  :key="index"
                  v-for="(result, index) in titles"
                  class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50"
                >
                  {{ result }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="index in maxSelections" :key="index">
                <td
                  v-for="(exercise, key) in exercises"
                  class="text-start text-gray-900 border whitespace-nowrap md:text-base text-xs bg-white"
                  :key="key"
                >
                  <input
                    type="text"
                    class="outline-none border-none focus:ring-2 focus:ring-blue-500 p-4"
                    :value="exercise.selected[index - 1] || ''"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 class="text-slate-700 text-2xl capitalize font-semibold">
          Narrative
        </h2>
        <div class="relative md:my-8 my-6 overflow-x-auto">
          <table class="rounded w-full">
            <thead>
              <tr>
                <th
                  class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50"
                >
                  Title
                </th>
                <th
                  class="text-start text-gray-700 border md:text-base text-xs p-4 bg-gray-50"
                >
                  Narrative
                </th>
              </tr>
            </thead>
            <tbody v-if="exercises">
              <tr :key="index" v-for="(result, index) in titles">
                <th
                  class="text-start text-gray-900 border whitespace-nowrap md:text-sm text-xs p-4 bg-white"
                >
                  {{ result }}
                </th>
                <td class="border bg-white">
                  <input
                    type="text"
                    class="outline-none text-start text-gray-900 border-none focus:ring-2 md:text-sm text-xs whitespace-nowrap focus:ring-blue-500 p-4 w-full"
                    :value="exercises[`exercise${index + 1}`].narrative || ''"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex items-center" v-if="exercises">
        <p class="text-black/60 font-medium leading-relaxed">
          Send your results to your email
        </p>
        <NuxtLink
          @click="handleSendEmail"
          class="w-fit block ml-auto my-4 px-11 sticky bottom-0 py-3 tracking-wide text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
        >
          Send
        </NuxtLink>
      </div>
    </div>
  </ExerciseLayout>
</template>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
