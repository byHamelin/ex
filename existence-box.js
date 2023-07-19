import fs from "fs";
import path from "path";

export default class ExistenceBox {
constructor(api) {
this.api = api;
this.api.on("characterSheetLoaded", (characterSheet) => {
const box = characterSheet.createBox("Existência");
box.setTitle("Existência");
box.setDescription("Esta caixa de texto é usada para armazenar informações sobre a existência do seu personagem.");
});
}
}

export const module = {
name: "Existence Box",
description: "Um módulo para FoundryVTT que adiciona uma caixa de texto extra na ficha do personagem com o nome "Existência" para mostrar sobre o que se trata a caixa de texto.",
load: async (api) => {
const module = new ExistenceBox(api);
module.load();
return module;
},
};