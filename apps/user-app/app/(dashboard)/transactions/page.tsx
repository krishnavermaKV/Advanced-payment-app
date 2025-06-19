import { getServerSession } from "next-auth";
import { P2POnRampTransaction } from "../../../component/P2pOnramp";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";



async function getOnrampTransaction() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (!userId) return [];

    const txns = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { toUserId: Number(userId) },
                { fromUserId: Number(userId) }
            ]
        }
    });

    return txns.map(tx => {
        const isIncoming = tx.toUserId === Number(userId);
        return {
            time: tx.timestamp,
            amount: tx.amount,
            status: "Success",
            from: isIncoming ? 0 : tx.fromUserId,
            to: isIncoming ? tx.toUserId : 0
        };
    });
}

export default async function() {
         const transactions = await getOnrampTransaction();
            return <div className="w-screen">
                   <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                       Transaction History
                   </div>
                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
                       <div>
                           <div className="pt-4">
                             <P2POnRampTransaction transactions={transactions}/>
                           </div>
                       </div>
                   </div>
             </div>
}