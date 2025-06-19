"use client"
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { Button } from "./Button";
import { P2PTransfer } from "../app/lib/actions/p2ptransfer";


export function SendCard () {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="w-full">
        <Center>
           <Card title="Send">
             <div className="min-w-72 pt-2">
               <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                setNumber(value);
               }} />
                <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                    setAmount(value);
                }}/>
               <div className="mt-4 item-center flex justify-center">
                  <Button onClick={async () => {
                     await P2PTransfer(number, Number(amount)*100);
                  }}>
                    Send</Button>
               </div>
             </div>
           </Card>
        </Center>
    </div>
}