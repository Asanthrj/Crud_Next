
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  const index = Topic.findIndex( (value) => value.id === id)
  console.log(index);
  Topic.splice(index,1,{  title,  description ,id})
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  const topic = Topic.filter((value)=>value.id == id);
  return NextResponse.json({ topic }, { status: 200 });
}
