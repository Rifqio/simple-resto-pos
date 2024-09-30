export class Menu {
    id: string;
    name: string;
    price: number;
    description: string;
    image?: string;
    category: string;
    isAvailable: boolean;
    constructor({ id, name, price, description, image, category, isAvailable }: { id: string, name: string; price: number; description: string; image?: string; category: string; isAvailable: boolean }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
        this.isAvailable = isAvailable;
    }
}