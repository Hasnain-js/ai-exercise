import { defineStore } from "pinia";

interface exerciseData {
  id: string;
  selected: Array<string>;
  narative: string;
  createdAt: string;
}
export const useExerciseStore = defineStore("exercise", {
  state: () => ({
    exercise: [{} as exerciseData],
  }),
  actions: {
    eraseExerciseData() {
      this.exercise = [{} as exerciseData];
    },
    // An action to set exercise data
    setExerciseData(data: exerciseData) {
      this.exercise.push(data); // Set exercise to the provided data
    },
  },
  persist: true,
});
