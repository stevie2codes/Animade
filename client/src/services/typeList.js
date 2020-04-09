export const types = [
  { _id: "1a", type: "Enter" },
  { _id: "1b", type: "Exit" },
  { _id: "1c", type: "Static" }
];

export function getTypes() {
  return types.filter(t => t);
}
