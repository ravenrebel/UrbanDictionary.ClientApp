import { TagDTO } from './tag-dto';

export class WordDTO {
    id: number;
    name: string;
    definition: string;
    authorName: string;
    creationDate: Date;
    example: string;
    image: string;
    wordStatus: number;
    likesCount: number;
    dislikesCount: number;
    tags: string[];
}
