export interface IPagination{
    page: number;
    limit: number;
    pageSizeOptions: number[];
}

export interface IFilterAndSort{
    sortBy?: string;
    order?: "asc" | "desc";
    search?: string;
}