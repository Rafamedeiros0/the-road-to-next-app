import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/features/auth/actions/sign-out";
import { accountPasswordPath, accountProfilePath } from "@/paths";
import { User as AuthUser } from "better-auth";
import { LucideLogOut, LucideUser } from "lucide-react";
import Link from "next/link";

type AccountDropdownProps = {
  user: AuthUser;
};

const AccountDropdown = ({ user }: AccountDropdownProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            {/*<AvatarImage src="https://github.com/shadcn.png" />*/}
            <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href={accountProfilePath()}>
              <LucideUser className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={accountPasswordPath()}>
              <LucideUser className="mr-2 h-4 w-4" />
              <span>Password</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <form action={signOut}>
              <LucideLogOut className="mr-2 h-4 w-4" />
              <button type="submit">Sign Out</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export { AccountDropdown };
