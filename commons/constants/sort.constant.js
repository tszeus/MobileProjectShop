import { SortEnum } from "../enums/sort.enum";

export const SortTextConstant = [
    // Thời gian tăng dần
    {
        name: "Thời gian xa đến gần",
        enum: SortEnum.TimeAsc,
        active: true
    },

    // Thời gian giảm dần
    {
        name: "Thời gian gần đến xa",
        enum: SortEnum.TimeDes
    },

    // Giá tăng dần
    {
        name: "Giá tăng dần",
        enum: SortEnum.PriceAsc
    },

    // Giá giảm dần
    {
        name: "Giá giảm dần",
        enum: SortEnum.PriceDes
    }
]