export interface Task{
    uuid?: string;
    name: string;
    desc: string;
    priority: string; 
    date?: Date;   // ? for ignore dto validation .... 

}