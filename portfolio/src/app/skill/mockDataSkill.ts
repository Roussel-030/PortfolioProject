import { TranslateService } from "@ngx-translate/core";
import { firstValueFrom } from "rxjs";

export interface TypeSkill {
    dataImage: string,
    dataSpan1: string,
    dataSpan2: string,
    colorSpan1: string,
    colorSpan2: string,
    colorBar: string,
    dataStyle: string
}

export const technicalSkills: TypeSkill[] = [

    {
        dataImage: "../../assets/images/javascript/images.png",
        dataSpan1: "Javascript",
        dataSpan2: "80%",
        colorSpan1: "text-yellow-200",
        colorSpan2: "text-yellow-400",
        colorBar: "bg-yellow-400",
        dataStyle: "width: 80%"
    },
    {
        dataImage: "../../assets/images/typescript/images.png",
        dataSpan1: "TypeScript",
        dataSpan2: "83%",
        colorSpan1: "text-blue-300",
        colorSpan2: "text-blue-300",
        colorBar: "bg-blue-400",
        dataStyle: "width: 83%"
    },
    {
        dataImage: "../../assets/images/angular/images.png",
        dataSpan1: "Angular",
        dataSpan2: "80%",
        colorSpan1: "text-red-400",
        colorSpan2: "text-red-500",
        colorBar: "bg-red-500",
        dataStyle: "width: 80%"
    },
    {
        dataImage: "../../assets/images/react/images.png",
        dataSpan1: "React",
        dataSpan2: "67%",
        colorSpan1: "text-blue-500",
        colorSpan2: "text-blue-700",
        colorBar: "bg-blue-700",
        dataStyle: "width: 67%"
    },
    {
        dataImage: "../../assets/images/spring/image4.png",
        dataSpan1: "Spring",
        dataSpan2: "85%",
        colorSpan1: "text-green-500",
        colorSpan2: "text-green-500",
        colorBar: "bg-green-500",
        dataStyle: "width: 85%"
    },
    {
        dataImage: "../../assets/images/java/images.png",
        dataSpan1: "JavaEE",
        dataSpan2: "80%",
        colorSpan1: "text-blue-500",
        colorSpan2: "text-blue-700",
        colorBar: "bg-blue-600",
        dataStyle: "width: 80%"
    }

];

export const professionalSkills: TypeSkill[] = [
    {
        dataImage: "../../assets/images/creativity/images.png",
        dataSpan1: "skills.card.creativity",
        dataSpan2: "80%",
        colorSpan1: "text-gray-100",
        colorSpan2: "text-gray-100",
        colorBar: "bg-gray-700",
        dataStyle: "width: 80%"
    },
    {
        dataImage: "../../assets/images/communication/images.png",
        dataSpan1: "skills.card.communication",
        dataSpan2: "80%",
        colorSpan1: "text-gray-100",
        colorSpan2: "text-gray-100",
        colorBar: "bg-gray-700",
        dataStyle: "width: 80%"
    },
    {
        dataImage: "../../assets/images/problemSolving/images.png",
        dataSpan1: "skills.card.problem_solving",
        dataSpan2: "80%",
        colorSpan1: "text-gray-100",
        colorSpan2: "text-gray-100",
        colorBar: "bg-gray-700",
        dataStyle: "width: 80%" 
    },
    {
        dataImage: "../../assets/images/teamwork/images.png",
        dataSpan1: "skills.card.teamwork",
        dataSpan2: "80%",
        colorSpan1: "text-gray-100",
        colorSpan2: "text-gray-100",
        colorBar: "bg-gray-700",
        dataStyle: "width: 80%"
    }
];

export async function translateSkillData(translateService: TranslateService): Promise<TypeSkill[]> {
    const translateSkills: TypeSkill[] = [];

    for(const skill of professionalSkills) {
        const translateSkill: TypeSkill = {
            dataImage: skill.dataImage,
            dataSpan1: await firstValueFrom(translateService.get(skill.dataSpan1)),
            dataSpan2: skill.dataSpan2,
            colorSpan1: skill.colorSpan1,
            colorSpan2: skill.colorSpan2,
            colorBar: skill.colorBar,
            dataStyle: skill.dataStyle
        };
        translateSkills.push(translateSkill);
    }

    return translateSkills;
} 
