import DASC_LOGO from "@/assets/img/dasc-logo.png";
import { Nav } from "@/core/components/Nav";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Separator,
  TooltipProvider,
} from "@/core/components/ui";
import { ModuleListMenu } from "@/core/constants";
import { cn } from "@/core/lib";
import { useAppDispatch, useAppSelector } from "@/core/store/hooks";
import { setDefaultLayout, toggleCollapsedMenu } from "@/core/store/slices";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

type Props = {
  navCollapsedSize: number;
};

export const AsideMenu = ({ navCollapsedSize }: Props) => {
  const dispatch = useAppDispatch();
  const { collapsedMenu, defaultLayout } = useAppSelector((state) => state.ui);

  const onLayout = (sizes: number[]) => {
    dispatch(setDefaultLayout(sizes));
  };

  const onCollapse = () => {
    dispatch(toggleCollapsedMenu());
  };

  const onResize = () => {
    dispatch(toggleCollapsedMenu());
  };

  return (
    <aside className="flex flex-col pt-6 border-r">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={onLayout}
          className="h-full items-stretch min-w-64"
        >
          <ResizablePanel
            defaultSize={defaultLayout}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={onCollapse}
            onResize={onResize}
            className={cn(
              collapsedMenu &&
                "min-w-[50px] transition-all duration-300 ease-in-out",
            )}
          >
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
          </ResizablePanel>
          <ResizableHandle withHandle />
        </ResizablePanelGroup>
      </TooltipProvider>
    </aside>
  );
};
