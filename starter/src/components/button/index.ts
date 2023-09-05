export interface Props {
  type?: "submit" | "button";
  onClick?: () => void;
}

export const defaultProps: Partial<Props> = {
  type: "button",
};

export function onMounted() {
  console.log("component mounted");
}

export function onUnMounted() {
  console.log("component mounted");
}
