import { TranslateService } from "@ngx-translate/core";

interface TypeTranslate {
    dataImage: string,
    dataH4: string,
    dataP: string
}

export const services: TypeTranslate[] = [
    {
        dataImage: '../../assets/images/angular/image3.png',
        dataH4: 'services.card1.dataH4', 
        dataP: 'services.card1.dataP'   
    },
    {
        dataImage: '../../assets/images/spring/image2.png',
        dataH4: 'services.card2.dataH4', 
        dataP: 'services.card2.dataP'   
    },
    {
        dataImage: '../../assets/images/docker/image2.png',
        dataH4: 'services.card3.dataH4', 
        dataP: 'services.card3.dataP'   
    }
];



// export function translateMockDataService(mockData: TypeTranslate[], translateService: TranslateService): TypeTranslate[] {
//     return mockData.map(item => ({
//         ...item,
//         dataH4: translateService.instant(item.dataH4),
//         dataP: translateService.instant(item.dataP)
//     }));
// }

export function translateMockDataService(mockData: TypeTranslate[], translateService: TranslateService): TypeTranslate[] {
    console.log("Starting translation process...");
    const translatedData = mockData.map(item => {
        const translatedItem = {
            ...item,
            dataH4: translateService.instant(item.dataH4),
            dataP: translateService.instant(item.dataP)
        };
        console.log(`Translated item: ${JSON.stringify(translatedItem)}`);
        return translatedItem;
    });
    console.log("Translation process completed.");
    return translatedData;
}
