import { COBERTURAS } from "../consts/coberturas";
import { TCobertura } from "../types/cobertura";

export function toCoberturasSelecionadasArray(coberturasSelecionadas: Record<number, boolean>) {
  return Object.entries(coberturasSelecionadas)
    .filter(([, selecionado]) => selecionado)
    .map(([id]) => COBERTURAS.find(cob => cob.id === Number(id)) as TCobertura);
}