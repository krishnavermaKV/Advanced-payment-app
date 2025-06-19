"use client";

import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { Button } from "./Button";
import { createOnRampTransaction } from "../app/lib/actions/createOnRampTxn";

const Supported_Banks = [
  {
    name: "HDFC BANK",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "AXIS BANK",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddmoneyCard = () => {
  const [redirectUrl, setRedirecturl] = useState(
    Supported_Banks[0]?.redirectUrl
  );
  const [amount, setamount] = useState(0);
  const [provider, setprovider] =  useState(
    Supported_Banks[0]?.name || ""
  );
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput label="Amount" placeholder="Amount" onChange={(value) => {
          setamount(Number(value));
        }} />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            setRedirecturl(
              Supported_Banks.find((x) => x.name === value)?.redirectUrl || ""
            );
            setprovider(
              Supported_Banks.find((x) => x.name === value)?.redirectUrl || ""
            );
          }}
          options={Supported_Banks.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        ></Select>
        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
               await createOnRampTransaction(provider, amount);
              window.location.href = redirectUrl || "";
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
