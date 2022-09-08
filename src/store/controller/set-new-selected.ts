import { toppingsState } from "../state";

export function setNewSelected(selected: Record<string, boolean>) {
  Object.assign(toppingsState.selected, selected);
}
