export class CategoryService {
    public getCategories(): Array<any> {
        let categories = [{ id: 1, name: "A", description: "description a", type: "type A" }];
        return categories;
    }
}