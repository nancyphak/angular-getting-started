export class CategoryService {
    public getCategories() {
        let categories = [{ id: 1, name: "A", type: "type A", description: "description A", photo: "photo.jpg" }];
        return categories;
    }
}