export class Menu {
    name: string;
    price: number;
    description: string;
    image?: string;
    category: string;
    isAvailable: boolean;
    constructor({ name, price, description, image, category, isAvailable }: { name: string; price: number; description: string; image?: string; category: string; isAvailable: boolean }) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
        this.isAvailable = isAvailable;
    }
}