export type Settings = { name:string; title:string; bio:string; whatsapp:string; instagram:string; modality:string; duration:number; bookingOpen:boolean; weekly:Record<string,string[]> };
export type Post = {id:string;title:string;excerpt:string;body:string;category:string;image:string;instagram:string;published:number;createdAt:string;example?:boolean};
export const defaultSettings:Settings = {
 name:"Taila",title:"Terapeuta TRG",bio:"Um espaço de escuta e acolhimento, com atenção às mulheres, às famílias e às histórias que cada pessoa carrega. Um convite para se olhar com mais cuidado e dar o próximo passo no seu tempo.",
 whatsapp:"5548996051098",instagram:"https://www.instagram.com/familialopeskegler/",modality:"A combinar",duration:60,bookingOpen:false,weekly:{"0":[],"1":[],"2":[],"3":[],"4":[],"5":[],"6":[]},
};
export const samplePosts:Post[] = [
 {id:"example-1",title:"Quando foi a última vez que você se escutou?",excerpt:"Entre tantas tarefas, também pode existir um tempo para você.",body:"Às vezes, o dia passa inteiro entre compromissos e expectativas. Este é um convite para abrir um pequeno espaço e perguntar: como eu estou hoje?\n\nNão é preciso encontrar todas as respostas agora. O primeiro passo pode ser apenas se permitir essa pergunta.",category:"Um olhar para si",image:"",instagram:"",published:0,createdAt:"",example:true},
 {id:"example-2",title:"Você também merece o cuidado que oferece.",excerpt:"Acolher a própria história pode começar em pequenos gestos.",body:"Existe cuidado em ouvir alguém com atenção. E também pode existir cuidado em reconhecer o que você precisa.\n\nAbrir um lugar para si na própria rotina é um convite que pode ser construído aos poucos, com respeito ao seu tempo.",category:"Cuidado no cotidiano",image:"",instagram:"",published:0,createdAt:"",example:true},
 {id:"example-3",title:"Relações se constroem no dia a dia.",excerpt:"Presença, conversa e espaço para ouvir fazem parte do caminho.",body:"Cada família tem suas histórias, seus jeitos e seus desafios. O diálogo pode começar com uma pergunta simples e com a disposição para ouvir.\n\nEste texto é um convite à reflexão sobre presença e cuidado nas relações.",category:"Vínculos e família",image:"",instagram:"",published:0,createdAt:"",example:true},
];
export const dayNames=["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
export function localToday(){const p=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());return `${p.find(x=>x.type==="year")!.value}-${p.find(x=>x.type==="month")!.value}-${p.find(x=>x.type==="day")!.value}`;}
export function formatDate(date:string){return new Date(date+"T12:00:00-03:00").toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric",timeZone:"America/Sao_Paulo"});}
export function minutes(time:string){const [h,m]=time.split(":").map(Number);return h*60+m;}
export function validDate(date:string){if(typeof date!=="string"||!/^\d{4}-\d{2}-\d{2}$/.test(date))return false;const d=new Date(date+"T12:00:00Z");return !Number.isNaN(d.valueOf())&&d.toISOString().slice(0,10)===date;}
