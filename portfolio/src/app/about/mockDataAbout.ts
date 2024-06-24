import { TranslateService } from "@ngx-translate/core";
import { firstValueFrom } from "rxjs";

export interface TypeAbout {
    order: string,
    text: string
}

export const dataAbout = [
    {
        order: "2023 - 2024",
        text: "about.card.text1",
    },
    {
        order: "2022 - 2023",
        text: "about.card.text2",
    },
    {
        order: "2021 - 2022",
        text: "about.card.text3",
    },
    {
        order: "2019 - 2020",
        text: "about.card.text4",
    },
    {
        order: "2018 - 2019",
        text: "about.card.text5",
    }
];

export async function translateAboutData(translateService: TranslateService): Promise<TypeAbout[]> {
    const translateAbouts: TypeAbout[] = [];

    for(const about of dataAbout) {
        const translateAbout: TypeAbout = {
            order: about.order,
            text: await firstValueFrom(translateService.get(about.text)),
        };
        translateAbouts.push(translateAbout);
    }

    return translateAbouts;
} 