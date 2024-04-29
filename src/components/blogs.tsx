import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import image from "@/assets/image.jpg";
import nature from "@/assets/nature.jpeg";
import { Heart, ThumbsDown, MessageSquareHeart } from "lucide-react";

export default function Blogs() {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Blogs
      </h2>
      <div className="grid grid-cols-3 gap-5 cursor-pointer">
        <Card className="overflow-hidden  hover:shadow-lg">
          <img src={nature} alt="" className="w-full h-64 object-cover" />
          <CardHeader>
            <div className="text-sm font-semibold text-primary">
              Nitya Sunar
            </div>
            <CardTitle className="text-lg">Create project</CardTitle>
            <CardDescription className="line-clamp-4">
              Deploy your new project in one-click.Deploy your new project in
              one-click. Deploy your new project in one-click. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laborum reprehenderit
              consequatur expedita ut! Doloremque eaque odio rem voluptates
              explicabo modi porro perferendis minima, earum eos magnam!
              Suscipit voluptatibus sapiente asperiores?
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-start gap-2 cursor-pointer">
            <Heart size={20} className="hover:text-red-600" />
            <ThumbsDown size={20} />
            <MessageSquareHeart size={20} />
          </CardFooter>
        </Card>
        <Card className="overflow-hidden  hover:shadow-lg">
          <img src={image} alt="" className="w-full h-64 object-cover" />
          <CardHeader>
            <div className="text-sm font-semibold text-primary">
              Nitya Sunar
            </div>
            <CardTitle className="text-lg">Create project</CardTitle>
            <CardDescription className="line-clamp-4 text-justify">
              Deploy your new project in one-click.Deploy your new project in
              one-click. Deploy your new project in one-click. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laborum reprehenderit
              consequatur expedita ut! Doloremque eaque odio rem voluptates
              explicabo modi porro perferendis minima, earum eos magnam!
              Suscipit voluptatibus sapiente asperiores?
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-start gap-2 cursor-pointer">
            <Heart size={20} className="hover:text-red-600" />
            <ThumbsDown size={20} />
            <MessageSquareHeart size={20} />
          </CardFooter>
        </Card>
        <Card className="overflow-hidden  hover:shadow-lg">
          <img src={image} alt="" className="w-full h-64 object-cover" />
          <CardHeader>
            <div className="text-sm font-semibold text-primary">
              Nitya Sunar
            </div>
            <CardTitle className="text-lg">Create project</CardTitle>
            <CardDescription className="line-clamp-4 text-justify">
              Deploy your new project in one-click.Deploy your new project in
              one-click. Deploy your new project in one-click. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laborum reprehenderit
              consequatur expedita ut! Doloremque eaque odio rem voluptates
              explicabo modi porro perferendis minima, earum eos magnam!
              Suscipit voluptatibus sapiente asperiores?
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-start gap-2 cursor-pointer">
            <Heart size={20} className="hover:text-red-600" />
            <ThumbsDown size={20} />
            <MessageSquareHeart size={20} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
