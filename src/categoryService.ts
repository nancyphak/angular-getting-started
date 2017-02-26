export class CategoryService {
    public getCategories() {
        let categories = [{ id: 1, name: "A", description: "category A", type: "type A", photo: "photo.jpg" }];
        return categories;
    }
}