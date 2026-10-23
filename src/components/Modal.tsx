"use client";
import {useEffect,useRef} from "react";
import {X} from "lucide-react";
export default function Modal({children,onClose,label,wide=false}:{children:React.ReactNode;onClose:()=>void;label:string;wide?:boolean}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{ref.current?.showModal();const prev=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=prev;};},[]);return <dialog ref={ref} className={`modal ${wide?"wide":""}`} aria-label={label} onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===ref.current)onClose();}}><div className="modal-inner"><button className="icon-button modal-close" onClick={onClose} aria-label="Fechar"><X size={21}/></button>{children}</div></dialog>;}
