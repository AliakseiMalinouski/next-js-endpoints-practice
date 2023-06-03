import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    title: "Napoli won Seria A",
    body: "Some info about italian football",
  },
  {
    id: 2,
    title: "Manchester City won Premiership",
    body: "Some info about English football",
  },
  {
    id: 3,
    title: "Barcelona won La Liga",
    body: "Some info about Spanish football",
  },
];

export async function GET(request) {

  // const { searchParams } = new URL(request.url);

  // const query = searchParams.get("q");

  

  // let currentData = posts

  // if(query) {
  //   currentData = posts.filter(elem => elem.title.toLowerCase().includes(query.toLowerCase()));
  // }

  return NextResponse.json({
    message: "Text"
  })
}

export async function POST (req) {
  const body = await req.json();

  return NextResponse.json({body})
}
