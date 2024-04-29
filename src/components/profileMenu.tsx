import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileMenu() {
  return (
    <div className="flex gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={"sm"}
            variant="outline"
            className="border-primary text-primary"
          >
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Login Here</DialogTitle>
            <DialogDescription className="text-center">
              Login to like, comment and share your thoughts.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                email:
              </Label>
              <Input
                id="email"
                placeholder="example@gmail.com"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                password:
              </Label>
              <Input
                id="password"
                placeholder="password"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/*Register Dialog*/}
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"}>Resgiter</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register</DialogTitle>
            <DialogDescription>
              Register to like, comment and share your thoughts.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                email:
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name:
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                password:
              </Label>
              <Input id="password" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Register</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
