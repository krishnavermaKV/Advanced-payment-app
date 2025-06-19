import { Card } from "@repo/ui/card"

export const P2POnRampTransaction = ({ transactions }: {
  transactions: {
    time: Date,
    amount: number,
    status: string,
    from: number,
    to: number
  }[]
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">
          No Recent Transactions
        </div>
      </Card>
    )
  }

  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t, index) => {
          const isIncoming = t.from === 0;
          return (
            <div key={t.time.toISOString() + t.amount + index} className="flex justify-between border-b py-2">
              <div>
                <div className="text-sm">
                  {isIncoming ? "Received INR" : "Sent INR"}
                </div>
                <div className="text-slate-600 text-xs">
                  {t.time.toISOString().split("T")[0]}
                </div>
              </div>
              <div className={`flex flex-col justify-center ${isIncoming ? "text-green-600" : "text-red-600"}`}>
                {isIncoming ? "+" : "-"} Rs {t.amount / 100}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  )
}
