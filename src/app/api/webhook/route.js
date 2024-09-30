// /app/api/webhook/route.js
import { NextResponse } from "next/server";
import db from "@/firestore";
import { collection, addDoc } from "firebase/firestore";

// Function to handle incoming webhook
export async function POST(request) {
  try {
    // Get the webhook payload (assuming it's in JSON format)
    const payload = await request.json();

    // Extract payment-related information from the payload
    const {
      customer_details,
      order_status,
      order_amount,
      order_id,
      transaction_id,
    } = payload.data.order;

    if (order_status === "PAID") {
      // Add payment details to Firestore
      const docRef = await addDoc(collection(db, "payments"), {
        orderId: order_id,
        transactionId: transaction_id,
        customerName: customer_details.customer_name,
        customerEmail: customer_details.customer_email,
        customerPhone: customer_details.customer_phone,
        orderAmount: order_amount,
        status: order_status,
        timestamp: new Date().toISOString(), // Add a timestamp
      });

      // Add user to "users_paid" collection for future validation
      const refpaid = await addDoc(collection(db, "users_paid"), {
        customerName: customer_details.customer_name,
        customerEmail: customer_details.customer_email,
        timestamp: new Date().toISOString(), // Adding timestamp
      });

      console.log("Payment added to Firestore with ID: ", docRef.id);
      console.log("User added to Firestore with ID: ", refpaid.id);

      return NextResponse.json(
        { message: "Payment recorded successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: "Payment not successful, not recorded" },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("Error processing webhook or adding payment:", error);
    return NextResponse.json(
      { message: "Error processing webhook" },
      { status: 500 },
    );
  }
}
