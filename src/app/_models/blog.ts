export class Blog {
    _id: String;
    title: String;
    image?: String;
    date: String;
    content: String;
    author: String;
    comments: [{ body: String, date: Date }];
}
