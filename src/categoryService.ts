export class CategoryService {
    public getCategories(): Array<any> {
        let categories = [{ id: 1, name: "A", description: "description", type: "type 1", photo: "photo.jpg" }];
        return categories;
    }
}