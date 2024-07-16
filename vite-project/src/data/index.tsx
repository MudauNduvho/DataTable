
import { TransferData } from "../types";
import { CheckboxOutline, CloseOutline } from "react-ionicons";


export const data:TransferData ={
    Name:{
values:["Kellen Moore",
"Pelle Torsey",
"Victoria Secret",
"John Maluleke",
"Philmon Kubayi",
"Donald Moore",
"Edgar Phuluso", 
"Jerome Nguni",
"Fred Cologne",
"Faith Osayi",
"Prince Sibanye",
"Raymond Nehafhe",
"Julius Mbalula",
"Fikile Malema",
"Cyril Pandor",

],
className:(value:string |boolean | number)=>
    value==="Torey Carpo" || value=== "Luis Eurigonez"
? "text-green-400 font-medium"
: "text-white",
    },
   Age:{
    values:[
        "27",
        "34",
        "22",
        "25",
        "44",
        "52",
        "29",
        "23",
        "32",
        "20",
        "26",
        "36",
        "49",
        "47",
        "59",

    ],
   },
   Email:{values:[
"KellenMooreexam@gmail.com",
"PTorsey55exam@gmail.com",
"VickySexam@gmail.com",
"JohnMalulekeexam@gmail.com",
"Phillyexam@gmail.com",
"DMooreexam@gmail.com",
"JambaAsangyeexam@gmail.com", 
"TVilakaziexam@gmail.com",
"Fred45Cologneexam@gmail.com",
"Osayi3exam@gmail.com",
"PrinceSibanyeexam@gmail.com",
"NalediRamaphosaexam@gmail.com",
"juju38exam@gmail.com",
"Razmatazzexam@gmail.com",
"Cyrilexam@gmail.com",




   ],
   className:(value:string |boolean | number)=>
    typeof value==="string" &&value.includes("John")
? "text-green-400 font-medium"
: "text-white",
    },
    Role:{
values:["Ceo",
    "Cfo",
    "Coo",
    "Developer",
    "Designer",
    "Network Admin",
    "Manager",
    "Hr",
    "Lawyer",
    "Engineer",
    "Broadcaster",
    "Analyst",
    "Spokesperson",
    "Data Analyst",
    "Director",

],

    },
    Salary :{
        values:[
            "370000",
            "20000",
            "170000",
            "120000",
            "74000",
            "52000",
            "59000",
            "29000",
            "25000",
            "66000",
            "26000",
            "36000",
            "39000",
            "47000",
            "99000",
    
        ],
        renderValue:(value:string |boolean | number)=>{
            if (typeof value==="number")
        {return (
            <div className={'font-medium R{value>8000 ? "text-green":"text-red-400"}'} >
                R{value.toLocaleString()}
            </div>
         );}
            },
       },

       Active:{
        values:[
            "true",
            "true",
            "true",
            "false",
            "true",
            "false",
            "true",
            "true",
            "false",
            "true",
            "true",
            "true",
            "true",
            "false",
            "false",
    
        ],
        renderBoolean: (value:boolean)=>
            value?(
<CheckboxOutline
cssClasses={"text-green-400"}
width="30px"
height="30px"/>):(
    <CloseOutline cssClasses={"text-red-400"}
width="30px"
height="30px"/>
),


       },
            

};