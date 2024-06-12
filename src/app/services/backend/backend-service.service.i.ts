export interface IBlog {
    content: string;
    createdAt: string;
    description: string;
    id: string;
    image: string;
    title: string;
}

export interface IBlogListFilterParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: "asc" | "desc";
    search?: string;
}