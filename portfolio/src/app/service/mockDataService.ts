import { TranslateService } from "@ngx-translate/core";
import { firstValueFrom } from "rxjs";

export interface TypeTranslate {
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

export async function translateServicesData(translateService: TranslateService): Promise<TypeTranslate[]> {
    const translatedServices: TypeTranslate[] = [];

    for (const service of services) {
        const translatedService: TypeTranslate = {
            dataImage: service.dataImage,
            dataH4: await firstValueFrom(translateService.get(service.dataH4)),
            dataP: await firstValueFrom(translateService.get(service.dataP))
        };

        translatedServices.push(translatedService);
    }

    return translatedServices;
}


