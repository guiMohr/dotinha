import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
    items: Item[] = [];

    defaultItem: any = {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear.",
    };


    constructor() {
        let items = [
            {
                "name": "Abaddon",
                "profilePic": "assets/dota2/Abaddon_icon.png",
                "about": "Support - Carry - Resistance",
                "attributes": [
                    {"attributeName": "23 + 2.6", "attributeIcon": "assets/dota2/40px-Strength_primary_attribute_symbol.png"},
                    {"attributeName": "17 + 1.5", "attributeIcon": "assets/dota2/40px-Agility_attribute_symbol.png"},
                    {"attributeName": "21 + 2",   "attributeIcon": "assets/dota2/40px-Intelligence_attribute_symbol.png"}
                ],
                "skills": [
                    { "skillName":"Espiral da Neblina", "skillIcon": "assets/dota2/Mist_Coil_icon.png"},
                    { "skillName":"Escudo Afótico", "skillIcon": "assets/dota2/Aphotic_Shield_icon.png"},
                    { "skillName":"Maldição do Averno", "skillIcon": "assets/dota2/Curse_of_Avernus_icon.png"},
                    { "skillName":"Tempo Emprestado", "skillIcon": "assets/dota2/Borrowed_Time_icon.png"}
                ],
                "counters": [
                    { "counterName":"Ancient Apparition", "counterIcon": "assets/dota2/Ancient_Apparition_icon.png"},
                    { "counterName":"Doom", "counterIcon": "assets/dota2/Doom_icon.png"},
                    { "counterName":"Lina", "counterIcon": "assets/dota2/Lina_icon.png"}
                ]
            },
            {
                "name": "Axe",
                "profilePic":"assets/dota2/Axe_icon.png",
                "about": "Iniciator - Resistance - Desactivator - Hunter",
                "attributes": [
                    {"attributeName": "25 + 2.8", "attributeIcon": "assets/dota2/40px-Strength_primary_attribute_symbol.png"},
                    {"attributeName": "20 + 2.2", "attributeIcon": "assets/dota2/40px-Agility_attribute_symbol.png"},
                    {"attributeName": "18 + 1.6",   "attributeIcon": "assets/dota2/40px-Intelligence_attribute_symbol.png"}
                ],
                "skills": [
                    { "skillName":"Grito do Furioso", "skillIcon": "assets/dota2/Berserker's_Call_icon.png"},
                    { "skillName":"Fome de Batalha", "skillIcon": "assets/dota2/Battle_Hunger_icon.png"},
                    { "skillName":"Contraespiral", "skillIcon": "assets/dota2/Counter_Helix_icon.png"},
                    { "skillName":"Lâmina de Abate", "skillIcon": "assets/dota2/Culling_Blade_icon.png"}
                ],
                "counters": [
                    { "counterName":"Lifestealer", "counterIcon": "assets/dota2/Lifestealer_icon.png"},
                    { "counterName":"Doom", "counterIcon": "assets/dota2/Doom_icon.png"},
                    { "counterName":"Pugna", "counterIcon": "assets/dota2/Pugna_icon.png"}
                ]
            }
            // {
            //     "name": "Donald Duck",
            //     "profilePic": "assets/img/speakers/duck.jpg",
            //     "about": "Donald is a Duck."
            // },
            // {
            //     "name": "Eva Eagle",
            //     "profilePic": "assets/img/speakers/eagle.jpg",
            //     "about": "Eva is an Eagle."
            // },
            // {
            //     "name": "Ellie Elephant",
            //     "profilePic": "assets/img/speakers/elephant.jpg",
            //     "about": "Ellie is an Elephant."
            // },
            // {
            //     "name": "Molly Mouse",
            //     "profilePic": "assets/img/speakers/mouse.jpg",
            //     "about": "Molly is a Mouse."
            // },
            // {
            //     "name": "Paul Puppy",
            //     "profilePic": "assets/img/speakers/puppy.jpg",
            //     "about": "Paul is a Puppy."
            // }
        ];

        for (let item of items) {
            this.items.push(new Item(item));
        }
    }

    query(params?: any) {
        if (!params) {
            return this.items;
        }

        return this.items.filter((item) => {
            for (let key in params) {
                let field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                } else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    }

    add(item: Item) {
        this.items.push(item);
    }

    delete(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
