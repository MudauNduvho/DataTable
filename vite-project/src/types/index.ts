

export type TransferData = {

[Key:string]:{
    values:Array<string |boolean | number>;
    className?:(value:string |boolean | number)=>string;
    renderBoolean?:(value:any)=> React.ReactNode;
    renderValue?:(value:string |boolean | number)=> React.ReactNode;
};
};

export type sorting = {
key:string;
direction: "asend" | "desend" | null;
};
