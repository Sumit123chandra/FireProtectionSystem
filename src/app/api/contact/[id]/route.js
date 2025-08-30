import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";

// DELETE /api/contact/:id
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    await Contact.findByIdAndDelete(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error (Vercel):", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
