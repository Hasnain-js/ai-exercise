import { defineStore } from "pinia";

interface exerciseData {
  id: string;
  step: string,
  title: string;
  exercises: object,
}
export const useExerciseStore = defineStore("exercise", {
  state: () => ({
    exercise: [] as Array<exerciseData>,
  }),
  actions: {
    eraseExerciseData() {
      this.exercise = [];
    },
    // An action to set exercise data
    setExerciseData(data: exerciseData) {
      this.exercise.push(data); // Set exercise to the provided data
    },
  },
  persist: true,
});
