import { Menu } from "@models/menu.model";

export class AllMenuResponseDTO {
    category: string;
    menus: Array<Menu>;

    constructor({ category, menus }: { category: string; menus: Array<Menu> }) {
        this.category = category;
        this.menus = menus;
    }
}