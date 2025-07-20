



// ~/composable/lyceeData.ts
export const lyceeList : any = ref([
  { name: "Lycée Gaston Berger", town: "Lille", status: "Lycée Public" },
  { name: "Etienne Dolet", town: "", status: "" },
    { name: "Lycée privé Charles de Foucauld", town: "", status: "" },
  { name: "Lycée polyvalent Guillaume Tirel", town: "", status: "" },
  { name: "Lycée polyvalent l'Initiative", town: "", status: "" },
  { name: "Lycée polyvalent privé Saint Jean de Montmartre", town: "", status: "" },
  { name: "Lycée privé Pascal", town: "", status: "" },
  { name: "Lycée du bâtiment et des travaux publics", town: "", status: "" },
  { name: "Lycée polyvalent privé Saint-Nicolas", town: "", status: "" },
  { name: "Lycée privé La Rochefoucauld", town: "", status: "" },
  { name: "Lycée technique privé de l'école technique supérieure du laboratoire", town: "", status: "" },
  { name: "Lycée privé Charles Péguy", town: "", status: "" },
  { name: "Lycée privé Sainte-Louise", town: "", status: "" },
  { name: "Lycée privé L'Ecole alsacienne", town: "", status: "" },
  { name: "Lycée polyvalent ESAA-Ecole Boulle", town: "", status: "" },
  { name: "Lycée polyvalent Paul Poiret", town: "", status: "" },
  { name: "Lycée Charlemagne", town: "", status: "" },
  { name: "Lycée Claude Monet", town: "", status: "" },
  { name: "Lycée privé Lucien de Hirsch", town: "", status: "" },
  { name: "Lycée privé Saint-Michel de Picpus", town: "", status: "" }
  // ... autres lycées ...
])

export const initializeLyceeList = () => {
  const towns = ["Rennes", "Lille", "Paris", "Marseille"]
  lyceeList.value = lyceeList.value.map((lycee : any, index : number) => {
    if (index === 0) return lycee
    return {
      ...lycee,
      town: towns[Math.floor(Math.random() * towns.length)],
      status: Math.random() > 0.5 ? "Lycée Public" : "Lycée Privé"
    }
  })
}
