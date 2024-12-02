export interface Documentation {
    id?: number;
    title: string;
    description: string;
    sections: Section[];
  }
  
  export interface Section {
    id?: number;
    heading: string;
    content: string;
    code?: string; // Optional
    examples?: string[]; // Optional
    tips?: string; // Optional
    subsections?: Subsection[]; // Optional
  }
  
  export interface Subsection {
    id?: number;
    subheading: string;
    content: string;
    examples?: string[];
    tips?: string;
  }
  