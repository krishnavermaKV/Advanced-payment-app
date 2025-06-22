import express from "express"
// import { PrismaClient } from "@repo/db/client";
import "dotenv/config";
// const  db = new PrismaClient();
const app = express();
app.use(express.json());
app.post("/hdfcbankWebhook", async (req, res) => {
     // TodO: add zod  validation here
     // check if this request actually came from hdfc  bank, use a webhook secret here
     const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
     };
     // Update balance in db, add txn
     //transactions
     try{
      //   await db.$transaction([
      //     db.balance.updateMany({
      //         where: {
      //           userId: paymentInformation.userId
      //         },
      //         data: {
      //           amount: {
      //             increment: Number(paymentInformation.amount)        
      //           }
      //         }
      //    }),
      //   db.onRampTransaction.updateMany({
      //      where: {
      //        token: paymentInformation.token
      //      },
      //      data: {
      //        status: "Success"
      //      }
      //   })
      // ]);
      res.status(200).json({
          message: "Captured"
      })
    }
    catch(e){
      console.error(e);
      res.status(411).json({
        message: "Error while processing webhook"
      })
    }
 
     // Update balance in db, add txn
});

app.listen(3003);