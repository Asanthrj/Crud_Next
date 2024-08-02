import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  Topic.push({title,description,id:Topic.length })
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  const topics = Topic;
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
 const index = Topic.findIndex( (value) => value.id == id)
 Topic.splice(index,1)
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
