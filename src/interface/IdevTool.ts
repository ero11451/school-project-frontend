export  interface IDocumentation {
    id?: number;
    title: string;
    description: string;
    sections: ISection[];
  }
  
   interface ISection {
    id?: number;
    heading: string;
    content: string;
    code?: string; // Optional
    language?: string; // Optional
    examples?: string[]; // Optional
    tips?: string; // Optional
    subsections?: ISubsection[]; // Optional
  }
  
   interface ISubsection {
    id?: number;
    subheading: string;
    content: string;
    examples?: string[];
    tips?: string;
  }
  