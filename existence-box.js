import fs from "fs";
import path from "path";

export default class ExistenceBox {
constructor(api) {
this.api = api;
this.api.on("characterSheetLoaded", (characterSheet) => {
const raceBox = characterSheet.getBox("Raça");
const existenceBox = characterSheet.createBox("Existência");
existenceBox.setTitle("Existência");
existenceBox.setDescription("Esta caixa de texto é usada para armazenar informações sobre a existência do seu personagem.");
raceBox.insertAfter(existenceBox);
});
}
}

export const module = {
name: "Existence Box",
description: "Um módulo para FoundryVTT que adiciona uma caixa de texto extra na ficha do personagem com o nome "Existência" e a coloca ao lado da raça na parte de atributos da ficha do jogador.",
load: async (api) => {
const module = new ExistenceBox(api);
module.load();
return module;
},
};