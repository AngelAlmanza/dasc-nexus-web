import DASC_LOGO from "@/assets/img/dasc-logo.png";
import { Nav } from "@/core/components/Nav";
import { Separator } from "@/core/components/ui";
import { ModuleListMenu } from "@/core/constants";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const AsideMenu = () => {
  return (
    <aside className="flex flex-col pt-6 border-r">
      <div className="h-full items-stretch min-w-64">
        <AspectRatio
          ratio={16 / 9}
          className="px-4"
        >
          <img src={DASC_LOGO} />
        </AspectRatio>
        <div className="-mt-10">
          <Separator />
          <Nav links={ModuleListMenu} />
        </div>
      </div>
    </aside>
  );
};
