export interface IClass {
    id?: string | null | undefined;
    title?: string;
    content? : string;
    code?: string;
    summary ?: string;
    className?: string;
    thumbnailUrl?: string;
    durationMinutes ?: number;
    maxStudents?: number;
    status?: string;
    creatorId?: string;
    teacherId?: number;
    videoUrl ?: string;
    tests?: ITest[];
}

// interfaces.ts
export interface ITest {
    id?:string
    classId ?:string
    question?:string,
    options : IOption[]
}
export interface IOption {
    optionId?:string
    testId?:string
    optionText?:string,
    isCorrect?:boolean
}

